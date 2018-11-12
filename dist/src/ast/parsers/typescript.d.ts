/******************************************
*                                         *
* AST Parsers, Automatically Generated    *
*                                         *
******************************************/
/**
 * @generated true
 */
export declare class CodeToConsume {
    str: string;
    index: number;
    copy(): CodeToConsume;
    from(cc: CodeToConsume): CodeToConsume;
    has(test: string): boolean;
    consume(test: string): boolean;
    removeSpace(): void;
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
export declare type ExpressionType = SimpleArrowFunctionExpression | ArrowFunctionExpression | NewExpressionWithArgs | NewExpressionWithoutArgs | MemberAccessOperator | PlusExpression | MultiplyExpression | ParenExpression | Token | NTypes | ObjectLiteral | ArrayLiteral | FunctionExpression | TernaryOperator | ConditionalExpression;
export declare type Statement = ConstDeclaration | IfStatement | ReturnStatement;
export declare class TypeDefinition implements IASTNode {
    NodeType: string;
    start: string;
    value: Token;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): TypeDefinition;
    constructor();
    consume(code: CodeToConsume): TypeDefinition | null;
}
export declare class ParamInitializer implements IASTNode {
    NodeType: string;
    start: string;
    value: ExpressionType;
    precedence: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ParamInitializer;
    constructor();
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
    constructor();
    consume(code: CodeToConsume): ParameterListItemTail | null;
}
export declare class ParameterList implements IASTNode {
    NodeType: string;
    start: string;
    head?: Token;
    typedef?: TypeDefinition;
    initializer?: ParamInitializer;
    tail?: ParameterListItemTail;
    end: string;
    precedence: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ParameterList;
    constructor();
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
    constructor();
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
    constructor();
    consume(code: CodeToConsume): CallParameterList | null;
}
export declare class NewExpressionWithArgs implements IASTNode {
    NodeType: string;
    start: string;
    className: Token;
    params: CallParameterList;
    precedence: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): NewExpressionWithArgs;
    constructor();
    consume(code: CodeToConsume): NewExpressionWithArgs | null;
}
export declare class NewExpressionWithoutArgs implements IASTNode {
    NodeType: string;
    start: string;
    className: Token;
    precedence: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): NewExpressionWithoutArgs;
    constructor();
    consume(code: CodeToConsume): NewExpressionWithoutArgs | null;
}
export declare class FunctionExpression implements IASTNode {
    NodeType: string;
    start: string;
    name: Token;
    params: ParameterList;
    body: StatementBlock;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): FunctionExpression;
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
    consume(code: CodeToConsume): ObjectLiteralTail | null;
}
export declare class ArrayLiteral implements IASTNode {
    NodeType: string;
    begin: string;
    spaceFill?: string;
    head?: ExpressionType;
    tail?: ArrayLiteralTail;
    end: string;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ArrayLiteral;
    constructor();
    consume(code: CodeToConsume): ArrayLiteral | null;
}
export declare class ArrayLiteralTail implements IASTNode {
    NodeType: string;
    spaceFill?: string;
    start: string;
    spaceFillBeforeValue?: string;
    value: ExpressionType;
    tail?: ArrayLiteralTail;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ArrayLiteralTail;
    constructor();
    consume(code: CodeToConsume): ArrayLiteralTail | null;
}
export declare class ConstDeclaration implements IASTNode {
    NodeType: string;
    constKeyword: string;
    name: Token;
    typedef?: TypeDefinition;
    assignOp: string;
    value: ExpressionType;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ConstDeclaration;
    constructor();
    consume(code: CodeToConsume): ConstDeclaration | null;
}
export declare class ReturnStatement implements IASTNode {
    NodeType: string;
    returnKeyword: string;
    value?: ExpressionType;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ReturnStatement;
    constructor();
    consume(code: CodeToConsume): ReturnStatement | null;
}
export declare class ElseBlock implements IASTNode {
    NodeType: string;
    elseKeyword: string;
    elseBlock: StatementBlock;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ElseBlock;
    constructor();
    consume(code: CodeToConsume): ElseBlock | null;
}
export declare class IfStatement implements IASTNode {
    NodeType: string;
    ifKeyword: string;
    leftParen: string;
    condition: ExpressionType;
    rightParen: string;
    thenBlock: StatementBlock;
    elseBlock?: ElseBlock;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): IfStatement;
    constructor();
    consume(code: CodeToConsume): IfStatement | null;
}
export declare class NextStatement implements IASTNode {
    NodeType: string;
    space: string;
    statement?: Statement;
    next?: NextStatement;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): NextStatement;
    constructor();
    consume(code: CodeToConsume): NextStatement | null;
}
export declare class StatementBlock implements IASTNode {
    NodeType: string;
    start: string;
    statement?: Statement;
    next?: NextStatement;
    end: string;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): StatementBlock;
    constructor();
    consume(code: CodeToConsume): StatementBlock | null;
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
    constructor();
    consume(code: CodeToConsume): TNumber | null;
}
export declare class Token implements IASTNode {
    NodeType: string;
    name: string;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): Token;
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
    consume(code: CodeToConsume): PlusExpression | null;
}
export declare class MultiplyExpression implements IASTNode {
    NodeType: string;
    left: BinaryExpressionPart;
    op: string;
    right: BinaryExpressionPart;
    precedence: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): MultiplyExpression;
    constructor();
    consume(code: CodeToConsume): MultiplyExpression | null;
}
export declare class ConditionalExpression implements IASTNode {
    NodeType: string;
    left: BinaryExpressionPart;
    op: string;
    right: BinaryExpressionPart;
    precedence: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ConditionalExpression;
    constructor();
    consume(code: CodeToConsume): ConditionalExpression | null;
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
    constructor();
    consume(code: CodeToConsume): ParenExpression | null;
}
export declare class TernaryOperator implements IASTNode {
    NodeType: string;
    condition: ExpressionType;
    start: string;
    whentrue?: ExpressionType;
    separator: string;
    whenfalse?: ExpressionType;
    precedence: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): TernaryOperator;
    constructor();
    consume(code: CodeToConsume): TernaryOperator | null;
}
export declare function WalkNode(orig: CodeToConsume, opList?: IASTNode[]): ParsedContext | null;
