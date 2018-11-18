export declare type ExpressionType = Token | Number | ObjectLiteral | ArrayLiteral | TrueLiteral | FalseLiteral | StringLiteral | NullLiteral;
export declare class TrueLiteral {
    tag: string;
}
export declare class FalseLiteral {
    tag: string;
}
export declare class NullLiteral {
    tag: string;
}
export declare class Token {
    name: string;
}
export declare class Number {
    value_regexp: RegExp;
    value: number;
}
export declare class StringLiteral {
    start: string;
    value_regexp: RegExp;
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
export declare class Root {
    value: ExpressionType;
}
