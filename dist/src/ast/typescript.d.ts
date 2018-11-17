export declare type BinaryExpressionPart = Token | ParenExpression | TNumber | MemberAccessOperator;
export declare type ArgType = Token | TNumberToken | StringLiteral;
export declare type NTypes = TNumberToken | StringLiteral;
export declare type ExpressionType = SimpleArrowFunctionExpression | ArrowFunctionExpression | NewExpressionWithoutArgs | NewExpressionWithArgs | MemberAccessOperator | PlusExpression | MultiplyExpression | ParenExpression | Token | NTypes | ObjectLiteral | ArrayLiteral | FunctionExpression | TernaryOperator | ConditionalExpression | FnCallWithArgs | Assing | CallExpressionWithArgs | TrueLiteral | FalseLiteral;
export declare type TypeDefs = SimpleTypeDefinition | ArrowFnType;
export declare class TypeDefinitionUnion {
    start: string;
    value: TypeDefs;
    union?: TypeDefinitionUnion;
}
export declare class SimpleTypeDefinition {
    value: Token;
}
export declare class Assing {
    to: Token;
    arrow: string;
    value: ExpressionType;
}
export declare class ArrowFnType {
    async?: string;
    params: ParameterList;
    arrow: string;
    typdef: TypeDefs;
}
export declare class ExtendsKeyword {
    kw: string;
    typename?: TypeDefs;
}
export declare class TypeDefinition {
    start: string;
    value: TypeDefs;
    union?: TypeDefinitionUnion;
}
export declare class NextGenericsDefinition {
    comma: string;
    value: Token;
    next?: NextGenericsDefinition;
}
export declare class GenericsDefinition {
    value: Token;
    extends?: ExtendsKeyword;
    next?: NextGenericsDefinition;
}
export declare class Generics {
    start: string;
    value: GenericsDefinition;
    end: string;
}
export declare class ParamInitializer {
    start: string;
    value: ExpressionType;
    precedence: number;
}
export declare class ParameterListItemTail {
    start: string;
    head: Token;
    typedef?: TypeDefinition;
    initializer?: ParamInitializer;
    tail?: ParameterListItemTail;
}
export declare class ParameterList {
    start: string;
    head?: Token;
    typedef?: TypeDefinition;
    initializer?: ParamInitializer;
    tail?: ParameterListItemTail;
    end: string;
    precedence: number;
}
export declare class CallParameterListTail {
    start: string;
    head: ExpressionType;
    tail?: CallParameterListTail;
}
export declare class CallParameterList {
    start: string;
    head?: ExpressionType;
    tail?: CallParameterListTail;
    end: string;
    precedence: number;
}
export declare class NewExpressionWithArgs {
    start: string;
    className: Token;
    params: CallParameterList;
    precedence: number;
}
export declare class ClassMethodDeclaration {
    name: Token;
    generics?: Generics;
    params: ParameterList;
    returnType?: TypeDefinition;
    body: StatementBlock;
}
export declare class ClassPropertyDeclaration {
    name: Token;
    init?: ParamInitializer;
}
export declare type ClassBodyType = ClassMethodDeclaration | ClassPropertyDeclaration;
export declare class ClassBodyStatement {
    begins: string;
    head: ClassBodyType;
    tail?: ClassBodyStatement;
}
export declare class ClassDeclaration {
    start: string;
    className: Token;
    extends?: ExtendsKeyword;
    begin: string;
    head?: ClassBodyType;
    tail?: ClassBodyStatement;
    end: string;
}
export declare class CallExpressionWithArgs {
    obj: ExpressionType;
    params: CallParameterList;
    precedence: number;
}
export declare class FnCallWithArgs {
    name: Token;
    params: CallParameterList;
    precedence: number;
}
export declare class NewExpressionWithoutArgs {
    start: string;
    className: Token;
    precedence: number;
}
export declare class FunctionExpression {
    start: string;
    name: Token;
    generics?: Generics;
    params: ParameterList;
    returnType?: TypeDefinition;
    body: StatementBlock;
}
export declare class SimpleArrowFunctionExpression {
    param: Token;
    arrow: string;
    expression: ExpressionType;
}
export declare class ArrowFunctionExpression {
    async?: string;
    params: ParameterList;
    spaceBefore?: string;
    arrow: string;
    spaceAfter?: string;
    expression: ExpressionType;
    spaceAfter2?: string;
}
export declare class ObjectLiteral {
    begin: string;
    spaceBefore?: string;
    head?: ObjectLiteralEntry;
    tail?: ObjectLiteralTail;
    spaceAfter?: string;
    end: string;
}
export declare class ObjectLiteralEntry {
    spaceFill?: string;
    key: Token;
    spaceBefore?: string;
    separator: string;
    spaceAfter?: string;
    value: ExpressionType;
}
export declare class ObjectLiteralTail {
    spaceFill?: string;
    start: string;
    head: ObjectLiteralEntry;
    tail?: ObjectLiteralTail;
}
export declare class ArrayLiteral {
    begin: string;
    spaceFill?: string;
    head?: ExpressionType;
    tail?: ArrayLiteralTail;
    end: string;
}
export declare class ArrayLiteralTail {
    spaceFill?: string;
    start: string;
    spaceFillBeforeValue?: string;
    value: ExpressionType;
    tail?: ArrayLiteralTail;
}
export declare class ConstDeclaration {
    constKeyword: string;
    name: Token;
    typedef?: TypeDefinition;
    assignOp: string;
    value: ExpressionType;
}
export declare class ReturnStatement {
    returnKeyword: string;
    value?: ExpressionType;
}
export declare class ElseBlock {
    elseKeyword: string;
    elseBlock: StatementBlock;
}
export declare class IfStatement {
    ifKeyword: string;
    leftParen: string;
    condition: ExpressionType;
    rightParen: string;
    thenBlock: StatementBlock;
    elseBlock?: ElseBlock;
}
export declare type Statement = ConstDeclaration | IfStatement | ReturnStatement | Assing | FunctionExpression | ClassDeclaration;
export declare class NextStatement {
    space: string;
    statement?: Statement;
    next?: Next;
}
export declare class NextStatementNl {
    space?: string;
    statement?: Statement;
    next?: Next;
}
export declare type Next = NextStatement | NextStatementNl;
export declare class StatementBlock {
    start: string;
    statement?: Statement;
    next?: Next;
    end: string;
}
export declare class StatementBlock2 {
    start: string;
    statement?: Statement;
    next?: Next;
    end: string;
}
export declare class TrueLiteral {
    tag: string;
}
export declare class FalseLiteral {
    tag: string;
}
export declare class TNumber {
    spaceBefore?: string;
    value: number;
    spaceAfter?: string;
}
export declare class Token {
    name: string;
    questionmark?: string;
}
export declare class TNumberToken {
    prefix?: string;
    value: number;
}
export declare class StringLiteral {
    start: string;
    value: string;
    end: string;
}
export declare class MemberAccessOperator {
    spaceBefore?: string;
    left: Token;
    op: string;
    right: Token;
    spaceAfter?: string;
    precedence: number;
}
export declare class PlusExpression {
    left: BinaryExpressionPart;
    op: string;
    right: BinaryExpressionPart;
    precedence: number;
}
export declare class MultiplyExpression {
    left: BinaryExpressionPart;
    op: string;
    right: BinaryExpressionPart;
    precedence: number;
}
export declare class ConditionalExpression {
    left: BinaryExpressionPart;
    op: string;
    right: BinaryExpressionPart;
    precedence: number;
}
export declare class ParenExpression {
    leftParen: string;
    expr: ExpressionType;
    rightParen: string;
}
export declare class TernaryOperator {
    condition: ExpressionType;
    start: string;
    whentrue?: ExpressionType;
    separator: string;
    whenfalse?: ExpressionType;
    precedence: number;
}
