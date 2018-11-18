/******************************************
*                                         *
* AST Parsers, Automatically Generated    *
*                                         *
******************************************/
export interface ConsumePath {
    nodetype: string;
    index: number;
}
/**
 * @generated true
 */
export declare class CodeToConsume {
    str: string;
    index: number;
    expressionPath: ConsumePath[];
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
    NodeType: string;
    precedence?: number;
    create(): IASTNode;
    setFirst(value: any): any;
    getFirst(): IASTNode | null;
    setLast(value: any): any;
    getLast(): IASTNode | null;
    getFreeCount(): number;
    consume(code: CodeToConsume): IASTNode | null;
    opComplexity: number;
}
export declare type ExpressionType = Token | Number | ObjectLiteral | ArrayLiteral | TrueLiteral | FalseLiteral | StringLiteral | NullLiteral;
export declare class TrueLiteral implements IASTNode {
    opComplexity: number;
    NodeType: string;
    tag: string;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): TrueLiteral;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): TrueLiteral | null;
}
export declare class FalseLiteral implements IASTNode {
    opComplexity: number;
    NodeType: string;
    tag: string;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): FalseLiteral;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): FalseLiteral | null;
}
export declare class NullLiteral implements IASTNode {
    opComplexity: number;
    NodeType: string;
    tag: string;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): NullLiteral;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): NullLiteral | null;
}
export declare class Token implements IASTNode {
    opComplexity: number;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): Token | null;
}
export declare class Number implements IASTNode {
    opComplexity: number;
    NodeType: string;
    value_regexp: RegExp;
    value: number;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): Number;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): Number | null;
}
export declare class StringLiteral implements IASTNode {
    opComplexity: number;
    NodeType: string;
    start: string;
    value_regexp: RegExp;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): StringLiteral | null;
}
export declare class ObjectLiteralEntry implements IASTNode {
    opComplexity: number;
    NodeType: string;
    key: StringLiteral;
    separator: string;
    value: ExpressionType;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ObjectLiteralEntry;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): ObjectLiteralEntry | null;
}
export declare class ObjectLiteralTail implements IASTNode {
    opComplexity: number;
    NodeType: string;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): ObjectLiteralTail | null;
}
export declare class ObjectLiteral implements IASTNode {
    opComplexity: number;
    NodeType: string;
    begin: string;
    head?: ObjectLiteralEntry;
    tail?: ObjectLiteralTail;
    end: string;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ObjectLiteral;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): ObjectLiteral | null;
}
export declare class ArrayLiteral implements IASTNode {
    opComplexity: number;
    NodeType: string;
    begin: string;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): ArrayLiteral | null;
}
export declare class ArrayLiteralTail implements IASTNode {
    opComplexity: number;
    NodeType: string;
    start: string;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): ArrayLiteralTail | null;
}
export declare function WalkNode(orig: CodeToConsume, opInList?: IASTNode[]): ParsedContext | null;
