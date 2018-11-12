"use strict";
/******************************************
*                                         *
* AST Parsers, Automatically Generated    *
*                                         *
******************************************/
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
/**
 * @generated true
 */
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
    CodeToConsume.prototype.removeSpace = function () {
        var len = 0;
        for (var i = this.index; i < this.str.length; i++) {
            var c = this.str.charCodeAt(i);
            if (c < 33) {
                len++;
            }
            else {
                break;
            }
        }
        this.index += len;
    };
    CodeToConsume.prototype.consumeNumber = function () {
        var len = 0;
        for (var i = this.index; i < this.str.length; i++) {
            var c = this.str.charCodeAt(i);
            if ((c >= 48) && (c <= 57)) {
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
    CodeToConsume.prototype.consumeString = function () {
        var len = 0;
        for (var i = this.index; i < this.str.length; i++) {
            var c = this.str.charCodeAt(i);
            if (((c > 64) && (c <= 90)) || ((c >= 97) && (c <= 122))) {
                len++;
            }
            else {
                break;
            }
        }
        if (len > 0) {
            var start = this.index;
            this.index += len;
            var result = this.str.substring(start, start + len);
            if (!keywords[result])
                return result;
        }
        return "";
    };
    return CodeToConsume;
}());
exports.CodeToConsume = CodeToConsume;
var TernaryOperator = /** @class */ (function () {
    function TernaryOperator() {
        this.NodeType = 'TernaryOperator';
        this.start = ' ? ';
        this.separator = ' : ';
        this.precedence = 4;
        this.start = this.start.trim();
        this.separator = this.separator.trim();
    }
    TernaryOperator.prototype.getFreeCount = function () {
        return 3;
    };
    TernaryOperator.prototype.setFirst = function (value) {
        this.condition = value;
    };
    TernaryOperator.prototype.getFirst = function () {
        return this.condition;
    };
    TernaryOperator.prototype.setLast = function (value) {
        this.whenfalse = value;
    };
    TernaryOperator.prototype.getLast = function () {
        return this.whenfalse;
    };
    TernaryOperator.prototype.create = function () {
        return new TernaryOperator();
    };
    TernaryOperator.prototype.consume = function (code) {
        var start = code.copy();
        // WALK: condition
        if (!this.condition) {
            // Expect: Token, ParenExpression, MemberAccessOperator, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, NewExpressionWithArgs, NewExpressionWithoutArgs, PlusExpression, MultiplyExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator
            var walk = WalkNode(start, [new Token(), new ParenExpression(), new MemberAccessOperator(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new NewExpressionWithArgs(), new NewExpressionWithoutArgs(), new PlusExpression(), new MultiplyExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator()]);
            if (walk) {
                this.condition = walk.node;
                start.from(walk.code);
            }
            else {
                return null;
            }
        }
        if (typeof (this.start) === 'string') {
            start.removeSpace();
            if (!start.consume(this.start))
                return null;
            start.removeSpace();
        }
        // WALK: whentrue
        if (!this.whentrue) {
            // Expect: Token, ParenExpression, MemberAccessOperator, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, NewExpressionWithArgs, NewExpressionWithoutArgs, PlusExpression, MultiplyExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator
            var walk = WalkNode(start, [new Token(), new ParenExpression(), new MemberAccessOperator(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new NewExpressionWithArgs(), new NewExpressionWithoutArgs(), new PlusExpression(), new MultiplyExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator()]);
            if (walk) {
                this.whentrue = walk.node;
                start.from(walk.code);
            }
            else {
            }
        }
        if (typeof (this.separator) === 'string') {
            start.removeSpace();
            if (!start.consume(this.separator))
                return null;
            start.removeSpace();
        }
        // WALK: whenfalse
        if (!this.whenfalse) {
            // Expect: Token, ParenExpression, MemberAccessOperator, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, NewExpressionWithArgs, NewExpressionWithoutArgs, PlusExpression, MultiplyExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator
            var walk = WalkNode(start, [new Token(), new ParenExpression(), new MemberAccessOperator(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new NewExpressionWithArgs(), new NewExpressionWithoutArgs(), new PlusExpression(), new MultiplyExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator()]);
            if (walk) {
                this.whenfalse = walk.node;
                start.from(walk.code);
            }
            else {
            }
        }
        code.from(start);
        return this;
    };
    return TernaryOperator;
}());
exports.TernaryOperator = TernaryOperator;
var TypeDefinition = /** @class */ (function () {
    function TypeDefinition() {
        this.NodeType = 'TypeDefinition';
        this.start = ' : ';
        this.start = this.start.trim();
    }
    TypeDefinition.prototype.getFreeCount = function () {
        return 1;
    };
    TypeDefinition.prototype.setFirst = function (value) {
        this.value = value;
    };
    TypeDefinition.prototype.getFirst = function () {
        return this.value;
    };
    TypeDefinition.prototype.setLast = function (value) {
        this.value = value;
    };
    TypeDefinition.prototype.getLast = function () {
        return this.value;
    };
    TypeDefinition.prototype.create = function () {
        return new TypeDefinition();
    };
    TypeDefinition.prototype.consume = function (code) {
        var start = code.copy();
        if (typeof (this.start) === 'string') {
            start.removeSpace();
            if (!start.consume(this.start))
                return null;
            start.removeSpace();
        }
        // WALK: value
        // Expect Type: Token
        if (!this.value) {
            var tmp_value = WalkNode(start, [new Token()]);
            if (tmp_value) {
                this.value = tmp_value.node;
                start.from(tmp_value.code);
            }
            else {
                return null;
            }
        }
        code.from(start);
        return this;
    };
    return TypeDefinition;
}());
exports.TypeDefinition = TypeDefinition;
var ParamInitializer = /** @class */ (function () {
    function ParamInitializer() {
        this.NodeType = 'ParamInitializer';
        this.start = ' = ';
        this.precedence = 3;
        this.start = this.start.trim();
    }
    ParamInitializer.prototype.getFreeCount = function () {
        return 1;
    };
    ParamInitializer.prototype.setFirst = function (value) {
        this.value = value;
    };
    ParamInitializer.prototype.getFirst = function () {
        return this.value;
    };
    ParamInitializer.prototype.setLast = function (value) {
        this.value = value;
    };
    ParamInitializer.prototype.getLast = function () {
        return this.value;
    };
    ParamInitializer.prototype.create = function () {
        return new ParamInitializer();
    };
    ParamInitializer.prototype.consume = function (code) {
        var start = code.copy();
        if (typeof (this.start) === 'string') {
            start.removeSpace();
            if (!start.consume(this.start))
                return null;
            start.removeSpace();
        }
        // WALK: value
        if (!this.value) {
            // Expect: Token, ParenExpression, MemberAccessOperator, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, NewExpressionWithArgs, NewExpressionWithoutArgs, PlusExpression, MultiplyExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator
            var walk = WalkNode(start, [new Token(), new ParenExpression(), new MemberAccessOperator(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new NewExpressionWithArgs(), new NewExpressionWithoutArgs(), new PlusExpression(), new MultiplyExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator()]);
            if (walk) {
                this.value = walk.node;
                start.from(walk.code);
            }
            else {
                return null;
            }
        }
        code.from(start);
        return this;
    };
    return ParamInitializer;
}());
exports.ParamInitializer = ParamInitializer;
var ParameterListItemTail = /** @class */ (function () {
    function ParameterListItemTail() {
        this.NodeType = 'ParameterListItemTail';
        this.start = ' , ';
        this.start = this.start.trim();
    }
    ParameterListItemTail.prototype.getFreeCount = function () {
        return 4;
    };
    ParameterListItemTail.prototype.setFirst = function (value) {
        this.head = value;
    };
    ParameterListItemTail.prototype.getFirst = function () {
        return this.head;
    };
    ParameterListItemTail.prototype.setLast = function (value) {
        this.tail = value;
    };
    ParameterListItemTail.prototype.getLast = function () {
        return this.tail;
    };
    ParameterListItemTail.prototype.create = function () {
        return new ParameterListItemTail();
    };
    ParameterListItemTail.prototype.consume = function (code) {
        var start = code.copy();
        if (typeof (this.start) === 'string') {
            start.removeSpace();
            if (!start.consume(this.start))
                return null;
            start.removeSpace();
        }
        // WALK: head
        // Expect Type: Token
        if (!this.head) {
            var tmp_head = WalkNode(start, [new Token()]);
            if (tmp_head) {
                this.head = tmp_head.node;
                start.from(tmp_head.code);
            }
            else {
                return null;
            }
        }
        // WALK: typedef
        // Expect Type: TypeDefinition
        if (!this.typedef) {
            var tmp_typedef = WalkNode(start, [new TypeDefinition()]);
            if (tmp_typedef) {
                this.typedef = tmp_typedef.node;
                start.from(tmp_typedef.code);
            }
            else {
            }
        }
        // WALK: initializer
        // Expect Type: ParamInitializer
        if (!this.initializer) {
            var tmp_initializer = WalkNode(start, [new ParamInitializer()]);
            if (tmp_initializer) {
                this.initializer = tmp_initializer.node;
                start.from(tmp_initializer.code);
            }
            else {
            }
        }
        // WALK: tail
        // Expect Type: ParameterListItemTail
        if (!this.tail) {
            var tmp_tail = WalkNode(start, [new ParameterListItemTail()]);
            if (tmp_tail) {
                this.tail = tmp_tail.node;
                start.from(tmp_tail.code);
            }
            else {
            }
        }
        code.from(start);
        return this;
    };
    return ParameterListItemTail;
}());
exports.ParameterListItemTail = ParameterListItemTail;
var ParameterList = /** @class */ (function () {
    function ParameterList() {
        this.NodeType = 'ParameterList';
        this.start = ' ( ';
        this.end = ' ) ';
        this.precedence = 20;
        this.start = this.start.trim();
        this.end = this.end.trim();
    }
    ParameterList.prototype.getFreeCount = function () {
        return 4;
    };
    ParameterList.prototype.setFirst = function (value) {
        this.head = value;
    };
    ParameterList.prototype.getFirst = function () {
        return this.head;
    };
    ParameterList.prototype.setLast = function (value) {
        this.tail = value;
    };
    ParameterList.prototype.getLast = function () {
        return this.tail;
    };
    ParameterList.prototype.create = function () {
        return new ParameterList();
    };
    ParameterList.prototype.consume = function (code) {
        var start = code.copy();
        if (typeof (this.start) === 'string') {
            start.removeSpace();
            if (!start.consume(this.start))
                return null;
            start.removeSpace();
        }
        // WALK: head
        // Expect Type: Token
        if (!this.head) {
            var tmp_head = WalkNode(start, [new Token()]);
            if (tmp_head) {
                this.head = tmp_head.node;
                start.from(tmp_head.code);
            }
            else {
            }
        }
        // WALK: typedef
        // Expect Type: TypeDefinition
        if (!this.typedef) {
            var tmp_typedef = WalkNode(start, [new TypeDefinition()]);
            if (tmp_typedef) {
                this.typedef = tmp_typedef.node;
                start.from(tmp_typedef.code);
            }
            else {
            }
        }
        // WALK: initializer
        // Expect Type: ParamInitializer
        if (!this.initializer) {
            var tmp_initializer = WalkNode(start, [new ParamInitializer()]);
            if (tmp_initializer) {
                this.initializer = tmp_initializer.node;
                start.from(tmp_initializer.code);
            }
            else {
            }
        }
        // WALK: tail
        // Expect Type: ParameterListItemTail
        if (!this.tail) {
            var tmp_tail = WalkNode(start, [new ParameterListItemTail()]);
            if (tmp_tail) {
                this.tail = tmp_tail.node;
                start.from(tmp_tail.code);
            }
            else {
            }
        }
        if (typeof (this.end) === 'string') {
            start.removeSpace();
            if (!start.consume(this.end))
                return null;
            start.removeSpace();
        }
        code.from(start);
        return this;
    };
    return ParameterList;
}());
exports.ParameterList = ParameterList;
var CallParameterListTail = /** @class */ (function () {
    function CallParameterListTail() {
        this.NodeType = 'CallParameterListTail';
        this.start = ',';
    }
    CallParameterListTail.prototype.getFreeCount = function () {
        return 2;
    };
    CallParameterListTail.prototype.setFirst = function (value) {
        this.head = value;
    };
    CallParameterListTail.prototype.getFirst = function () {
        return this.head;
    };
    CallParameterListTail.prototype.setLast = function (value) {
        this.tail = value;
    };
    CallParameterListTail.prototype.getLast = function () {
        return this.tail;
    };
    CallParameterListTail.prototype.create = function () {
        return new CallParameterListTail();
    };
    CallParameterListTail.prototype.consume = function (code) {
        var start = code.copy();
        if (typeof (this.start) === 'string') {
            if (!start.consume(this.start))
                return null;
        }
        // WALK: head
        if (!this.head) {
            // Expect: Token, ParenExpression, MemberAccessOperator, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, NewExpressionWithArgs, NewExpressionWithoutArgs, PlusExpression, MultiplyExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator
            var walk = WalkNode(start, [new Token(), new ParenExpression(), new MemberAccessOperator(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new NewExpressionWithArgs(), new NewExpressionWithoutArgs(), new PlusExpression(), new MultiplyExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator()]);
            if (walk) {
                this.head = walk.node;
                start.from(walk.code);
            }
            else {
                return null;
            }
        }
        // WALK: tail
        // Expect Type: CallParameterListTail
        if (!this.tail) {
            var tmp_tail = WalkNode(start, [new CallParameterListTail()]);
            if (tmp_tail) {
                this.tail = tmp_tail.node;
                start.from(tmp_tail.code);
            }
            else {
            }
        }
        code.from(start);
        return this;
    };
    return CallParameterListTail;
}());
exports.CallParameterListTail = CallParameterListTail;
var CallParameterList = /** @class */ (function () {
    function CallParameterList() {
        this.NodeType = 'CallParameterList';
        this.start = ' ( ';
        this.end = ' ) ';
        this.precedence = 20;
        this.start = this.start.trim();
        this.end = this.end.trim();
    }
    CallParameterList.prototype.getFreeCount = function () {
        return 2;
    };
    CallParameterList.prototype.setFirst = function (value) {
        this.head = value;
    };
    CallParameterList.prototype.getFirst = function () {
        return this.head;
    };
    CallParameterList.prototype.setLast = function (value) {
        this.tail = value;
    };
    CallParameterList.prototype.getLast = function () {
        return this.tail;
    };
    CallParameterList.prototype.create = function () {
        return new CallParameterList();
    };
    CallParameterList.prototype.consume = function (code) {
        var start = code.copy();
        if (typeof (this.start) === 'string') {
            start.removeSpace();
            if (!start.consume(this.start))
                return null;
            start.removeSpace();
        }
        // WALK: head
        if (!this.head) {
            // Expect: Token, ParenExpression, MemberAccessOperator, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, NewExpressionWithArgs, NewExpressionWithoutArgs, PlusExpression, MultiplyExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator
            var walk = WalkNode(start, [new Token(), new ParenExpression(), new MemberAccessOperator(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new NewExpressionWithArgs(), new NewExpressionWithoutArgs(), new PlusExpression(), new MultiplyExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator()]);
            if (walk) {
                this.head = walk.node;
                start.from(walk.code);
            }
            else {
            }
        }
        // WALK: tail
        // Expect Type: CallParameterListTail
        if (!this.tail) {
            var tmp_tail = WalkNode(start, [new CallParameterListTail()]);
            if (tmp_tail) {
                this.tail = tmp_tail.node;
                start.from(tmp_tail.code);
            }
            else {
            }
        }
        if (typeof (this.end) === 'string') {
            start.removeSpace();
            if (!start.consume(this.end))
                return null;
            start.removeSpace();
        }
        code.from(start);
        return this;
    };
    return CallParameterList;
}());
exports.CallParameterList = CallParameterList;
var NewExpressionWithArgs = /** @class */ (function () {
    function NewExpressionWithArgs() {
        this.NodeType = 'NewExpressionWithArgs';
        this.start = ' new ';
        this.precedence = 19;
        this.start = this.start.trim();
    }
    NewExpressionWithArgs.prototype.getFreeCount = function () {
        return 2;
    };
    NewExpressionWithArgs.prototype.setFirst = function (value) {
        this.className = value;
    };
    NewExpressionWithArgs.prototype.getFirst = function () {
        return this.className;
    };
    NewExpressionWithArgs.prototype.setLast = function (value) {
        this.params = value;
    };
    NewExpressionWithArgs.prototype.getLast = function () {
        return this.params;
    };
    NewExpressionWithArgs.prototype.create = function () {
        return new NewExpressionWithArgs();
    };
    NewExpressionWithArgs.prototype.consume = function (code) {
        var start = code.copy();
        if (typeof (this.start) === 'string') {
            start.removeSpace();
            if (!start.consume(this.start))
                return null;
            start.removeSpace();
        }
        // WALK: className
        // Expect Type: Token
        if (!this.className) {
            var tmp_className = WalkNode(start, [new Token()]);
            if (tmp_className) {
                this.className = tmp_className.node;
                start.from(tmp_className.code);
            }
            else {
                return null;
            }
        }
        // WALK: params
        // Expect Type: CallParameterList
        if (!this.params) {
            var tmp_params = WalkNode(start, [new CallParameterList()]);
            if (tmp_params) {
                this.params = tmp_params.node;
                start.from(tmp_params.code);
            }
            else {
                return null;
            }
        }
        code.from(start);
        return this;
    };
    return NewExpressionWithArgs;
}());
exports.NewExpressionWithArgs = NewExpressionWithArgs;
var NewExpressionWithoutArgs = /** @class */ (function () {
    function NewExpressionWithoutArgs() {
        this.NodeType = 'NewExpressionWithoutArgs';
        this.start = ' new ';
        this.precedence = 18;
        this.start = this.start.trim();
    }
    NewExpressionWithoutArgs.prototype.getFreeCount = function () {
        return 1;
    };
    NewExpressionWithoutArgs.prototype.setFirst = function (value) {
        this.className = value;
    };
    NewExpressionWithoutArgs.prototype.getFirst = function () {
        return this.className;
    };
    NewExpressionWithoutArgs.prototype.setLast = function (value) {
        this.className = value;
    };
    NewExpressionWithoutArgs.prototype.getLast = function () {
        return this.className;
    };
    NewExpressionWithoutArgs.prototype.create = function () {
        return new NewExpressionWithoutArgs();
    };
    NewExpressionWithoutArgs.prototype.consume = function (code) {
        var start = code.copy();
        if (typeof (this.start) === 'string') {
            start.removeSpace();
            if (!start.consume(this.start))
                return null;
            start.removeSpace();
        }
        // WALK: className
        // Expect Type: Token
        if (!this.className) {
            var tmp_className = WalkNode(start, [new Token()]);
            if (tmp_className) {
                this.className = tmp_className.node;
                start.from(tmp_className.code);
            }
            else {
                return null;
            }
        }
        code.from(start);
        return this;
    };
    return NewExpressionWithoutArgs;
}());
exports.NewExpressionWithoutArgs = NewExpressionWithoutArgs;
var FunctionExpression = /** @class */ (function () {
    function FunctionExpression() {
        this.NodeType = 'FunctionExpression';
        this.start = ' function ';
        this.startBlock = ' { ';
        this.endBlock = ' } ';
        this.start = this.start.trim();
        this.startBlock = this.startBlock.trim();
        this.endBlock = this.endBlock.trim();
    }
    FunctionExpression.prototype.getFreeCount = function () {
        return 2;
    };
    FunctionExpression.prototype.setFirst = function (value) {
        this.name = value;
    };
    FunctionExpression.prototype.getFirst = function () {
        return this.name;
    };
    FunctionExpression.prototype.setLast = function (value) {
        this.params = value;
    };
    FunctionExpression.prototype.getLast = function () {
        return this.params;
    };
    FunctionExpression.prototype.create = function () {
        return new FunctionExpression();
    };
    FunctionExpression.prototype.consume = function (code) {
        var start = code.copy();
        if (typeof (this.start) === 'string') {
            start.removeSpace();
            if (!start.consume(this.start))
                return null;
            start.removeSpace();
        }
        // WALK: name
        // Expect Type: Token
        if (!this.name) {
            var tmp_name = WalkNode(start, [new Token()]);
            if (tmp_name) {
                this.name = tmp_name.node;
                start.from(tmp_name.code);
            }
            else {
                return null;
            }
        }
        // WALK: params
        // Expect Type: ParameterList
        if (!this.params) {
            var tmp_params = WalkNode(start, [new ParameterList()]);
            if (tmp_params) {
                this.params = tmp_params.node;
                start.from(tmp_params.code);
            }
            else {
                return null;
            }
        }
        if (typeof (this.startBlock) === 'string') {
            start.removeSpace();
            if (!start.consume(this.startBlock))
                return null;
            start.removeSpace();
        }
        if (typeof (this.endBlock) === 'string') {
            start.removeSpace();
            if (!start.consume(this.endBlock))
                return null;
            start.removeSpace();
        }
        code.from(start);
        return this;
    };
    return FunctionExpression;
}());
exports.FunctionExpression = FunctionExpression;
var SimpleArrowFunctionExpression = /** @class */ (function () {
    function SimpleArrowFunctionExpression() {
        this.NodeType = 'SimpleArrowFunctionExpression';
        this.spaceBefore = ' ';
        this.arrow = '=>';
        this.spaceAfter = ' ';
        this.spaceAfter2 = ' ';
    }
    SimpleArrowFunctionExpression.prototype.getFreeCount = function () {
        return 2;
    };
    SimpleArrowFunctionExpression.prototype.setFirst = function (value) {
        this.param = value;
    };
    SimpleArrowFunctionExpression.prototype.getFirst = function () {
        return this.param;
    };
    SimpleArrowFunctionExpression.prototype.setLast = function (value) {
        this.expression = value;
    };
    SimpleArrowFunctionExpression.prototype.getLast = function () {
        return this.expression;
    };
    SimpleArrowFunctionExpression.prototype.create = function () {
        return new SimpleArrowFunctionExpression();
    };
    SimpleArrowFunctionExpression.prototype.consume = function (code) {
        var start = code.copy();
        // WALK: param
        // Expect Type: Token
        if (!this.param) {
            var tmp_param = WalkNode(start, [new Token()]);
            if (tmp_param) {
                this.param = tmp_param.node;
                start.from(tmp_param.code);
            }
            else {
                return null;
            }
        }
        if (typeof (this.spaceBefore) === 'string') {
            if (!start.consume(this.spaceBefore))
                this.spaceBefore = '';
        }
        if (typeof (this.arrow) === 'string') {
            if (!start.consume(this.arrow))
                return null;
        }
        if (typeof (this.spaceAfter) === 'string') {
            if (!start.consume(this.spaceAfter))
                this.spaceAfter = '';
        }
        // WALK: expression
        if (!this.expression) {
            // Expect: Token, ParenExpression, MemberAccessOperator, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, NewExpressionWithArgs, NewExpressionWithoutArgs, PlusExpression, MultiplyExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator
            var walk = WalkNode(start, [new Token(), new ParenExpression(), new MemberAccessOperator(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new NewExpressionWithArgs(), new NewExpressionWithoutArgs(), new PlusExpression(), new MultiplyExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator()]);
            if (walk) {
                this.expression = walk.node;
                start.from(walk.code);
            }
            else {
                return null;
            }
        }
        if (typeof (this.spaceAfter2) === 'string') {
            if (!start.consume(this.spaceAfter2))
                this.spaceAfter2 = '';
        }
        code.from(start);
        return this;
    };
    return SimpleArrowFunctionExpression;
}());
exports.SimpleArrowFunctionExpression = SimpleArrowFunctionExpression;
var ArrowFunctionExpression = /** @class */ (function () {
    function ArrowFunctionExpression() {
        this.NodeType = 'ArrowFunctionExpression';
        this.async = 'async';
        this.spaceBefore = ' ';
        this.arrow = '=>';
        this.spaceAfter = ' ';
        this.spaceAfter2 = ' ';
    }
    ArrowFunctionExpression.prototype.getFreeCount = function () {
        return 2;
    };
    ArrowFunctionExpression.prototype.setFirst = function (value) {
        this.params = value;
    };
    ArrowFunctionExpression.prototype.getFirst = function () {
        return this.params;
    };
    ArrowFunctionExpression.prototype.setLast = function (value) {
        this.expression = value;
    };
    ArrowFunctionExpression.prototype.getLast = function () {
        return this.expression;
    };
    ArrowFunctionExpression.prototype.create = function () {
        return new ArrowFunctionExpression();
    };
    ArrowFunctionExpression.prototype.consume = function (code) {
        var start = code.copy();
        if (typeof (this.async) === 'string') {
            if (!start.consume(this.async))
                this.async = '';
        }
        // WALK: params
        // Expect Type: ParameterList
        if (!this.params) {
            var tmp_params = WalkNode(start, [new ParameterList()]);
            if (tmp_params) {
                this.params = tmp_params.node;
                start.from(tmp_params.code);
            }
            else {
                return null;
            }
        }
        if (typeof (this.spaceBefore) === 'string') {
            if (!start.consume(this.spaceBefore))
                this.spaceBefore = '';
        }
        if (typeof (this.arrow) === 'string') {
            if (!start.consume(this.arrow))
                return null;
        }
        if (typeof (this.spaceAfter) === 'string') {
            if (!start.consume(this.spaceAfter))
                this.spaceAfter = '';
        }
        // WALK: expression
        if (!this.expression) {
            // Expect: Token, ParenExpression, MemberAccessOperator, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, NewExpressionWithArgs, NewExpressionWithoutArgs, PlusExpression, MultiplyExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator
            var walk = WalkNode(start, [new Token(), new ParenExpression(), new MemberAccessOperator(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new NewExpressionWithArgs(), new NewExpressionWithoutArgs(), new PlusExpression(), new MultiplyExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator()]);
            if (walk) {
                this.expression = walk.node;
                start.from(walk.code);
            }
            else {
                return null;
            }
        }
        if (typeof (this.spaceAfter2) === 'string') {
            if (!start.consume(this.spaceAfter2))
                this.spaceAfter2 = '';
        }
        code.from(start);
        return this;
    };
    return ArrowFunctionExpression;
}());
exports.ArrowFunctionExpression = ArrowFunctionExpression;
var ObjectLiteral = /** @class */ (function () {
    function ObjectLiteral() {
        this.NodeType = 'ObjectLiteral';
        this.begin = '{';
        this.spaceBefore = ' ';
        this.spaceAfter = ' ';
        this.end = '}';
    }
    ObjectLiteral.prototype.getFreeCount = function () {
        return 2;
    };
    ObjectLiteral.prototype.setFirst = function (value) {
        this.head = value;
    };
    ObjectLiteral.prototype.getFirst = function () {
        return this.head;
    };
    ObjectLiteral.prototype.setLast = function (value) {
        this.tail = value;
    };
    ObjectLiteral.prototype.getLast = function () {
        return this.tail;
    };
    ObjectLiteral.prototype.create = function () {
        return new ObjectLiteral();
    };
    ObjectLiteral.prototype.consume = function (code) {
        var start = code.copy();
        if (typeof (this.begin) === 'string') {
            if (!start.consume(this.begin))
                return null;
        }
        if (typeof (this.spaceBefore) === 'string') {
            if (!start.consume(this.spaceBefore))
                this.spaceBefore = '';
        }
        // WALK: head
        // Expect Type: ObjectLiteralEntry
        if (!this.head) {
            var tmp_head = WalkNode(start, [new ObjectLiteralEntry()]);
            if (tmp_head) {
                this.head = tmp_head.node;
                start.from(tmp_head.code);
            }
            else {
            }
        }
        // WALK: tail
        // Expect Type: ObjectLiteralTail
        if (!this.tail) {
            var tmp_tail = WalkNode(start, [new ObjectLiteralTail()]);
            if (tmp_tail) {
                this.tail = tmp_tail.node;
                start.from(tmp_tail.code);
            }
            else {
            }
        }
        if (typeof (this.spaceAfter) === 'string') {
            if (!start.consume(this.spaceAfter))
                this.spaceAfter = '';
        }
        if (typeof (this.end) === 'string') {
            if (!start.consume(this.end))
                return null;
        }
        code.from(start);
        return this;
    };
    return ObjectLiteral;
}());
exports.ObjectLiteral = ObjectLiteral;
var ObjectLiteralEntry = /** @class */ (function () {
    function ObjectLiteralEntry() {
        this.NodeType = 'ObjectLiteralEntry';
        this.spaceFill = ' ';
        this.spaceBefore = ' ';
        this.separator = ':';
        this.spaceAfter = ' ';
    }
    ObjectLiteralEntry.prototype.getFreeCount = function () {
        return 2;
    };
    ObjectLiteralEntry.prototype.setFirst = function (value) {
        this.key = value;
    };
    ObjectLiteralEntry.prototype.getFirst = function () {
        return this.key;
    };
    ObjectLiteralEntry.prototype.setLast = function (value) {
        this.value = value;
    };
    ObjectLiteralEntry.prototype.getLast = function () {
        return this.value;
    };
    ObjectLiteralEntry.prototype.create = function () {
        return new ObjectLiteralEntry();
    };
    ObjectLiteralEntry.prototype.consume = function (code) {
        var start = code.copy();
        if (typeof (this.spaceFill) === 'string') {
            if (!start.consume(this.spaceFill))
                this.spaceFill = '';
        }
        // WALK: key
        // Expect Type: Token
        if (!this.key) {
            var tmp_key = WalkNode(start, [new Token()]);
            if (tmp_key) {
                this.key = tmp_key.node;
                start.from(tmp_key.code);
            }
            else {
                return null;
            }
        }
        if (typeof (this.spaceBefore) === 'string') {
            if (!start.consume(this.spaceBefore))
                this.spaceBefore = '';
        }
        if (typeof (this.separator) === 'string') {
            if (!start.consume(this.separator))
                return null;
        }
        if (typeof (this.spaceAfter) === 'string') {
            if (!start.consume(this.spaceAfter))
                this.spaceAfter = '';
        }
        // WALK: value
        if (!this.value) {
            // Expect: Token, ParenExpression, MemberAccessOperator, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, NewExpressionWithArgs, NewExpressionWithoutArgs, PlusExpression, MultiplyExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator
            var walk = WalkNode(start, [new Token(), new ParenExpression(), new MemberAccessOperator(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new NewExpressionWithArgs(), new NewExpressionWithoutArgs(), new PlusExpression(), new MultiplyExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator()]);
            if (walk) {
                this.value = walk.node;
                start.from(walk.code);
            }
            else {
                return null;
            }
        }
        code.from(start);
        return this;
    };
    return ObjectLiteralEntry;
}());
exports.ObjectLiteralEntry = ObjectLiteralEntry;
var ObjectLiteralTail = /** @class */ (function () {
    function ObjectLiteralTail() {
        this.NodeType = 'ObjectLiteralTail';
        this.spaceFill = ' ';
        this.start = ',';
    }
    ObjectLiteralTail.prototype.getFreeCount = function () {
        return 2;
    };
    ObjectLiteralTail.prototype.setFirst = function (value) {
        this.head = value;
    };
    ObjectLiteralTail.prototype.getFirst = function () {
        return this.head;
    };
    ObjectLiteralTail.prototype.setLast = function (value) {
        this.tail = value;
    };
    ObjectLiteralTail.prototype.getLast = function () {
        return this.tail;
    };
    ObjectLiteralTail.prototype.create = function () {
        return new ObjectLiteralTail();
    };
    ObjectLiteralTail.prototype.consume = function (code) {
        var start = code.copy();
        if (typeof (this.spaceFill) === 'string') {
            if (!start.consume(this.spaceFill))
                this.spaceFill = '';
        }
        if (typeof (this.start) === 'string') {
            if (!start.consume(this.start))
                return null;
        }
        // WALK: head
        // Expect Type: ObjectLiteralEntry
        if (!this.head) {
            var tmp_head = WalkNode(start, [new ObjectLiteralEntry()]);
            if (tmp_head) {
                this.head = tmp_head.node;
                start.from(tmp_head.code);
            }
            else {
                return null;
            }
        }
        // WALK: tail
        // Expect Type: ObjectLiteralTail
        if (!this.tail) {
            var tmp_tail = WalkNode(start, [new ObjectLiteralTail()]);
            if (tmp_tail) {
                this.tail = tmp_tail.node;
                start.from(tmp_tail.code);
            }
            else {
            }
        }
        code.from(start);
        return this;
    };
    return ObjectLiteralTail;
}());
exports.ObjectLiteralTail = ObjectLiteralTail;
var ArrayLiteral = /** @class */ (function () {
    function ArrayLiteral() {
        this.NodeType = 'ArrayLiteral';
        this.begin = '[';
        this.spaceFill = ' ';
        this.end = ']';
    }
    ArrayLiteral.prototype.getFreeCount = function () {
        return 2;
    };
    ArrayLiteral.prototype.setFirst = function (value) {
        this.head = value;
    };
    ArrayLiteral.prototype.getFirst = function () {
        return this.head;
    };
    ArrayLiteral.prototype.setLast = function (value) {
        this.tail = value;
    };
    ArrayLiteral.prototype.getLast = function () {
        return this.tail;
    };
    ArrayLiteral.prototype.create = function () {
        return new ArrayLiteral();
    };
    ArrayLiteral.prototype.consume = function (code) {
        var start = code.copy();
        if (typeof (this.begin) === 'string') {
            if (!start.consume(this.begin))
                return null;
        }
        if (typeof (this.spaceFill) === 'string') {
            if (!start.consume(this.spaceFill))
                this.spaceFill = '';
        }
        // WALK: head
        if (!this.head) {
            // Expect: Token, ParenExpression, MemberAccessOperator, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, NewExpressionWithArgs, NewExpressionWithoutArgs, PlusExpression, MultiplyExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator
            var walk = WalkNode(start, [new Token(), new ParenExpression(), new MemberAccessOperator(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new NewExpressionWithArgs(), new NewExpressionWithoutArgs(), new PlusExpression(), new MultiplyExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator()]);
            if (walk) {
                this.head = walk.node;
                start.from(walk.code);
            }
            else {
            }
        }
        // WALK: tail
        // Expect Type: ArrayLiteralTail
        if (!this.tail) {
            var tmp_tail = WalkNode(start, [new ArrayLiteralTail()]);
            if (tmp_tail) {
                this.tail = tmp_tail.node;
                start.from(tmp_tail.code);
            }
            else {
            }
        }
        if (typeof (this.end) === 'string') {
            if (!start.consume(this.end))
                return null;
        }
        code.from(start);
        return this;
    };
    return ArrayLiteral;
}());
exports.ArrayLiteral = ArrayLiteral;
var ArrayLiteralTail = /** @class */ (function () {
    function ArrayLiteralTail() {
        this.NodeType = 'ArrayLiteralTail';
        this.spaceFill = ' ';
        this.start = ',';
        this.spaceFillBeforeValue = ' ';
    }
    ArrayLiteralTail.prototype.getFreeCount = function () {
        return 2;
    };
    ArrayLiteralTail.prototype.setFirst = function (value) {
        this.value = value;
    };
    ArrayLiteralTail.prototype.getFirst = function () {
        return this.value;
    };
    ArrayLiteralTail.prototype.setLast = function (value) {
        this.tail = value;
    };
    ArrayLiteralTail.prototype.getLast = function () {
        return this.tail;
    };
    ArrayLiteralTail.prototype.create = function () {
        return new ArrayLiteralTail();
    };
    ArrayLiteralTail.prototype.consume = function (code) {
        var start = code.copy();
        if (typeof (this.spaceFill) === 'string') {
            if (!start.consume(this.spaceFill))
                this.spaceFill = '';
        }
        if (typeof (this.start) === 'string') {
            if (!start.consume(this.start))
                return null;
        }
        if (typeof (this.spaceFillBeforeValue) === 'string') {
            if (!start.consume(this.spaceFillBeforeValue))
                this.spaceFillBeforeValue = '';
        }
        // WALK: value
        if (!this.value) {
            // Expect: Token, ParenExpression, MemberAccessOperator, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, NewExpressionWithArgs, NewExpressionWithoutArgs, PlusExpression, MultiplyExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator
            var walk = WalkNode(start, [new Token(), new ParenExpression(), new MemberAccessOperator(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new NewExpressionWithArgs(), new NewExpressionWithoutArgs(), new PlusExpression(), new MultiplyExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator()]);
            if (walk) {
                this.value = walk.node;
                start.from(walk.code);
            }
            else {
                return null;
            }
        }
        // WALK: tail
        // Expect Type: ArrayLiteralTail
        if (!this.tail) {
            var tmp_tail = WalkNode(start, [new ArrayLiteralTail()]);
            if (tmp_tail) {
                this.tail = tmp_tail.node;
                start.from(tmp_tail.code);
            }
            else {
            }
        }
        code.from(start);
        return this;
    };
    return ArrayLiteralTail;
}());
exports.ArrayLiteralTail = ArrayLiteralTail;
var ConstDeclaration = /** @class */ (function () {
    function ConstDeclaration() {
        this.NodeType = 'ConstDeclaration';
        this.constKeyword = 'const';
        this.spaceBefore = ' ';
        this.spaceAfter = ' ';
        this.assignOp = '=';
        this.spaceBeforeExpr = ' ';
        this.statementEnd = ';';
    }
    ConstDeclaration.prototype.getFreeCount = function () {
        return 3;
    };
    ConstDeclaration.prototype.setFirst = function (value) {
        this.name = value;
    };
    ConstDeclaration.prototype.getFirst = function () {
        return this.name;
    };
    ConstDeclaration.prototype.setLast = function (value) {
        this.value = value;
    };
    ConstDeclaration.prototype.getLast = function () {
        return this.value;
    };
    ConstDeclaration.prototype.create = function () {
        return new ConstDeclaration();
    };
    ConstDeclaration.prototype.consume = function (code) {
        var start = code.copy();
        if (typeof (this.constKeyword) === 'string') {
            if (!start.consume(this.constKeyword))
                return null;
        }
        if (typeof (this.spaceBefore) === 'string') {
            if (!start.consume(this.spaceBefore))
                this.spaceBefore = '';
        }
        // WALK: name
        // Expect Type: Token
        if (!this.name) {
            var tmp_name = WalkNode(start, [new Token()]);
            if (tmp_name) {
                this.name = tmp_name.node;
                start.from(tmp_name.code);
            }
            else {
                return null;
            }
        }
        // WALK: typedef
        // Expect Type: TypeDefinition
        if (!this.typedef) {
            var tmp_typedef = WalkNode(start, [new TypeDefinition()]);
            if (tmp_typedef) {
                this.typedef = tmp_typedef.node;
                start.from(tmp_typedef.code);
            }
            else {
            }
        }
        if (typeof (this.spaceAfter) === 'string') {
            if (!start.consume(this.spaceAfter))
                this.spaceAfter = '';
        }
        if (typeof (this.assignOp) === 'string') {
            if (!start.consume(this.assignOp))
                return null;
        }
        if (typeof (this.spaceBeforeExpr) === 'string') {
            if (!start.consume(this.spaceBeforeExpr))
                this.spaceBeforeExpr = '';
        }
        // WALK: value
        if (!this.value) {
            // Expect: Token, ParenExpression, MemberAccessOperator, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, NewExpressionWithArgs, NewExpressionWithoutArgs, PlusExpression, MultiplyExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator
            var walk = WalkNode(start, [new Token(), new ParenExpression(), new MemberAccessOperator(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new NewExpressionWithArgs(), new NewExpressionWithoutArgs(), new PlusExpression(), new MultiplyExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator()]);
            if (walk) {
                this.value = walk.node;
                start.from(walk.code);
            }
            else {
                return null;
            }
        }
        if (typeof (this.statementEnd) === 'string') {
            if (!start.consume(this.statementEnd))
                this.statementEnd = '';
        }
        code.from(start);
        return this;
    };
    return ConstDeclaration;
}());
exports.ConstDeclaration = ConstDeclaration;
var TNumber = /** @class */ (function () {
    function TNumber() {
        this.NodeType = 'TNumber';
        this.spaceBefore = ' ';
        this.spaceAfter = ' ';
    }
    TNumber.prototype.getFreeCount = function () {
        return 1;
    };
    TNumber.prototype.setFirst = function (value) {
        this.value = value;
    };
    TNumber.prototype.getFirst = function () {
        return this.value;
    };
    TNumber.prototype.setLast = function (value) {
        this.value = value;
    };
    TNumber.prototype.getLast = function () {
        return this.value;
    };
    TNumber.prototype.create = function () {
        return new TNumber();
    };
    TNumber.prototype.consume = function (code) {
        var start = code.copy();
        if (typeof (this.spaceBefore) === 'string') {
            if (!start.consume(this.spaceBefore))
                this.spaceBefore = '';
        }
        // WALK: value
        // Expect Type: number
        var tmp_value = start.consumeNumber();
        if (tmp_value.length === 0)
            return null;
        this.value = parseInt(tmp_value);
        if (typeof (this.spaceAfter) === 'string') {
            if (!start.consume(this.spaceAfter))
                this.spaceAfter = '';
        }
        code.from(start);
        return this;
    };
    return TNumber;
}());
exports.TNumber = TNumber;
var Token = /** @class */ (function () {
    function Token() {
        this.NodeType = 'Token';
    }
    Token.prototype.getFreeCount = function () {
        return 1;
    };
    Token.prototype.setFirst = function (value) {
        this.name = value;
    };
    Token.prototype.getFirst = function () {
        return this.name;
    };
    Token.prototype.setLast = function (value) {
        this.name = value;
    };
    Token.prototype.getLast = function () {
        return this.name;
    };
    Token.prototype.create = function () {
        return new Token();
    };
    Token.prototype.consume = function (code) {
        var start = code.copy();
        // WALK: name
        // Expect Type: string
        this.name = start.consumeString();
        if (this.name.length === 0)
            return null;
        code.from(start);
        return this;
    };
    return Token;
}());
exports.Token = Token;
var TNumberToken = /** @class */ (function () {
    function TNumberToken() {
        this.NodeType = 'TNumberToken';
        this.prefix = '-';
    }
    TNumberToken.prototype.getFreeCount = function () {
        return 1;
    };
    TNumberToken.prototype.setFirst = function (value) {
        this.value = value;
    };
    TNumberToken.prototype.getFirst = function () {
        return this.value;
    };
    TNumberToken.prototype.setLast = function (value) {
        this.value = value;
    };
    TNumberToken.prototype.getLast = function () {
        return this.value;
    };
    TNumberToken.prototype.create = function () {
        return new TNumberToken();
    };
    TNumberToken.prototype.consume = function (code) {
        var start = code.copy();
        if (typeof (this.prefix) === 'string') {
            if (!start.consume(this.prefix))
                this.prefix = '';
        }
        // WALK: value
        // Expect Type: number
        var tmp_value = start.consumeNumber();
        if (tmp_value.length === 0)
            return null;
        this.value = parseInt(tmp_value);
        code.from(start);
        return this;
    };
    return TNumberToken;
}());
exports.TNumberToken = TNumberToken;
var StringLiteral = /** @class */ (function () {
    function StringLiteral() {
        this.NodeType = 'StringLiteral';
        this.start = '"';
        this.end = '"';
    }
    StringLiteral.prototype.getFreeCount = function () {
        return 1;
    };
    StringLiteral.prototype.setFirst = function (value) {
        this.value = value;
    };
    StringLiteral.prototype.getFirst = function () {
        return this.value;
    };
    StringLiteral.prototype.setLast = function (value) {
        this.value = value;
    };
    StringLiteral.prototype.getLast = function () {
        return this.value;
    };
    StringLiteral.prototype.create = function () {
        return new StringLiteral();
    };
    StringLiteral.prototype.consume = function (code) {
        var start = code.copy();
        if (typeof (this.start) === 'string') {
            if (!start.consume(this.start))
                return null;
        }
        // WALK: value
        // Expect Type: string
        this.value = start.consumeString();
        if (this.value.length === 0)
            return null;
        if (typeof (this.end) === 'string') {
            if (!start.consume(this.end))
                return null;
        }
        code.from(start);
        return this;
    };
    return StringLiteral;
}());
exports.StringLiteral = StringLiteral;
var MemberAccessOperator = /** @class */ (function () {
    function MemberAccessOperator() {
        this.NodeType = 'MemberAccessOperator';
        this.spaceBefore = ' ';
        this.op = '.';
        this.spaceAfter = ' ';
        this.precedence = 19;
    }
    MemberAccessOperator.prototype.getFreeCount = function () {
        return 2;
    };
    MemberAccessOperator.prototype.setFirst = function (value) {
        this.left = value;
    };
    MemberAccessOperator.prototype.getFirst = function () {
        return this.left;
    };
    MemberAccessOperator.prototype.setLast = function (value) {
        this.right = value;
    };
    MemberAccessOperator.prototype.getLast = function () {
        return this.right;
    };
    MemberAccessOperator.prototype.create = function () {
        return new MemberAccessOperator();
    };
    MemberAccessOperator.prototype.consume = function (code) {
        var start = code.copy();
        if (typeof (this.spaceBefore) === 'string') {
            if (!start.consume(this.spaceBefore))
                this.spaceBefore = '';
        }
        // WALK: left
        // Expect Type: Token
        if (!this.left) {
            var tmp_left = WalkNode(start, [new Token()]);
            if (tmp_left) {
                this.left = tmp_left.node;
                start.from(tmp_left.code);
            }
            else {
                return null;
            }
        }
        if (typeof (this.op) === 'string') {
            if (!start.consume(this.op))
                return null;
        }
        // WALK: right
        // Expect Type: Token
        if (!this.right) {
            var tmp_right = WalkNode(start, [new Token()]);
            if (tmp_right) {
                this.right = tmp_right.node;
                start.from(tmp_right.code);
            }
            else {
                return null;
            }
        }
        if (typeof (this.spaceAfter) === 'string') {
            if (!start.consume(this.spaceAfter))
                this.spaceAfter = '';
        }
        code.from(start);
        return this;
    };
    return MemberAccessOperator;
}());
exports.MemberAccessOperator = MemberAccessOperator;
var PlusExpression = /** @class */ (function () {
    function PlusExpression() {
        this.NodeType = 'PlusExpression';
        this.spaceBefore = ' ';
        this.op = '+';
        this.spaceAfter = ' ';
        this.precedence = 13;
    }
    PlusExpression.prototype.getFreeCount = function () {
        return 2;
    };
    PlusExpression.prototype.setFirst = function (value) {
        this.left = value;
    };
    PlusExpression.prototype.getFirst = function () {
        return this.left;
    };
    PlusExpression.prototype.setLast = function (value) {
        this.right = value;
    };
    PlusExpression.prototype.getLast = function () {
        return this.right;
    };
    PlusExpression.prototype.create = function () {
        return new PlusExpression();
    };
    PlusExpression.prototype.consume = function (code) {
        var start = code.copy();
        // WALK: left
        if (!this.left) {
            // Expect: Token, ParenExpression, TNumber, MemberAccessOperator
            var walk = WalkNode(start, [new Token(), new ParenExpression(), new TNumber(), new MemberAccessOperator()]);
            if (walk) {
                this.left = walk.node;
                start.from(walk.code);
            }
            else {
                return null;
            }
        }
        if (typeof (this.spaceBefore) === 'string') {
            if (!start.consume(this.spaceBefore))
                this.spaceBefore = '';
        }
        if (typeof (this.op) === 'string') {
            if (!start.consume(this.op))
                return null;
        }
        if (typeof (this.spaceAfter) === 'string') {
            if (!start.consume(this.spaceAfter))
                this.spaceAfter = '';
        }
        // WALK: right
        if (!this.right) {
            // Expect: Token, ParenExpression, TNumber, MemberAccessOperator
            var walk = WalkNode(start, [new Token(), new ParenExpression(), new TNumber(), new MemberAccessOperator()]);
            if (walk) {
                this.right = walk.node;
                start.from(walk.code);
            }
            else {
                return null;
            }
        }
        code.from(start);
        return this;
    };
    return PlusExpression;
}());
exports.PlusExpression = PlusExpression;
var MultiplyExpression = /** @class */ (function () {
    function MultiplyExpression() {
        this.NodeType = 'MultiplyExpression';
        this.op = ' * ';
        this.precedence = 14;
        this.op = this.op.trim();
    }
    MultiplyExpression.prototype.getFreeCount = function () {
        return 2;
    };
    MultiplyExpression.prototype.setFirst = function (value) {
        this.left = value;
    };
    MultiplyExpression.prototype.getFirst = function () {
        return this.left;
    };
    MultiplyExpression.prototype.setLast = function (value) {
        this.right = value;
    };
    MultiplyExpression.prototype.getLast = function () {
        return this.right;
    };
    MultiplyExpression.prototype.create = function () {
        return new MultiplyExpression();
    };
    MultiplyExpression.prototype.consume = function (code) {
        var start = code.copy();
        // WALK: left
        if (!this.left) {
            // Expect: Token, ParenExpression, TNumber, MemberAccessOperator
            var walk = WalkNode(start, [new Token(), new ParenExpression(), new TNumber(), new MemberAccessOperator()]);
            if (walk) {
                this.left = walk.node;
                start.from(walk.code);
            }
            else {
                return null;
            }
        }
        if (typeof (this.op) === 'string') {
            start.removeSpace();
            if (!start.consume(this.op))
                return null;
            start.removeSpace();
        }
        // WALK: right
        if (!this.right) {
            // Expect: Token, ParenExpression, TNumber, MemberAccessOperator
            var walk = WalkNode(start, [new Token(), new ParenExpression(), new TNumber(), new MemberAccessOperator()]);
            if (walk) {
                this.right = walk.node;
                start.from(walk.code);
            }
            else {
                return null;
            }
        }
        code.from(start);
        return this;
    };
    return MultiplyExpression;
}());
exports.MultiplyExpression = MultiplyExpression;
var ParenExpression = /** @class */ (function () {
    function ParenExpression() {
        this.NodeType = 'ParenExpression';
        this.leftParen = ' ( ';
        this.rightParen = ' ) ';
        this.leftParen = this.leftParen.trim();
        this.rightParen = this.rightParen.trim();
    }
    ParenExpression.prototype.getFreeCount = function () {
        return 1;
    };
    ParenExpression.prototype.setFirst = function (value) {
        this.expr = value;
    };
    ParenExpression.prototype.getFirst = function () {
        return this.expr;
    };
    ParenExpression.prototype.setLast = function (value) {
        this.expr = value;
    };
    ParenExpression.prototype.getLast = function () {
        return this.expr;
    };
    ParenExpression.prototype.create = function () {
        return new ParenExpression();
    };
    ParenExpression.prototype.consume = function (code) {
        var start = code.copy();
        if (typeof (this.leftParen) === 'string') {
            start.removeSpace();
            if (!start.consume(this.leftParen))
                return null;
            start.removeSpace();
        }
        // WALK: expr
        if (!this.expr) {
            // Expect: Token, ParenExpression, MemberAccessOperator, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, NewExpressionWithArgs, NewExpressionWithoutArgs, PlusExpression, MultiplyExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator
            var walk = WalkNode(start, [new Token(), new ParenExpression(), new MemberAccessOperator(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new NewExpressionWithArgs(), new NewExpressionWithoutArgs(), new PlusExpression(), new MultiplyExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator()]);
            if (walk) {
                this.expr = walk.node;
                start.from(walk.code);
            }
            else {
                return null;
            }
        }
        if (typeof (this.rightParen) === 'string') {
            start.removeSpace();
            if (!start.consume(this.rightParen))
                return null;
            start.removeSpace();
        }
        code.from(start);
        return this;
    };
    return ParenExpression;
}());
exports.ParenExpression = ParenExpression;
var keywords = (_a = {},
    _a[' ? '.trim()] = true,
    _a[' : '.trim()] = true,
    _a[' = '.trim()] = true,
    _a[' , '.trim()] = true,
    _a[' ( '.trim()] = true,
    _a[' ) '.trim()] = true,
    _a[','.trim()] = true,
    _a[' new '.trim()] = true,
    _a[' function '.trim()] = true,
    _a[' { '.trim()] = true,
    _a[' } '.trim()] = true,
    _a[' '.trim()] = true,
    _a['=>'.trim()] = true,
    _a['async'.trim()] = true,
    _a['{'.trim()] = true,
    _a['}'.trim()] = true,
    _a[':'.trim()] = true,
    _a['['.trim()] = true,
    _a[']'.trim()] = true,
    _a['const'.trim()] = true,
    _a['='.trim()] = true,
    _a[';'.trim()] = true,
    _a['-'.trim()] = true,
    _a['"'.trim()] = true,
    _a['.'.trim()] = true,
    _a['+'.trim()] = true,
    _a[' * '.trim()] = true,
    _a);
var initialList = [
    new TernaryOperator(),
    new TypeDefinition(),
    new ParamInitializer(),
    new ParameterListItemTail(),
    new ParameterList(),
    new CallParameterListTail(),
    new CallParameterList(),
    new NewExpressionWithArgs(),
    new NewExpressionWithoutArgs(),
    new FunctionExpression(),
    new SimpleArrowFunctionExpression(),
    new ArrowFunctionExpression(),
    new ObjectLiteral(),
    new ObjectLiteralEntry(),
    new ObjectLiteralTail(),
    new ArrayLiteral(),
    new ArrayLiteralTail(),
    new ConstDeclaration(),
    new TNumber(),
    new Token(),
    new TNumberToken(),
    new StringLiteral(),
    new MemberAccessOperator(),
    new PlusExpression(),
    new MultiplyExpression(),
    new ParenExpression(),
];
var currDepth = 0;
function WalkNode(orig, opList) {
    if (opList === void 0) { opList = initialList; }
    if (currDepth++ > 20) {
        throw 'Max depth';
    }
    var cc = orig.copy();
    var activeOp = null;
    var cnt = 0;
    var lastCnt = -1;
    while (cnt !== lastCnt) {
        lastCnt = cnt;
        for (var _i = 0, opList_1 = opList; _i < opList_1.length; _i++) {
            var op = opList_1[_i];
            var opInstance = op.create();
            if (activeOp === null) {
                var test_1 = opInstance.consume(cc);
                if (test_1) {
                    activeOp = test_1;
                    cnt++;
                    break;
                }
            }
            else {
                if (opInstance.getFreeCount() < 2) {
                    continue;
                }
                if (opInstance.getFreeCount() > 1) {
                    if (opInstance && (opInstance.precedence > activeOp.precedence)) {
                        opInstance.setFirst(activeOp.getLast());
                        var mRes = opInstance.consume(cc);
                        if (mRes) {
                            activeOp.setLast(mRes);
                            cnt++;
                            break;
                        }
                    }
                    else {
                        opInstance.setFirst(activeOp);
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
    }
    currDepth--;
    if (activeOp === null)
        return null;
    return {
        code: cc,
        node: activeOp
    };
}
exports.WalkNode = WalkNode;
//# sourceMappingURL=typescript.js.map