"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TrueLiteral = /** @class */ (function () {
    function TrueLiteral() {
        this.tag = ' true ';
    }
    return TrueLiteral;
}());
exports.TrueLiteral = TrueLiteral;
var FalseLiteral = /** @class */ (function () {
    function FalseLiteral() {
        this.tag = ' false ';
    }
    return FalseLiteral;
}());
exports.FalseLiteral = FalseLiteral;
var NullLiteral = /** @class */ (function () {
    function NullLiteral() {
        this.tag = ' null ';
    }
    return NullLiteral;
}());
exports.NullLiteral = NullLiteral;
var Token = /** @class */ (function () {
    function Token() {
    }
    return Token;
}());
exports.Token = Token;
var Number = /** @class */ (function () {
    function Number() {
        this.value_regexp = /^-?(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?/;
    }
    return Number;
}());
exports.Number = Number;
var StringLiteral = /** @class */ (function () {
    function StringLiteral() {
        this.start = ' "';
        this.value_regexp = /^(?:[^\\"]|\\(?:[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*/;
        this.end = '" ';
    }
    return StringLiteral;
}());
exports.StringLiteral = StringLiteral;
var ObjectLiteralEntry = /** @class */ (function () {
    function ObjectLiteralEntry() {
        this.separator = ' : ';
    }
    return ObjectLiteralEntry;
}());
exports.ObjectLiteralEntry = ObjectLiteralEntry;
var ObjectLiteralTail = /** @class */ (function () {
    function ObjectLiteralTail() {
        this.start = ' , ';
    }
    return ObjectLiteralTail;
}());
exports.ObjectLiteralTail = ObjectLiteralTail;
var ObjectLiteral = /** @class */ (function () {
    function ObjectLiteral() {
        this.begin = ' { ';
        this.end = ' } ';
    }
    return ObjectLiteral;
}());
exports.ObjectLiteral = ObjectLiteral;
var ArrayLiteral = /** @class */ (function () {
    function ArrayLiteral() {
        this.begin = ' [ ';
        this.end = ' ] ';
    }
    return ArrayLiteral;
}());
exports.ArrayLiteral = ArrayLiteral;
var ArrayLiteralTail = /** @class */ (function () {
    function ArrayLiteralTail() {
        this.start = ' , ';
    }
    return ArrayLiteralTail;
}());
exports.ArrayLiteralTail = ArrayLiteralTail;
//# sourceMappingURL=json.js.map