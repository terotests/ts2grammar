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
        this.expressionPath = [];
    }
    CodeToConsume.prototype.copy = function () {
        var o = new CodeToConsume();
        o.str = this.str;
        o.index = this.index;
        o.expressionPath = this.expressionPath.slice();
        return o;
    };
    CodeToConsume.prototype.from = function (cc) {
        this.str = cc.str;
        this.index = cc.index;
        this.expressionPath = cc.expressionPath.slice();
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
var TrueLiteral = /** @class */ (function () {
    function TrueLiteral() {
        this.opComplexity = 111; // using getClassComplexity
        this.NodeType = 'TrueLiteral';
        this.tag = ' true ';
        this.tag = this.tag.trim();
    }
    TrueLiteral.prototype.getFreeCount = function () {
        return 0;
    };
    TrueLiteral.prototype.setFirst = function (value) {
    };
    TrueLiteral.prototype.getFirst = function () {
        return null;
    };
    TrueLiteral.prototype.setLast = function (value) {
    };
    TrueLiteral.prototype.getLast = function () {
        return null;
    };
    TrueLiteral.prototype.create = function () {
        return new TrueLiteral();
    };
    TrueLiteral.prototype.isInPath = function (code) {
        for (var _i = 0, _a = code.expressionPath; _i < _a.length; _i++) {
            var p = _a[_i];
            if ((p.nodetype == 'TrueLiteral') && (p.index === code.index))
                return true;
        }
        return false;
    };
    TrueLiteral.prototype.consume = function (code) {
        // console.log('Testing TrueLiteral at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
        if (this.isInPath(code)) {
            return null;
        }
        code.expressionPath.push({ index: code.index, nodetype: 'TrueLiteral' });
        var start = code.copy();
        if (typeof (this.tag) === 'string') {
            start.removeSpace();
            if (!start.consume(this.tag))
                return null;
            start.removeSpace();
        }
        code.from(start);
        return this;
    };
    return TrueLiteral;
}());
exports.TrueLiteral = TrueLiteral;
var FalseLiteral = /** @class */ (function () {
    function FalseLiteral() {
        this.opComplexity = 111; // using getClassComplexity
        this.NodeType = 'FalseLiteral';
        this.tag = ' false ';
        this.tag = this.tag.trim();
    }
    FalseLiteral.prototype.getFreeCount = function () {
        return 0;
    };
    FalseLiteral.prototype.setFirst = function (value) {
    };
    FalseLiteral.prototype.getFirst = function () {
        return null;
    };
    FalseLiteral.prototype.setLast = function (value) {
    };
    FalseLiteral.prototype.getLast = function () {
        return null;
    };
    FalseLiteral.prototype.create = function () {
        return new FalseLiteral();
    };
    FalseLiteral.prototype.isInPath = function (code) {
        for (var _i = 0, _a = code.expressionPath; _i < _a.length; _i++) {
            var p = _a[_i];
            if ((p.nodetype == 'FalseLiteral') && (p.index === code.index))
                return true;
        }
        return false;
    };
    FalseLiteral.prototype.consume = function (code) {
        // console.log('Testing FalseLiteral at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
        if (this.isInPath(code)) {
            return null;
        }
        code.expressionPath.push({ index: code.index, nodetype: 'FalseLiteral' });
        var start = code.copy();
        if (typeof (this.tag) === 'string') {
            start.removeSpace();
            if (!start.consume(this.tag))
                return null;
            start.removeSpace();
        }
        code.from(start);
        return this;
    };
    return FalseLiteral;
}());
exports.FalseLiteral = FalseLiteral;
var NullLiteral = /** @class */ (function () {
    function NullLiteral() {
        this.opComplexity = 111; // using getClassComplexity
        this.NodeType = 'NullLiteral';
        this.tag = ' null ';
        this.tag = this.tag.trim();
    }
    NullLiteral.prototype.getFreeCount = function () {
        return 0;
    };
    NullLiteral.prototype.setFirst = function (value) {
    };
    NullLiteral.prototype.getFirst = function () {
        return null;
    };
    NullLiteral.prototype.setLast = function (value) {
    };
    NullLiteral.prototype.getLast = function () {
        return null;
    };
    NullLiteral.prototype.create = function () {
        return new NullLiteral();
    };
    NullLiteral.prototype.isInPath = function (code) {
        for (var _i = 0, _a = code.expressionPath; _i < _a.length; _i++) {
            var p = _a[_i];
            if ((p.nodetype == 'NullLiteral') && (p.index === code.index))
                return true;
        }
        return false;
    };
    NullLiteral.prototype.consume = function (code) {
        // console.log('Testing NullLiteral at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
        if (this.isInPath(code)) {
            return null;
        }
        code.expressionPath.push({ index: code.index, nodetype: 'NullLiteral' });
        var start = code.copy();
        if (typeof (this.tag) === 'string') {
            start.removeSpace();
            if (!start.consume(this.tag))
                return null;
            start.removeSpace();
        }
        code.from(start);
        return this;
    };
    return NullLiteral;
}());
exports.NullLiteral = NullLiteral;
var Token = /** @class */ (function () {
    function Token() {
        this.opComplexity = 2; // using getClassComplexity
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
    Token.prototype.isInPath = function (code) {
        for (var _i = 0, _a = code.expressionPath; _i < _a.length; _i++) {
            var p = _a[_i];
            if ((p.nodetype == 'Token') && (p.index === code.index))
                return true;
        }
        return false;
    };
    Token.prototype.consume = function (code) {
        // console.log('Testing Token at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
        if (this.isInPath(code)) {
            return null;
        }
        code.expressionPath.push({ index: code.index, nodetype: 'Token' });
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
var Number = /** @class */ (function () {
    function Number() {
        this.opComplexity = 2; // using getClassComplexity
        this.NodeType = 'Number';
        this.value_regexp = /^-?(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?/;
    }
    Number.prototype.getFreeCount = function () {
        return 1;
    };
    Number.prototype.setFirst = function (value) {
        this.value = value;
    };
    Number.prototype.getFirst = function () {
        return this.value;
    };
    Number.prototype.setLast = function (value) {
        this.value = value;
    };
    Number.prototype.getLast = function () {
        return this.value;
    };
    Number.prototype.create = function () {
        return new Number();
    };
    Number.prototype.isInPath = function (code) {
        for (var _i = 0, _a = code.expressionPath; _i < _a.length; _i++) {
            var p = _a[_i];
            if ((p.nodetype == 'Number') && (p.index === code.index))
                return true;
        }
        return false;
    };
    Number.prototype.consume = function (code) {
        // console.log('Testing Number at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
        if (this.isInPath(code)) {
            return null;
        }
        code.expressionPath.push({ index: code.index, nodetype: 'Number' });
        var start = code.copy();
        // WALK: value
        // Expect Type: number
        var tmp_value = start.consumeNumber();
        if (tmp_value.length === 0)
            return null;
        this.value = parseInt(tmp_value);
        code.from(start);
        return this;
    };
    return Number;
}());
exports.Number = Number;
var StringLiteral = /** @class */ (function () {
    function StringLiteral() {
        this.opComplexity = 122; // using getClassComplexity
        this.NodeType = 'StringLiteral';
        this.start = ' "';
        this.value_regexp = /^(?:[^\\"]|\\(?:[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*/;
        this.end = '" ';
        this.start = this.start.trim();
        this.end = this.end.trim();
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
    StringLiteral.prototype.isInPath = function (code) {
        for (var _i = 0, _a = code.expressionPath; _i < _a.length; _i++) {
            var p = _a[_i];
            if ((p.nodetype == 'StringLiteral') && (p.index === code.index))
                return true;
        }
        return false;
    };
    StringLiteral.prototype.consume = function (code) {
        // console.log('Testing StringLiteral at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
        if (this.isInPath(code)) {
            return null;
        }
        code.expressionPath.push({ index: code.index, nodetype: 'StringLiteral' });
        var start = code.copy();
        if (typeof (this.start) === 'string') {
            start.removeSpace();
            if (!start.consume(this.start))
                return null;
        }
        // WALK: value
        // Expect Type: string
        var m_value = start.str.substring(start.index).match(this.value_regexp);
        if (m_value && m_value.index === 0) {
            this.value = m_value[0];
            start.index += this.value.length;
        }
        else {
            return null;
        }
        if (typeof (this.end) === 'string') {
            if (!start.consume(this.end))
                return null;
            start.removeSpace();
        }
        code.from(start);
        return this;
    };
    return StringLiteral;
}());
exports.StringLiteral = StringLiteral;
var ObjectLiteralEntry = /** @class */ (function () {
    function ObjectLiteralEntry() {
        this.opComplexity = 136; // using getClassComplexity
        this.NodeType = 'ObjectLiteralEntry';
        this.separator = ' : ';
        this.separator = this.separator.trim();
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
    ObjectLiteralEntry.prototype.isInPath = function (code) {
        for (var _i = 0, _a = code.expressionPath; _i < _a.length; _i++) {
            var p = _a[_i];
            if ((p.nodetype == 'ObjectLiteralEntry') && (p.index === code.index))
                return true;
        }
        return false;
    };
    ObjectLiteralEntry.prototype.consume = function (code) {
        // console.log('Testing ObjectLiteralEntry at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
        if (this.isInPath(code)) {
            return null;
        }
        code.expressionPath.push({ index: code.index, nodetype: 'ObjectLiteralEntry' });
        var start = code.copy();
        // WALK: key
        // Expect Type: StringLiteral
        if (!this.key) {
            var tmp_key = WalkNode(start, [new StringLiteral()]);
            if (tmp_key) {
                this.key = tmp_key.node;
                start.from(tmp_key.code);
            }
            else {
                return null;
            }
        }
        if (typeof (this.separator) === 'string') {
            start.removeSpace();
            if (!start.consume(this.separator))
                return null;
            start.removeSpace();
        }
        // WALK: value
        if (!this.value) {
            // Expect: Token, Number, ObjectLiteral, ArrayLiteral, TrueLiteral, FalseLiteral, StringLiteral, NullLiteral
            var walk = WalkNode(start, [new Token(), new Number(), new ObjectLiteral(), new ArrayLiteral(), new TrueLiteral(), new FalseLiteral(), new StringLiteral(), new NullLiteral()]);
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
        this.opComplexity = 488; // using getClassComplexity
        this.NodeType = 'ObjectLiteralTail';
        this.start = ' , ';
        this.start = this.start.trim();
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
    ObjectLiteralTail.prototype.isInPath = function (code) {
        for (var _i = 0, _a = code.expressionPath; _i < _a.length; _i++) {
            var p = _a[_i];
            if ((p.nodetype == 'ObjectLiteralTail') && (p.index === code.index))
                return true;
        }
        return false;
    };
    ObjectLiteralTail.prototype.consume = function (code) {
        // console.log('Testing ObjectLiteralTail at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
        if (this.isInPath(code)) {
            return null;
        }
        code.expressionPath.push({ index: code.index, nodetype: 'ObjectLiteralTail' });
        var start = code.copy();
        if (typeof (this.start) === 'string') {
            start.removeSpace();
            if (!start.consume(this.start))
                return null;
            start.removeSpace();
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
var ObjectLiteral = /** @class */ (function () {
    function ObjectLiteral() {
        this.opComplexity = 742; // using getClassComplexity
        this.NodeType = 'ObjectLiteral';
        this.begin = ' { ';
        this.end = ' } ';
        this.begin = this.begin.trim();
        this.end = this.end.trim();
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
    ObjectLiteral.prototype.isInPath = function (code) {
        for (var _i = 0, _a = code.expressionPath; _i < _a.length; _i++) {
            var p = _a[_i];
            if ((p.nodetype == 'ObjectLiteral') && (p.index === code.index))
                return true;
        }
        return false;
    };
    ObjectLiteral.prototype.consume = function (code) {
        // console.log('Testing ObjectLiteral at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
        if (this.isInPath(code)) {
            return null;
        }
        code.expressionPath.push({ index: code.index, nodetype: 'ObjectLiteral' });
        var start = code.copy();
        if (typeof (this.begin) === 'string') {
            start.removeSpace();
            if (!start.consume(this.begin))
                return null;
            start.removeSpace();
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
        if (typeof (this.end) === 'string') {
            start.removeSpace();
            if (!start.consume(this.end))
                return null;
            start.removeSpace();
        }
        code.from(start);
        return this;
    };
    return ObjectLiteral;
}());
exports.ObjectLiteral = ObjectLiteral;
var ArrayLiteral = /** @class */ (function () {
    function ArrayLiteral() {
        this.opComplexity = 352; // using getClassComplexity
        this.NodeType = 'ArrayLiteral';
        this.begin = ' [ ';
        this.end = ' ] ';
        this.begin = this.begin.trim();
        this.end = this.end.trim();
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
    ArrayLiteral.prototype.isInPath = function (code) {
        for (var _i = 0, _a = code.expressionPath; _i < _a.length; _i++) {
            var p = _a[_i];
            if ((p.nodetype == 'ArrayLiteral') && (p.index === code.index))
                return true;
        }
        return false;
    };
    ArrayLiteral.prototype.consume = function (code) {
        // console.log('Testing ArrayLiteral at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
        if (this.isInPath(code)) {
            return null;
        }
        code.expressionPath.push({ index: code.index, nodetype: 'ArrayLiteral' });
        var start = code.copy();
        if (typeof (this.begin) === 'string') {
            start.removeSpace();
            if (!start.consume(this.begin))
                return null;
            start.removeSpace();
        }
        // WALK: head
        if (!this.head) {
            // Expect: Token, Number, ObjectLiteral, ArrayLiteral, TrueLiteral, FalseLiteral, StringLiteral, NullLiteral
            var walk = WalkNode(start, [new Token(), new Number(), new ObjectLiteral(), new ArrayLiteral(), new TrueLiteral(), new FalseLiteral(), new StringLiteral(), new NullLiteral()]);
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
            start.removeSpace();
            if (!start.consume(this.end))
                return null;
            start.removeSpace();
        }
        code.from(start);
        return this;
    };
    return ArrayLiteral;
}());
exports.ArrayLiteral = ArrayLiteral;
var ArrayLiteralTail = /** @class */ (function () {
    function ArrayLiteralTail() {
        this.opComplexity = 228; // using getClassComplexity
        this.NodeType = 'ArrayLiteralTail';
        this.start = ' , ';
        this.start = this.start.trim();
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
    ArrayLiteralTail.prototype.isInPath = function (code) {
        for (var _i = 0, _a = code.expressionPath; _i < _a.length; _i++) {
            var p = _a[_i];
            if ((p.nodetype == 'ArrayLiteralTail') && (p.index === code.index))
                return true;
        }
        return false;
    };
    ArrayLiteralTail.prototype.consume = function (code) {
        // console.log('Testing ArrayLiteralTail at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
        if (this.isInPath(code)) {
            return null;
        }
        code.expressionPath.push({ index: code.index, nodetype: 'ArrayLiteralTail' });
        var start = code.copy();
        if (typeof (this.start) === 'string') {
            start.removeSpace();
            if (!start.consume(this.start))
                return null;
            start.removeSpace();
        }
        // WALK: value
        if (!this.value) {
            // Expect: Token, Number, ObjectLiteral, ArrayLiteral, TrueLiteral, FalseLiteral, StringLiteral, NullLiteral
            var walk = WalkNode(start, [new Token(), new Number(), new ObjectLiteral(), new ArrayLiteral(), new TrueLiteral(), new FalseLiteral(), new StringLiteral(), new NullLiteral()]);
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
var Root = /** @class */ (function () {
    function Root() {
        this.opComplexity = 4; // using getClassComplexity
        this.NodeType = 'Root';
    }
    Root.prototype.getFreeCount = function () {
        return 1;
    };
    Root.prototype.setFirst = function (value) {
        this.value = value;
    };
    Root.prototype.getFirst = function () {
        return this.value;
    };
    Root.prototype.setLast = function (value) {
        this.value = value;
    };
    Root.prototype.getLast = function () {
        return this.value;
    };
    Root.prototype.create = function () {
        return new Root();
    };
    Root.prototype.isInPath = function (code) {
        for (var _i = 0, _a = code.expressionPath; _i < _a.length; _i++) {
            var p = _a[_i];
            if ((p.nodetype == 'Root') && (p.index === code.index))
                return true;
        }
        return false;
    };
    Root.prototype.consume = function (code) {
        // console.log('Testing Root at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
        if (this.isInPath(code)) {
            return null;
        }
        code.expressionPath.push({ index: code.index, nodetype: 'Root' });
        var start = code.copy();
        // WALK: value
        if (!this.value) {
            // Expect: Token, Number, ObjectLiteral, ArrayLiteral, TrueLiteral, FalseLiteral, StringLiteral, NullLiteral
            var walk = WalkNode(start, [new Token(), new Number(), new ObjectLiteral(), new ArrayLiteral(), new TrueLiteral(), new FalseLiteral(), new StringLiteral(), new NullLiteral()]);
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
    return Root;
}());
exports.Root = Root;
var keywords = (_a = {},
    _a[' true '.trim()] = true,
    _a[' false '.trim()] = true,
    _a[' null '.trim()] = true,
    _a[' "'.trim()] = true,
    _a['" '.trim()] = true,
    _a[' : '.trim()] = true,
    _a[' , '.trim()] = true,
    _a[' { '.trim()] = true,
    _a[' } '.trim()] = true,
    _a[' [ '.trim()] = true,
    _a[' ] '.trim()] = true,
    _a);
var initialList = [
    new TrueLiteral(),
    new FalseLiteral(),
    new NullLiteral(),
    new Token(),
    new Number(),
    new StringLiteral(),
    new ObjectLiteralEntry(),
    new ObjectLiteralTail(),
    new ObjectLiteral(),
    new ArrayLiteral(),
    new ArrayLiteralTail(),
    new Root(),
];
var currDepth = 0;
function WalkNode(orig, opInList) {
    if (opInList === void 0) { opInList = [new Root()]; }
    if (currDepth++ > 100) {
        throw 'Max depth';
    }
    if (orig.index >= orig.str.length) {
        return null;
    }
    var opList = opInList.sort(function (left, right) {
        return right.opComplexity - left.opComplexity;
    });
    // console.log('pos', orig.index, orig.str.length, orig.str.substring( orig.index ))
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
                if (opInstance.getFreeCount() > 1 && (opInstance.precedence) && activeOp.precedence) {
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
//# sourceMappingURL=json.js.map