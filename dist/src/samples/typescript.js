"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// SimpleArrowFunctionExpression |
var TypeDefinitionUnion = /** @class */ (function () {
    function TypeDefinitionUnion() {
        this.start = ' | ';
    }
    return TypeDefinitionUnion;
}());
exports.TypeDefinitionUnion = TypeDefinitionUnion;
var SimpleTypeDefinition = /** @class */ (function () {
    function SimpleTypeDefinition() {
    }
    return SimpleTypeDefinition;
}());
exports.SimpleTypeDefinition = SimpleTypeDefinition;
var Assing = /** @class */ (function () {
    function Assing() {
        this.arrow = ' = ';
    }
    return Assing;
}());
exports.Assing = Assing;
var UnaryNot = /** @class */ (function () {
    function UnaryNot() {
        this.notExpr = ' ! ';
        this.precedence = 16;
    }
    return UnaryNot;
}());
exports.UnaryNot = UnaryNot;
var UnaryNegation = /** @class */ (function () {
    function UnaryNegation() {
        this.notExpr = ' - ';
        this.precedence = 16;
    }
    return UnaryNegation;
}());
exports.UnaryNegation = UnaryNegation;
var UnaryBitwiseNot = /** @class */ (function () {
    function UnaryBitwiseNot() {
        this.notExpr = ' ~ ';
        this.precedence = 16;
    }
    return UnaryBitwiseNot;
}());
exports.UnaryBitwiseNot = UnaryBitwiseNot;
var PrefixIncrement = /** @class */ (function () {
    function PrefixIncrement() {
        this.notExpr = ' ++ ';
        this.precedence = 16;
    }
    return PrefixIncrement;
}());
exports.PrefixIncrement = PrefixIncrement;
var PrefixDecrement = /** @class */ (function () {
    function PrefixDecrement() {
        this.notExpr = ' -- ';
        this.precedence = 16;
    }
    return PrefixDecrement;
}());
exports.PrefixDecrement = PrefixDecrement;
var PrefixTypeof = /** @class */ (function () {
    function PrefixTypeof() {
        this.notExpr = ' typeof ';
        this.precedence = 16;
    }
    return PrefixTypeof;
}());
exports.PrefixTypeof = PrefixTypeof;
var PrefixVoid = /** @class */ (function () {
    function PrefixVoid() {
        this.notExpr = ' void ';
        this.precedence = 16;
    }
    return PrefixVoid;
}());
exports.PrefixVoid = PrefixVoid;
var PrefixDelete = /** @class */ (function () {
    function PrefixDelete() {
        this.notExpr = ' delete ';
        this.precedence = 16;
    }
    return PrefixDelete;
}());
exports.PrefixDelete = PrefixDelete;
var PrefixAwait = /** @class */ (function () {
    function PrefixAwait() {
        this.notExpr = ' await ';
        this.precedence = 16;
    }
    return PrefixAwait;
}());
exports.PrefixAwait = PrefixAwait;
var ArrowFnType = /** @class */ (function () {
    function ArrowFnType() {
        this.async = 'async';
        this.arrow = ' => ';
    }
    return ArrowFnType;
}());
exports.ArrowFnType = ArrowFnType;
var ExtendsKeyword = /** @class */ (function () {
    function ExtendsKeyword() {
        this.kw = ' extends ';
    }
    return ExtendsKeyword;
}());
exports.ExtendsKeyword = ExtendsKeyword;
var TypeDefinition = /** @class */ (function () {
    function TypeDefinition() {
        this.start = ' : ';
    }
    return TypeDefinition;
}());
exports.TypeDefinition = TypeDefinition;
var NextGenericsDefinition = /** @class */ (function () {
    function NextGenericsDefinition() {
        this.comma = ' , ';
    }
    return NextGenericsDefinition;
}());
exports.NextGenericsDefinition = NextGenericsDefinition;
var GenericsDefinition = /** @class */ (function () {
    function GenericsDefinition() {
    }
    return GenericsDefinition;
}());
exports.GenericsDefinition = GenericsDefinition;
var Generics = /** @class */ (function () {
    function Generics() {
        this.start = ' < ';
        this.end = ' > ';
    }
    return Generics;
}());
exports.Generics = Generics;
var ParamInitializer = /** @class */ (function () {
    function ParamInitializer() {
        this.start = ' = ';
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
        this.end = ' )';
    }
    return ParameterList;
}());
exports.ParameterList = ParameterList;
var CallParameterListTail = /** @class */ (function () {
    function CallParameterListTail() {
        this.start = ' , ';
    }
    return CallParameterListTail;
}());
exports.CallParameterListTail = CallParameterListTail;
var CallParameterList = /** @class */ (function () {
    function CallParameterList() {
        this.start = ' ( ';
        this.end = ' )';
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
var PrivateOrPublic = /** @class */ (function () {
    function PrivateOrPublic() {
        this.private = ' private ';
        this.public = ' public ';
    }
    return PrivateOrPublic;
}());
exports.PrivateOrPublic = PrivateOrPublic;
var ClassMethodDeclaration = /** @class */ (function () {
    function ClassMethodDeclaration() {
        this.isstatic = ' static ';
        this.isasync = ' async ';
    }
    return ClassMethodDeclaration;
}());
exports.ClassMethodDeclaration = ClassMethodDeclaration;
var ClassPropertyDeclaration = /** @class */ (function () {
    function ClassPropertyDeclaration() {
    }
    return ClassPropertyDeclaration;
}());
exports.ClassPropertyDeclaration = ClassPropertyDeclaration;
var ClassBodyStatement = /** @class */ (function () {
    function ClassBodyStatement() {
        // begins_regexp = /\S*[\n;]+[ \t\n\r]*/
        this.begins_regexp = /^[ \t\n\r;]+/;
    }
    return ClassBodyStatement;
}());
exports.ClassBodyStatement = ClassBodyStatement;
var ClassBody = /** @class */ (function () {
    function ClassBody() {
        this.begin = ' { ';
        this.end = ' } ';
    }
    return ClassBody;
}());
exports.ClassBody = ClassBody;
var ClassDeclaration = /** @class */ (function () {
    function ClassDeclaration() {
        this.start = ' class ';
    }
    return ClassDeclaration;
}());
exports.ClassDeclaration = ClassDeclaration;
var CallExpressionWithArgs = /** @class */ (function () {
    function CallExpressionWithArgs() {
        this.precedence = 19;
    }
    return CallExpressionWithArgs;
}());
exports.CallExpressionWithArgs = CallExpressionWithArgs;
var FnCallWithArgs = /** @class */ (function () {
    function FnCallWithArgs() {
        this.precedence = 19;
    }
    return FnCallWithArgs;
}());
exports.FnCallWithArgs = FnCallWithArgs;
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
        this.arrow = ' => ';
    }
    return SimpleArrowFunctionExpression;
}());
exports.SimpleArrowFunctionExpression = SimpleArrowFunctionExpression;
var ArrowFunctionExpressionWithBlock = /** @class */ (function () {
    function ArrowFunctionExpressionWithBlock() {
        this.async = ' async ';
        this.arrow = ' => ';
    }
    return ArrowFunctionExpressionWithBlock;
}());
exports.ArrowFunctionExpressionWithBlock = ArrowFunctionExpressionWithBlock;
var ArrowFunctionExpression = /** @class */ (function () {
    function ArrowFunctionExpression() {
        this.async = ' async ';
        this.arrow = ' => ';
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
var NextStatementNl = /** @class */ (function () {
    function NextStatementNl() {
        // space_regexp = /^\n/
        this.space = ' \n ';
    }
    return NextStatementNl;
}());
exports.NextStatementNl = NextStatementNl;
var StatementBlock = /** @class */ (function () {
    function StatementBlock() {
        this.start = ' { ';
        this.end = ' }';
    }
    return StatementBlock;
}());
exports.StatementBlock = StatementBlock;
var StatementBlock2 = /** @class */ (function () {
    function StatementBlock2() {
        this.start = ' { ';
        this.end = ' } ';
    }
    return StatementBlock2;
}());
exports.StatementBlock2 = StatementBlock2;
var TrueLiteral = /** @class */ (function () {
    function TrueLiteral() {
        this.tag = ' true';
    }
    return TrueLiteral;
}());
exports.TrueLiteral = TrueLiteral;
var FalseLiteral = /** @class */ (function () {
    function FalseLiteral() {
        this.tag = ' false';
    }
    return FalseLiteral;
}());
exports.FalseLiteral = FalseLiteral;
var Token = /** @class */ (function () {
    function Token() {
        this.questionmark = '?';
    }
    return Token;
}());
exports.Token = Token;
var TNumberToken = /** @class */ (function () {
    function TNumberToken() {
        this.value_regexp = /^-?(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?/;
    }
    return TNumberToken;
}());
exports.TNumberToken = TNumberToken;
var StringLiteral = /** @class */ (function () {
    function StringLiteral() {
        this.start = '"';
        this.value_regexp = /^(?:[^\\"]|\\(?:[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*/;
        this.end = '"';
    }
    return StringLiteral;
}());
exports.StringLiteral = StringLiteral;
var MemberAccessOperator = /** @class */ (function () {
    function MemberAccessOperator() {
        this.op = '.';
        this.precedence = 19;
    }
    return MemberAccessOperator;
}());
exports.MemberAccessOperator = MemberAccessOperator;
var ComputedMemberAccessOperator = /** @class */ (function () {
    function ComputedMemberAccessOperator() {
        this.leftB = ' [ ';
        this.rightB = ' ]';
        this.precedence = 19;
    }
    return ComputedMemberAccessOperator;
}());
exports.ComputedMemberAccessOperator = ComputedMemberAccessOperator;
var PlusExpression = /** @class */ (function () {
    function PlusExpression() {
        this.op = ' + ';
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
        this.rightParen = ' )';
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
/**
 * @root true
 */
var Root = /** @class */ (function () {
    function Root() {
    }
    return Root;
}());
exports.Root = Root;
//# sourceMappingURL=typescript.js.map