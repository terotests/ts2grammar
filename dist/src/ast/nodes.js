"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// SimpleArrowFunctionExpression |
var TypeDefinition = /** @class */ (function () {
    function TypeDefinition() {
        this.spaceBefore = ' ';
        this.start = ':';
        this.spaceAfter = ' ';
    }
    return TypeDefinition;
}());
exports.TypeDefinition = TypeDefinition;
var ParamInitializer = /** @class */ (function () {
    function ParamInitializer() {
        this.spaceBefore = ' ';
        this.start = '=';
        this.spaceAfter = ' ';
        this.precedence = 3;
    }
    return ParamInitializer;
}());
exports.ParamInitializer = ParamInitializer;
var ParameterListItemTail = /** @class */ (function () {
    function ParameterListItemTail() {
        this.start = ',';
    }
    return ParameterListItemTail;
}());
exports.ParameterListItemTail = ParameterListItemTail;
var ParameterList = /** @class */ (function () {
    function ParameterList() {
        this.spaceBefore = ' ';
        this.start = '(';
        this.end = ')';
        this.spaceAfter = ' ';
        this.precedence = 20;
    }
    return ParameterList;
}());
exports.ParameterList = ParameterList;
var CallParameterListTail = /** @class */ (function () {
    function CallParameterListTail() {
        this.start = ',';
    }
    return CallParameterListTail;
}());
exports.CallParameterListTail = CallParameterListTail;
var CallParameterList = /** @class */ (function () {
    function CallParameterList() {
        this.start = '(';
        this.end = ')';
        this.precedence = 20;
    }
    return CallParameterList;
}());
exports.CallParameterList = CallParameterList;
var NewExpressionWithArgs = /** @class */ (function () {
    function NewExpressionWithArgs() {
        this.spaceBeforeNew = ' ';
        this.start = 'new';
        this.spaceBefore = ' ';
        this.precedence = 19;
    }
    return NewExpressionWithArgs;
}());
exports.NewExpressionWithArgs = NewExpressionWithArgs;
var NewExpressionWithoutArgs = /** @class */ (function () {
    function NewExpressionWithoutArgs() {
        this.spaceBeforeNew = ' ';
        this.start = 'new';
        this.spaceBefore = ' ';
        this.precedence = 18;
    }
    return NewExpressionWithoutArgs;
}());
exports.NewExpressionWithoutArgs = NewExpressionWithoutArgs;
var FunctionExpression = /** @class */ (function () {
    function FunctionExpression() {
        this.start = 'function';
        this.startBlock = '{';
        this.endBlock = '}';
    }
    return FunctionExpression;
}());
exports.FunctionExpression = FunctionExpression;
var SimpleArrowFunctionExpression = /** @class */ (function () {
    function SimpleArrowFunctionExpression() {
        this.spaceBefore = ' ';
        this.arrow = '=>';
        this.spaceAfter = ' ';
        this.spaceAfter2 = ' ';
    }
    return SimpleArrowFunctionExpression;
}());
exports.SimpleArrowFunctionExpression = SimpleArrowFunctionExpression;
var ArrowFunctionExpression = /** @class */ (function () {
    function ArrowFunctionExpression() {
        this.async = 'async';
        this.spaceBefore = ' ';
        this.arrow = '=>';
        this.spaceAfter = ' ';
        this.spaceAfter2 = ' ';
    }
    return ArrowFunctionExpression;
}());
exports.ArrowFunctionExpression = ArrowFunctionExpression;
var ObjectLiteral = /** @class */ (function () {
    function ObjectLiteral() {
        this.begin = '{';
        this.spaceBefore = ' ';
        this.spaceAfter = ' ';
        this.end = '}';
    }
    return ObjectLiteral;
}());
exports.ObjectLiteral = ObjectLiteral;
var ObjectLiteralEntry = /** @class */ (function () {
    function ObjectLiteralEntry() {
        this.spaceFill = ' ';
        this.spaceBefore = ' ';
        this.separator = ':';
        this.spaceAfter = ' ';
    }
    return ObjectLiteralEntry;
}());
exports.ObjectLiteralEntry = ObjectLiteralEntry;
var ObjectLiteralTail = /** @class */ (function () {
    function ObjectLiteralTail() {
        this.spaceFill = ' ';
        this.start = ',';
    }
    return ObjectLiteralTail;
}());
exports.ObjectLiteralTail = ObjectLiteralTail;
var ArrayLiteralEntry = /** @class */ (function () {
    function ArrayLiteralEntry() {
        this.spaceFill = ' ';
    }
    return ArrayLiteralEntry;
}());
exports.ArrayLiteralEntry = ArrayLiteralEntry;
var ArrayLiteralTail = /** @class */ (function () {
    function ArrayLiteralTail() {
        this.spaceFill = ' ';
        this.start = ',';
    }
    return ArrayLiteralTail;
}());
exports.ArrayLiteralTail = ArrayLiteralTail;
var ArrayLiteral = /** @class */ (function () {
    function ArrayLiteral() {
        this.begin = '[';
        this.end = ']';
    }
    return ArrayLiteral;
}());
exports.ArrayLiteral = ArrayLiteral;
var ConstDeclaration = /** @class */ (function () {
    function ConstDeclaration() {
        this.constKeyword = 'const';
        this.spaceBefore = ' ';
        this.spaceAfter = ' ';
        this.assignOp = '=';
        this.spaceBeforeExpr = ' ';
        this.statementEnd = ';';
    }
    return ConstDeclaration;
}());
exports.ConstDeclaration = ConstDeclaration;
var TNumber = /** @class */ (function () {
    function TNumber() {
        this.spaceBefore = ' ';
        this.spaceAfter = ' ';
    }
    return TNumber;
}());
exports.TNumber = TNumber;
var Token = /** @class */ (function () {
    function Token() {
        this.spaceBefore = ' ';
        this.spaceAfter = ' ';
    }
    return Token;
}());
exports.Token = Token;
var TNumberToken = /** @class */ (function () {
    function TNumberToken() {
        this.prefix = '-';
    }
    return TNumberToken;
}());
exports.TNumberToken = TNumberToken;
var StringLiteral = /** @class */ (function () {
    function StringLiteral() {
        this.start = '"';
        this.end = '"';
    }
    return StringLiteral;
}());
exports.StringLiteral = StringLiteral;
var MemberAccessOperator = /** @class */ (function () {
    function MemberAccessOperator() {
        this.spaceBefore = ' ';
        this.op = '.';
        this.spaceAfter = ' ';
        this.precedence = 19;
    }
    return MemberAccessOperator;
}());
exports.MemberAccessOperator = MemberAccessOperator;
var PlusExpression = /** @class */ (function () {
    function PlusExpression() {
        this.spaceBefore = ' ';
        this.op = '+';
        this.spaceAfter = ' ';
        this.precedence = 13;
    }
    return PlusExpression;
}());
exports.PlusExpression = PlusExpression;
var MultiplyExpression = /** @class */ (function () {
    function MultiplyExpression() {
        this.spaceBefore = ' ';
        this.op = '*';
        this.spaceAfter = ' ';
        this.precedence = 14;
    }
    return MultiplyExpression;
}());
exports.MultiplyExpression = MultiplyExpression;
var ParenExpression = /** @class */ (function () {
    function ParenExpression() {
        this.leftParen = '(';
        this.rightParen = ')';
    }
    return ParenExpression;
}());
exports.ParenExpression = ParenExpression;
//# sourceMappingURL=nodes.js.map