export declare type BinaryExpressionPart = Token | ParenExpression | TNumber | MemberAccessOperator;
export declare type ArgType = Token | TNumberToken | StringLiteral;
export declare type NTypes = TNumberToken | StringLiteral;
export declare type ExpressionType = SimpleArrowFunctionExpression | ArrowFunctionExpression | NewExpressionWithArgs | NewExpressionWithoutArgs | MemberAccessOperator | PlusExpression | MultiplyExpression | ParenExpression | Token | NTypes | ObjectLiteral | ArrayLiteral | FunctionExpression;
export declare class TypeDefinition {
    spaceBefore?: string;
    start: string;
    spaceAfter?: string;
    value: Token;
}
export declare class ParamInitializer {
    spaceBefore?: string;
    start: string;
    spaceAfter?: string;
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
    spaceBefore?: string;
    start: string;
    head?: Token;
    typedef?: TypeDefinition;
    initializer?: ParamInitializer;
    tail?: ParameterListItemTail;
    end: string;
    spaceAfter?: string;
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
    spaceBeforeNew?: string;
    start: string;
    spaceBefore?: string;
    className: Token;
    params: CallParameterList;
    precedence: number;
}
export declare class NewExpressionWithoutArgs {
    spaceBeforeNew?: string;
    start: string;
    spaceBefore?: string;
    className: Token;
    precedence: number;
}
export declare class FunctionExpression {
    start: string;
    name: Token;
    params: ParameterList;
    startBlock: string;
    endBlock: string;
}
export declare class SimpleArrowFunctionExpression {
    param: Token;
    spaceBefore?: string;
    arrow: string;
    spaceAfter?: string;
    expression: ExpressionType;
    spaceAfter2?: string;
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
export declare class ArrayLiteralEntry {
    spaceFill?: string;
    value: ExpressionType;
}
export declare class ArrayLiteralTail {
    spaceFill?: string;
    start: string;
    head: ArrayLiteralEntry;
    tail?: ArrayLiteralTail;
}
export declare class ArrayLiteral {
    begin: string;
    head?: ArrayLiteralEntry;
    tail?: ArrayLiteralTail;
    end: string;
}
export declare class ConstDeclaration {
    constKeyword: string;
    spaceBefore?: string;
    name: Token;
    typedef?: TypeDefinition;
    spaceAfter?: string;
    assignOp: string;
    spaceBeforeExpr?: string;
    value: ExpressionType;
    statementEnd?: string;
}
export declare class TNumber {
    spaceBefore?: string;
    value: number;
    spaceAfter?: string;
}
export declare class Token {
    spaceBefore?: string;
    name: string;
    spaceAfter?: string;
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
    spaceBefore?: string;
    op: string;
    spaceAfter?: string;
    right: BinaryExpressionPart;
    precedence: number;
}
export declare class MultiplyExpression {
    left: BinaryExpressionPart;
    spaceBefore?: string;
    op: string;
    spaceAfter?: string;
    right: BinaryExpressionPart;
    precedence: number;
}
export declare class ParenExpression {
    leftParen: string;
    expr: ExpressionType;
    rightParen: string;
}
