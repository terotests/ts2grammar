export declare type ASTNode = Reference | RightAssocPlus | Expression | SelfReference;
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
    MetaData?: IParserMeta;
    create(): IASTNode;
    consume(code: CodeToConsume): IASTNode | null;
}
export declare class CodeToConsume {
    str: string;
    index: number;
    copy(): CodeToConsume;
    from(cc: CodeToConsume): CodeToConsume;
    has(test: string): boolean;
    consume(test: string): boolean;
    consumeString(): string;
}
export declare class SelfReference implements IASTNode {
    MetaData?: IParserMeta;
    create(): SelfReference;
    consume(code: CodeToConsume): Reference | null;
}
export declare class Reference implements IASTNode {
    value: string;
    MetaData: {
        structure: any[];
        types: string[];
        ownTypes: string[];
        precedence: number;
    };
    create(): Reference;
    consume(code: CodeToConsume): Reference | null;
    static consume(original: CodeToConsume): Reference | null;
}
export declare class RightAssocPlus {
    parenStart: string;
    ref: Reference;
    static consume(code: CodeToConsume): RightAssocPlus | null;
}
export declare type Expression = PlusExpression | MulExpression | Reference | ParenExpression;
export declare class ParenExpression implements IASTNode {
    leftParen: string;
    expr: Expression;
    rightParen: string;
    MetaData: {
        ownTypes: string[];
        structure: any[];
        types: string[];
        precedence: number;
    };
    create(): ParenExpression;
    consume(code: CodeToConsume): ParenExpression | null;
}
export declare class PlusExpression implements IASTNode {
    left: Expression;
    op: string;
    right: Expression;
    MetaData: {
        ownTypes: string[];
        structure: any[];
        types: string[];
        precedence: number;
    };
    create(): PlusExpression;
    consume(code: CodeToConsume): PlusExpression | null;
}
export declare class MulExpression implements IASTNode {
    left: Expression;
    op: string;
    right: Expression;
    MetaData: {
        ownTypes: string[];
        structure: any[];
        types: string[];
        precedence: number;
    };
    create(): MulExpression;
    consume(code: CodeToConsume): MulExpression | null;
}
export declare type NodeOrNull = IASTNode | null;
export declare function WalkNode(orig: CodeToConsume, types?: string[]): ParsedContext | null;
export declare function HelloWorld(): string;
