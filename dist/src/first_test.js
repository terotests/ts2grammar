"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CodeToConsume = /** @class */ (function () {
    function CodeToConsume() {
    }
    CodeToConsume.prototype.copy = function () {
        var o = new CodeToConsume();
        o.str = this.str;
        o.index = this.index;
        return o;
    };
    CodeToConsume.prototype.from = function (cc) {
        this.str = cc.str;
        this.index = cc.index;
        return this;
    };
    CodeToConsume.prototype.has = function (test) {
        for (var i = 0; i < test.length; i++) {
            if (test.charCodeAt(i) !== this.str.charCodeAt(this.index + i))
                return false;
        }
        return true;
    };
    CodeToConsume.prototype.consume = function (test) {
        for (var i = 0; i < test.length; i++) {
            if (test.charCodeAt(i) !== this.str.charCodeAt(this.index + i))
                return false;
        }
        this.index += test.length;
        return true;
    };
    // Not real...
    CodeToConsume.prototype.consumeString = function () {
        var len = 0;
        for (var i = this.index; i < this.str.length; i++) {
            if (this.str.charCodeAt(i) > 60) {
                len++;
            }
            else {
                break;
            }
        }
        if (len > 0) {
            var start = this.index;
            this.index += len;
            return this.str.substring(start, start + len);
        }
        return "";
    };
    return CodeToConsume;
}());
exports.CodeToConsume = CodeToConsume;
var SelfReference = /** @class */ (function () {
    function SelfReference() {
    }
    SelfReference.prototype.create = function () {
        return new SelfReference();
    };
    SelfReference.prototype.consume = function (code) {
        return null;
    };
    return SelfReference;
}());
exports.SelfReference = SelfReference;
var Reference = /** @class */ (function () {
    function Reference() {
        this.MetaData = {
            structure: [null],
            types: ['Reference'],
            ownTypes: ['Expression', 'Reference'],
            precedence: 999,
        };
    }
    Reference.prototype.create = function () {
        return new Reference();
    };
    Reference.prototype.consume = function (code) {
        var start = code.copy();
        var res = this;
        if (this.MetaData.structure[0] !== null)
            return null;
        var refValue = start.consumeString();
        if (refValue.length > 0) {
            res.value = refValue;
            code.index = start.index;
            this.MetaData.structure[0] = new SelfReference;
            return this;
        }
        return null;
    };
    Reference.consume = function (original) {
        // collect any string value
        var copy = original.copy();
        var res = new Reference();
        var refValue = copy.consumeString();
        if (refValue.length > 0) {
            res.value = refValue;
            original.index = copy.index;
            return res;
        }
        return null;
    };
    return Reference;
}());
exports.Reference = Reference;
var RightAssocPlus = /** @class */ (function () {
    function RightAssocPlus() {
        this.parenStart = '++';
    }
    // Consume the assoc
    RightAssocPlus.consume = function (code) {
        var start = code.copy();
        var res = new RightAssocPlus();
        if (start.consume(res.parenStart)
            && (res.ref = Reference.consume(start))) {
            code.index = start.index;
            return res;
        }
        return null;
    };
    return RightAssocPlus;
}());
exports.RightAssocPlus = RightAssocPlus;
var ParenExpression = /** @class */ (function () {
    function ParenExpression() {
        this.leftParen = '(';
        this.rightParen = ')';
        this.MetaData = {
            ownTypes: ['Expression', 'ParenExpression'],
            structure: [null],
            types: ['Expression', 'ParenExpression'],
            precedence: 20
        };
    }
    ParenExpression.prototype.create = function () {
        return new ParenExpression();
    };
    ParenExpression.prototype.consume = function (code) {
        var start = code.copy();
        var res = this;
        if (this.MetaData.structure[0] !== null)
            return null;
        if (!start.consume(res.leftParen))
            return null;
        var walk = WalkNode(start);
        if (walk) {
            this.MetaData.structure[0] = walk.node;
            start.from(walk.code);
        }
        else {
            return null;
        }
        if (!start.consume(res.rightParen))
            return null;
        code.from(start);
        return this;
    };
    return ParenExpression;
}());
exports.ParenExpression = ParenExpression;
// should return
// - new position of the code
// - operator which was matched
var PlusExpression = /** @class */ (function () {
    function PlusExpression() {
        this.op = ' + ';
        this.MetaData = {
            ownTypes: ['Expression', 'PlusExpression'],
            structure: [null, null],
            types: ['Expression', 'Expression'],
            precedence: 13
        };
    }
    PlusExpression.prototype.create = function () {
        return new PlusExpression();
    };
    PlusExpression.prototype.consume = function (code) {
        var start = code.copy();
        var res = this;
        if (this.MetaData.structure[0] === null) {
            // ref, parentExpression,
            var walk = WalkNode(start, ['ParenExpression', 'Reference']);
            if (walk) {
                this.MetaData.structure[0] = walk.node;
                start.from(walk.code);
            }
            else {
                return null;
            }
        }
        if (!start.consume(res.op))
            return null;
        if (this.MetaData.structure[1] === null) {
            var walk = WalkNode(start, ['ParenExpression', 'Reference']);
            if (walk) {
                this.MetaData.structure[1] = walk.node;
                code.from(walk.code);
                return this;
            }
            else {
                return null;
            }
        }
        return null;
    };
    return PlusExpression;
}());
exports.PlusExpression = PlusExpression;
var MulExpression = /** @class */ (function () {
    function MulExpression() {
        this.op = ' * ';
        this.MetaData = {
            ownTypes: ['Expression', 'MulExpression'],
            structure: [null, null],
            types: ['Expression', 'Expression'],
            precedence: 14
        };
    }
    MulExpression.prototype.create = function () {
        return new MulExpression();
    };
    MulExpression.prototype.consume = function (code) {
        var start = code.copy();
        var res = this;
        if (this.MetaData.structure[0] === null) {
            var walk = WalkNode(start, ['ParenExpression', 'Reference']);
            if (walk) {
                this.MetaData.structure[0] = walk.node;
                start.from(walk.code);
            }
            else {
                return null;
            }
        }
        if (!start.consume(res.op))
            return null;
        if (this.MetaData.structure[1] === null) {
            var walk = WalkNode(start, ['ParenExpression', 'Reference']);
            if (walk) {
                this.MetaData.structure[1] = walk.node;
                code.from(walk.code);
                return this;
            }
            else {
                return null;
            }
        }
        return null;
    };
    return MulExpression;
}());
exports.MulExpression = MulExpression;
function WalkNode(orig, types) {
    var cc = orig.copy();
    var activeOp = null;
    var cnt = 0;
    var lastCnt = -1;
    while (cnt !== lastCnt) {
        console.log(cnt, lastCnt, orig.index);
        lastCnt = cnt;
        for (var _i = 0, opList_1 = opList; _i < opList_1.length; _i++) {
            var op = opList_1[_i];
            var opInstance = op.create();
            if (types && types.length > 0) {
                if (types.indexOf(opInstance.MetaData.ownTypes[opInstance.MetaData.ownTypes.length - 1]) < 0) {
                    continue;
                }
            }
            if (activeOp === null) {
                var test_1 = opInstance.consume(cc);
                if (test_1) {
                    activeOp = test_1;
                    cnt++;
                    break;
                }
            }
            else {
                var opMeta = opInstance.MetaData;
                var activeMeta = activeOp.MetaData;
                if (opMeta.precedence > activeMeta.precedence) {
                    opMeta.structure[0] = activeMeta.structure[1];
                    var mRes = opInstance.consume(cc);
                    if (mRes) {
                        activeMeta.structure[1] = mRes;
                        cnt++;
                        break;
                    }
                }
                else {
                    opMeta.structure[0] = activeOp;
                    var mRes = opInstance.consume(cc);
                    if (mRes) {
                        activeOp = opInstance;
                        cnt++;
                        break;
                    }
                }
            }
        }
    }
    if (activeOp === null)
        return null;
    return {
        code: cc,
        node: activeOp
    };
}
exports.WalkNode = WalkNode;
var opList = [
    new Reference(),
    new ParenExpression(),
    new PlusExpression(),
    new MulExpression()
];
var PNew = require("./ast/parsers/typescript");
function HelloWorld() {
    var activeOp = null;
    var cc = new PNew.CodeToConsume();
    cc.str = '( A.B +foo.bar)*C';
    // cc.str = 'function test(a = new foobar(x+10,y,new foo.bar.jee,new foo().bar.jee),b=foo.bar,c=8){}'
    // cc.str = 'new myClass(x+r)'
    // cc.str = 'const myFn = (x) => x + 1;'
    // cc.str = 'const myFn = (x:number, y:number) => x + y;'
    //cc.str = '{cnt:1, obj: new foobar(), name:"Seppo", someFn : x => ( x + 2 ) , what:x=>(x+2),jaa:x=>(x+y+u) }'
    // cc.str = '{cnt:function jaa(){}, obj: new foobar(), name:"Seppo", someFn : x => ( x + 2 ) , what:x=>(x+2),jaa:x=>(x+y+u) }'
    // cc.str = '{m: y*z+x, fn: async (x:number) => x + 1, arr: [1,new foo.bar]}'
    // cc.str = '[new foo.bar, new foo().bar]'
    // cc.str = 'const myFn = x => (x + y);'
    cc.str = 'true ?   new someclass :  new  otherclass( 5  *  9 )';
    // TODO: newline instead of ; 
    cc.str = "function hello( message:string ) {\n    const a = 10;\n    if( (d + 500) < 29 ) {\n      return 300\n    } else {\n\n    };\n    const c = 30;\n    return \"foobar\"\n  }";
    // cc.str = 'A * B'
    // cc.str = `const a = 10`
    cc.index = 0;
    console.time('compiletime');
    activeOp = PNew.WalkNode(cc).node;
    console.timeEnd('compiletime');
    console.log(JSON.stringify(activeOp, null, 2));
    return 'Hello World!';
}
exports.HelloWorld = HelloWorld;
//# sourceMappingURL=first_test.js.map