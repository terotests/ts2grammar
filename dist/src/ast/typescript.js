"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// SimpleArrowFunctionExpression |
var TypeDefinition = /** @class */ (function () {
    function TypeDefinition() {
        this.start = ' : ';
    }
    return TypeDefinition;
}());
exports.TypeDefinition = TypeDefinition;
var ParamInitializer = /** @class */ (function () {
    function ParamInitializer() {
        this.start = ' = ';
        this.precedence = 3;
    }
    return ParamInitializer;
}());
exports.ParamInitializer = ParamInitializer;
var ParameterListItemTail = /** @class */ (function () {
    function ParameterListItemTail() {
        this.start = ' , ';
    }
    return ParameterListItemTail;
}());
exports.ParameterListItemTail = ParameterListItemTail;
var ParameterList = /** @class */ (function () {
    function ParameterList() {
        this.start = ' ( ';
        this.end = ' ) ';
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
        this.start = ' ( ';
        this.end = ' ) ';
        this.precedence = 20;
    }
    return CallParameterList;
}());
exports.CallParameterList = CallParameterList;
var NewExpressionWithArgs = /** @class */ (function () {
    function NewExpressionWithArgs() {
        this.start = ' new ';
        this.precedence = 19;
    }
    return NewExpressionWithArgs;
}());
exports.NewExpressionWithArgs = NewExpressionWithArgs;
var NewExpressionWithoutArgs = /** @class */ (function () {
    function NewExpressionWithoutArgs() {
        this.start = ' new ';
        this.precedence = 18;
    }
    return NewExpressionWithoutArgs;
}());
exports.NewExpressionWithoutArgs = NewExpressionWithoutArgs;
var FunctionExpression = /** @class */ (function () {
    function FunctionExpression() {
        this.start = ' function ';
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
var ArrayLiteral = /** @class */ (function () {
    function ArrayLiteral() {
        this.begin = '[';
        this.spaceFill = ' ';
        this.end = ']';
    }
    return ArrayLiteral;
}());
exports.ArrayLiteral = ArrayLiteral;
var ArrayLiteralTail = /** @class */ (function () {
    function ArrayLiteralTail() {
        this.spaceFill = ' ';
        this.start = ',';
        this.spaceFillBeforeValue = ' ';
    }
    return ArrayLiteralTail;
}());
exports.ArrayLiteralTail = ArrayLiteralTail;
var ConstDeclaration = /** @class */ (function () {
    function ConstDeclaration() {
        this.constKeyword = ' const ';
        this.assignOp = ' = ';
    }
    return ConstDeclaration;
}());
exports.ConstDeclaration = ConstDeclaration;
var ReturnStatement = /** @class */ (function () {
    function ReturnStatement() {
        this.returnKeyword = ' return ';
    }
    return ReturnStatement;
}());
exports.ReturnStatement = ReturnStatement;
var ElseBlock = /** @class */ (function () {
    function ElseBlock() {
        this.elseKeyword = ' else ';
    }
    return ElseBlock;
}());
exports.ElseBlock = ElseBlock;
var IfStatement = /** @class */ (function () {
    function IfStatement() {
        this.ifKeyword = ' if ';
        this.leftParen = ' ( ';
        this.rightParen = ' ) ';
    }
    return IfStatement;
}());
exports.IfStatement = IfStatement;
var NextStatement = /** @class */ (function () {
    function NextStatement() {
        this.space = ' ; ';
    }
    return NextStatement;
}());
exports.NextStatement = NextStatement;
var StatementBlock = /** @class */ (function () {
    function StatementBlock() {
        this.start = '{ ';
        this.end = ' }';
    }
    return StatementBlock;
}());
exports.StatementBlock = StatementBlock;
/*
export class TrueLiteral  {
  spaceBefore? = ' '
  tag = 'true'
  spaceAfter? = ' '
}
*/
/*
export class FalseLiteral  {
  spaceBefore? = ' '
  tag = 'false'
  spaceAfter? = ' '
}
*/
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
        this.op = ' * ';
        this.precedence = 14;
    }
    return MultiplyExpression;
}());
exports.MultiplyExpression = MultiplyExpression;
var ConditionalExpression = /** @class */ (function () {
    function ConditionalExpression() {
        this.op = ' < ';
        this.precedence = 11;
    }
    return ConditionalExpression;
}());
exports.ConditionalExpression = ConditionalExpression;
var ParenExpression = /** @class */ (function () {
    function ParenExpression() {
        this.leftParen = ' ( ';
        this.rightParen = ' ) ';
    }
    return ParenExpression;
}());
exports.ParenExpression = ParenExpression;
var TernaryOperator = /** @class */ (function () {
    function TernaryOperator() {
        this.start = ' ? ';
        this.separator = ' : ';
        this.precedence = 4;
    }
    return TernaryOperator;
}());
exports.TernaryOperator = TernaryOperator;
//# sourceMappingURL=typescript.js.map