/******************************************
*                                         *
* AST Parsers, Automatically Generated    *
*                                         *
******************************************/
export declare class CodeToConsume {
    str: string;
    index: number;
    copy(): CodeToConsume;
    from(cc: CodeToConsume): CodeToConsume;
    has(test: string): boolean;
    consume(test: string): boolean;
    consumeNumber(): string;
    consumeString(): string;
}
export interface ParsedContext {
    code: CodeToConsume;
    node: IASTNode | null;
}
export interface IParserMeta {
    structure: IASTNode[];
    types: string[];
    ownTypes: string[];
    precedence: number;
    starts?: number;
    ends?: number;
}
export interface IASTNode {
    precedence?: number;
    create(): IASTNode;
    setFirst(value: any): any;
    getFirst(): IASTNode | null;
    setLast(value: any): any;
    getLast(): IASTNode | null;
    getFreeCount(): number;
    consume(code: CodeToConsume): IASTNode | null;
}
export declare type BinaryExpressionPart = Token | ParenExpression | TNumber | MemberAccessOperator;
export declare type ArgType = Token | TNumberToken | StringLiteral;
export declare type NTypes = TNumberToken | StringLiteral;
export declare type ExpressionType = SimpleArrowFunctionExpression | ArrowFunctionExpression | NewExpressionWithArgs | NewExpressionWithoutArgs | MemberAccessOperator | PlusExpression | MultiplyExpression | ParenExpression | Token | NTypes | ObjectLiteral | ArrayLiteral | FunctionExpression;
export declare class TypeDefinition implements IASTNode {
    NodeType: string;
    spaceBefore?: string;
    start: string;
    spaceAfter?: string;
    value: Token;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): TypeDefinition;
    consume(code: CodeToConsume): TypeDefinition | null;
}
export declare class ParamInitializer implements IASTNode {
    NodeType: string;
    spaceBefore?: string;
    start: string;
    spaceAfter?: string;
    value: ExpressionType;
    precedence: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ParamInitializer;
    consume(code: CodeToConsume): ParamInitializer | null;
}
export declare class ParameterListItemTail implements IASTNode {
    NodeType: string;
    start: string;
    head: Token;
    typedef?: TypeDefinition;
    initializer?: ParamInitializer;
    tail?: ParameterListItemTail;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ParameterListItemTail;
    consume(code: CodeToConsume): ParameterListItemTail | null;
}
export declare class ParameterList implements IASTNode {
    NodeType: string;
    spaceBefore?: string;
    start: string;
    head?: Token;
    typedef?: TypeDefinition;
    initializer?: ParamInitializer;
    tail?: ParameterListItemTail;
    end: string;
    spaceAfter?: string;
    precedence: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ParameterList;
    consume(code: CodeToConsume): ParameterList | null;
}
export declare class CallParameterListTail implements IASTNode {
    NodeType: string;
    start: string;
    head: ExpressionType;
    tail?: CallParameterListTail;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): CallParameterListTail;
    consume(code: CodeToConsume): CallParameterListTail | null;
}
export declare class CallParameterList implements IASTNode {
    NodeType: string;
    start: string;
    head?: ExpressionType;
    tail?: CallParameterListTail;
    end: string;
    precedence: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): CallParameterList;
    consume(code: CodeToConsume): CallParameterList | null;
}
export declare class NewExpressionWithArgs implements IASTNode {
    NodeType: string;
    spaceBeforeNew?: string;
    start: string;
    spaceBefore?: string;
    className: Token;
    params: CallParameterList;
    precedence: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): NewExpressionWithArgs;
    consume(code: CodeToConsume): NewExpressionWithArgs | null;
}
export declare class NewExpressionWithoutArgs implements IASTNode {
    NodeType: string;
    spaceBeforeNew?: string;
    start: string;
    spaceBefore?: string;
    className: Token;
    precedence: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): NewExpressionWithoutArgs;
    consume(code: CodeToConsume): NewExpressionWithoutArgs | null;
}
export declare class FunctionExpression implements IASTNode {
    NodeType: string;
    start: string;
    name: Token;
    params: ParameterList;
    startBlock: string;
    endBlock: string;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): FunctionExpression;
    consume(code: CodeToConsume): FunctionExpression | null;
}
export declare class SimpleArrowFunctionExpression implements IASTNode {
    NodeType: string;
    param: Token;
    spaceBefore?: string;
    arrow: string;
    spaceAfter?: string;
    expression: ExpressionType;
    spaceAfter2?: string;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): SimpleArrowFunctionExpression;
    consume(code: CodeToConsume): SimpleArrowFunctionExpression | null;
}
export declare class ArrowFunctionExpression implements IASTNode {
    NodeType: string;
    async?: string;
    params: ParameterList;
    spaceBefore?: string;
    arrow: string;
    spaceAfter?: string;
    expression: ExpressionType;
    spaceAfter2?: string;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ArrowFunctionExpression;
    consume(code: CodeToConsume): ArrowFunctionExpression | null;
}
export declare class ObjectLiteral implements IASTNode {
    NodeType: string;
    begin: string;
    spaceBefore?: string;
    head?: ObjectLiteralEntry;
    tail?: ObjectLiteralTail;
    spaceAfter?: string;
    end: string;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ObjectLiteral;
    consume(code: CodeToConsume): ObjectLiteral | null;
}
export declare class ObjectLiteralEntry implements IASTNode {
    NodeType: string;
    spaceFill?: string;
    key: Token;
    spaceBefore?: string;
    separator: string;
    spaceAfter?: string;
    value: ExpressionType;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ObjectLiteralEntry;
    consume(code: CodeToConsume): ObjectLiteralEntry | null;
}
export declare class ObjectLiteralTail implements IASTNode {
    NodeType: string;
    spaceFill?: string;
    start: string;
    head: ObjectLiteralEntry;
    tail?: ObjectLiteralTail;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ObjectLiteralTail;
    consume(code: CodeToConsume): ObjectLiteralTail | null;
}
export declare class ArrayLiteralEntry implements IASTNode {
    NodeType: string;
    spaceFill?: string;
    value: ExpressionType;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ArrayLiteralEntry;
    consume(code: CodeToConsume): ArrayLiteralEntry | null;
}
export declare class ArrayLiteralTail implements IASTNode {
    NodeType: string;
    spaceFill?: string;
    start: string;
    head: ArrayLiteralEntry;
    tail?: ArrayLiteralTail;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ArrayLiteralTail;
    consume(code: CodeToConsume): ArrayLiteralTail | null;
}
export declare class ArrayLiteral implements IASTNode {
    NodeType: string;
    begin: string;
    head?: ArrayLiteralEntry;
    tail?: ArrayLiteralTail;
    end: string;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ArrayLiteral;
    consume(code: CodeToConsume): ArrayLiteral | null;
}
export declare class ConstDeclaration implements IASTNode {
    NodeType: string;
    constKeyword: string;
    spaceBefore?: string;
    name: Token;
    typedef?: TypeDefinition;
    spaceAfter?: string;
    assignOp: string;
    spaceBeforeExpr?: string;
    value: ExpressionType;
    statementEnd?: string;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ConstDeclaration;
    consume(code: CodeToConsume): ConstDeclaration | null;
}
export declare class TNumber implements IASTNode {
    NodeType: string;
    spaceBefore?: string;
    value: number;
    spaceAfter?: string;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): TNumber;
    consume(code: CodeToConsume): TNumber | null;
}
export declare class Token implements IASTNode {
    NodeType: string;
    spaceBefore?: string;
    name: string;
    spaceAfter?: string;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): Token;
    consume(code: CodeToConsume): Token | null;
}
export declare class TNumberToken implements IASTNode {
    NodeType: string;
    prefix?: string;
    value: number;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): TNumberToken;
    consume(code: CodeToConsume): TNumberToken | null;
}
export declare class StringLiteral implements IASTNode {
    NodeType: string;
    start: string;
    value: string;
    end: string;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): StringLiteral;
    consume(code: CodeToConsume): StringLiteral | null;
}
export declare class MemberAccessOperator implements IASTNode {
    NodeType: string;
    spaceBefore?: string;
    left: Token;
    op: string;
    right: Token;
    spaceAfter?: string;
    precedence: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): MemberAccessOperator;
    consume(code: CodeToConsume): MemberAccessOperator | null;
}
export declare class PlusExpression implements IASTNode {
    NodeType: string;
    left: BinaryExpressionPart;
    spaceBefore?: string;
    op: string;
    spaceAfter?: string;
    right: BinaryExpressionPart;
    precedence: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): PlusExpression;
    consume(code: CodeToConsume): PlusExpression | null;
}
export declare class MultiplyExpression implements IASTNode {
    NodeType: string;
    left: BinaryExpressionPart;
    spaceBefore?: string;
    op: string;
    spaceAfter?: string;
    right: BinaryExpressionPart;
    precedence: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): MultiplyExpression;
    consume(code: CodeToConsume): MultiplyExpression | null;
}
export declare class ParenExpression implements IASTNode {
    NodeType: string;
    leftParen: string;
    expr: ExpressionType;
    rightParen: string;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ParenExpression;
    consume(code: CodeToConsume): ParenExpression | null;
}
export declare function WalkNode(orig: CodeToConsume, opList?: IASTNode[]): ParsedContext | null;
