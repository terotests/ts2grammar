export declare type ExpressionType = Token | Number | ObjectLiteral | ArrayLiteral | TrueLiteral | FalseLiteral | StringLiteral;
export declare class TrueLiteral {
    tag: string;
}
export declare class FalseLiteral {
    tag: string;
}
export declare class Token {
    name: string;
}
export declare class Number {
    spaceBefore?: string;
    value: number;
    spaceAfter?: string;
}
export declare class StringLiteral {
    start: string;
    value: string;
    end: string;
}
export declare class ObjectLiteralEntry {
    key: StringLiteral;
    separator: string;
    value: ExpressionType;
}
export declare class ObjectLiteralTail {
    start: string;
    head: ObjectLiteralEntry;
    tail?: ObjectLiteralTail;
}
export declare class ObjectLiteral {
    begin: string;
    head?: ObjectLiteralEntry;
    tail?: ObjectLiteralTail;
    end: string;
}
export declare class ArrayLiteral {
    begin: string;
    head?: ExpressionType;
    tail?: ArrayLiteralTail;
    end: string;
}
export declare class ArrayLiteralTail {
    start: string;
    value: ExpressionType;
    tail?: ArrayLiteralTail;
}
