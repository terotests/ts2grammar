"use strict";
/******************************************
*                                         *
* AST Parsers, Automatically Generated    *
*                                         *
******************************************/
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
var ASTHeadItem = /** @class */ (function () {
    function ASTHeadItem() {
    }
    return ASTHeadItem;
}());
exports.ASTHeadItem = ASTHeadItem;
var ASTTailItem = /** @class */ (function () {
    function ASTTailItem() {
        this.separator = ' , ';
    }
    return ASTTailItem;
}());
exports.ASTTailItem = ASTTailItem;
var ASTList = /** @class */ (function () {
    function ASTList() {
    }
    return ASTList;
}());
exports.ASTList = ASTList;
var ASTNumber = /** @class */ (function () {
    function ASTNumber() {
    }
    return ASTNumber;
}());
exports.ASTNumber = ASTNumber;
var ASTToken = /** @class */ (function () {
    function ASTToken() {
    }
    return ASTToken;
}());
exports.ASTToken = ASTToken;
var ASTNumberToken = /** @class */ (function () {
    function ASTNumberToken() {
    }
    return ASTNumberToken;
}());
exports.ASTNumberToken = ASTNumberToken;
var ASTStringLiteral = /** @class */ (function () {
    function ASTStringLiteral() {
        this.start = '"';
        this.end = '"';
    }
    return ASTStringLiteral;
}());
exports.ASTStringLiteral = ASTStringLiteral;
var ASTExpression = /** @class */ (function () {
    function ASTExpression() {
    }
    return ASTExpression;
}());
exports.ASTExpression = ASTExpression;
var ASTPlusExpression = /** @class */ (function () {
    function ASTPlusExpression() {
        this.spaceBefore = ' ';
        this.op = '+';
        this.spaceAfter = ' ';
    }
    return ASTPlusExpression;
}());
exports.ASTPlusExpression = ASTPlusExpression;
var ASTParenExpression = /** @class */ (function () {
    function ASTParenExpression() {
        this.leftParen = '(';
        this.rightParen = ')';
    }
    return ASTParenExpression;
}());
exports.ASTParenExpression = ASTParenExpression;
var ASTArgList = /** @class */ (function () {
    function ASTArgList() {
        this.leftParen = '(';
        this.rightParen = ')';
    }
    return ASTArgList;
}());
exports.ASTArgList = ASTArgList;
//# sourceMappingURL=parser.js.map