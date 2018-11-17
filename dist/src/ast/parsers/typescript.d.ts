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
export declare type BinaryExpressionPart = Token | ParenExpression | TNumber | MemberAccessOperator;
export declare type ArgType = Token | TNumberToken | StringLiteral;
export declare type NTypes = TNumberToken | StringLiteral;
export declare type ExpressionType = SimpleArrowFunctionExpression | ArrowFunctionExpression | NewExpressionWithoutArgs | NewExpressionWithArgs | MemberAccessOperator | PlusExpression | MultiplyExpression | ParenExpression | Token | NTypes | ObjectLiteral | ArrayLiteral | FunctionExpression | TernaryOperator | ConditionalExpression | FnCallWithArgs | Assing | CallExpressionWithArgs;
export declare type TypeDefs = SimpleTypeDefinition | ArrowFnType;
export declare type ClassBodyType = ClassMethodDeclaration | ClassPropertyDeclaration;
export declare type Statement = ConstDeclaration | IfStatement | ReturnStatement | Assing | FunctionExpression | ClassDeclaration;
export declare type Next = NextStatement | NextStatementNl;
export declare class TypeDefinitionUnion implements IASTNode {
    opComplexity: number;
    NodeType: string;
    start: string;
    value: TypeDefs;
    union?: TypeDefinitionUnion;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): TypeDefinitionUnion;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): TypeDefinitionUnion | null;
}
export declare class SimpleTypeDefinition implements IASTNode {
    opComplexity: number;
    NodeType: string;
    value: Token;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): SimpleTypeDefinition;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): SimpleTypeDefinition | null;
}
export declare class Assing implements IASTNode {
    opComplexity: number;
    NodeType: string;
    to: Token;
    arrow: string;
    value: ExpressionType;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): Assing;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): Assing | null;
}
export declare class ArrowFnType implements IASTNode {
    opComplexity: number;
    NodeType: string;
    async?: string;
    params: ParameterList;
    arrow: string;
    typdef: TypeDefs;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ArrowFnType;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): ArrowFnType | null;
}
export declare class ExtendsKeyword implements IASTNode {
    opComplexity: number;
    NodeType: string;
    kw: string;
    typename?: TypeDefs;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ExtendsKeyword;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): ExtendsKeyword | null;
}
export declare class TypeDefinition implements IASTNode {
    opComplexity: number;
    NodeType: string;
    start: string;
    value: TypeDefs;
    union?: TypeDefinitionUnion;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): TypeDefinition;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): TypeDefinition | null;
}
export declare class NextGenericsDefinition implements IASTNode {
    opComplexity: number;
    NodeType: string;
    comma: string;
    value: Token;
    next?: NextGenericsDefinition;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): NextGenericsDefinition;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): NextGenericsDefinition | null;
}
export declare class GenericsDefinition implements IASTNode {
    opComplexity: number;
    NodeType: string;
    value: Token;
    extends?: ExtendsKeyword;
    next?: NextGenericsDefinition;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): GenericsDefinition;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): GenericsDefinition | null;
}
export declare class Generics implements IASTNode {
    opComplexity: number;
    NodeType: string;
    start: string;
    value: GenericsDefinition;
    end: string;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): Generics;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): Generics | null;
}
export declare class ParamInitializer implements IASTNode {
    opComplexity: number;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): ParamInitializer | null;
}
export declare class ParameterListItemTail implements IASTNode {
    opComplexity: number;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): ParameterListItemTail | null;
}
export declare class ParameterList implements IASTNode {
    opComplexity: number;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): ParameterList | null;
}
export declare class CallParameterListTail implements IASTNode {
    opComplexity: number;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): CallParameterListTail | null;
}
export declare class CallParameterList implements IASTNode {
    opComplexity: number;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): CallParameterList | null;
}
export declare class NewExpressionWithArgs implements IASTNode {
    opComplexity: number;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): NewExpressionWithArgs | null;
}
export declare class ClassMethodDeclaration implements IASTNode {
    opComplexity: number;
    NodeType: string;
    name: Token;
    generics?: Generics;
    params: ParameterList;
    returnType?: TypeDefinition;
    body: StatementBlock;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ClassMethodDeclaration;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): ClassMethodDeclaration | null;
}
export declare class ClassPropertyDeclaration implements IASTNode {
    opComplexity: number;
    NodeType: string;
    name: Token;
    init?: ParamInitializer;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ClassPropertyDeclaration;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): ClassPropertyDeclaration | null;
}
export declare class ClassBodyStatement implements IASTNode {
    opComplexity: number;
    NodeType: string;
    begins: string;
    head: ClassBodyType;
    tail?: ClassBodyStatement;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ClassBodyStatement;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): ClassBodyStatement | null;
}
export declare class ClassDeclaration implements IASTNode {
    opComplexity: number;
    NodeType: string;
    start: string;
    className: Token;
    extends?: ExtendsKeyword;
    begin: string;
    head?: ClassBodyType;
    tail?: ClassBodyStatement;
    end: string;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): ClassDeclaration;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): ClassDeclaration | null;
}
export declare class CallExpressionWithArgs implements IASTNode {
    opComplexity: number;
    NodeType: string;
    obj: ExpressionType;
    params: CallParameterList;
    precedence: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): CallExpressionWithArgs;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): CallExpressionWithArgs | null;
}
export declare class FnCallWithArgs implements IASTNode {
    opComplexity: number;
    NodeType: string;
    name: Token;
    params: CallParameterList;
    precedence: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): FnCallWithArgs;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): FnCallWithArgs | null;
}
export declare class NewExpressionWithoutArgs implements IASTNode {
    opComplexity: number;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): NewExpressionWithoutArgs | null;
}
export declare class FunctionExpression implements IASTNode {
    opComplexity: number;
    NodeType: string;
    start: string;
    name: Token;
    generics?: Generics;
    params: ParameterList;
    returnType?: TypeDefinition;
    body: StatementBlock;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): FunctionExpression;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): FunctionExpression | null;
}
export declare class SimpleArrowFunctionExpression implements IASTNode {
    opComplexity: number;
    NodeType: string;
    param: Token;
    arrow: string;
    expression: ExpressionType;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): SimpleArrowFunctionExpression;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): SimpleArrowFunctionExpression | null;
}
export declare class ArrowFunctionExpression implements IASTNode {
    opComplexity: number;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): ArrowFunctionExpression | null;
}
export declare class ObjectLiteral implements IASTNode {
    opComplexity: number;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): ObjectLiteral | null;
}
export declare class ObjectLiteralEntry implements IASTNode {
    opComplexity: number;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): ObjectLiteralEntry | null;
}
export declare class ObjectLiteralTail implements IASTNode {
    opComplexity: number;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): ObjectLiteralTail | null;
}
export declare class ArrayLiteral implements IASTNode {
    opComplexity: number;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): ArrayLiteral | null;
}
export declare class ArrayLiteralTail implements IASTNode {
    opComplexity: number;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): ArrayLiteralTail | null;
}
export declare class ConstDeclaration implements IASTNode {
    opComplexity: number;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): ConstDeclaration | null;
}
export declare class ReturnStatement implements IASTNode {
    opComplexity: number;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): ReturnStatement | null;
}
export declare class ElseBlock implements IASTNode {
    opComplexity: number;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): ElseBlock | null;
}
export declare class IfStatement implements IASTNode {
    opComplexity: number;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): IfStatement | null;
}
export declare class NextStatement implements IASTNode {
    opComplexity: number;
    NodeType: string;
    space: string;
    statement?: Statement;
    next?: Next;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): NextStatement;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): NextStatement | null;
}
export declare class NextStatementNl implements IASTNode {
    opComplexity: number;
    NodeType: string;
    space?: string;
    statement?: Statement;
    next?: Next;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): NextStatementNl;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): NextStatementNl | null;
}
export declare class StatementBlock implements IASTNode {
    opComplexity: number;
    NodeType: string;
    start: string;
    statement?: Statement;
    next?: Next;
    end: string;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): StatementBlock;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): StatementBlock | null;
}
export declare class StatementBlock2 implements IASTNode {
    opComplexity: number;
    NodeType: string;
    start: string;
    statement?: Statement;
    next?: Next;
    end: string;
    precedence?: number;
    getFreeCount(): number;
    setFirst(value: any): void;
    getFirst(): any | null;
    setLast(value: any): void;
    getLast(): any | null;
    create(): StatementBlock2;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): StatementBlock2 | null;
}
export declare class TNumber implements IASTNode {
    opComplexity: number;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): TNumber | null;
}
export declare class Token implements IASTNode {
    opComplexity: number;
    NodeType: string;
    name: string;
    questionmark?: string;
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
export declare class TNumberToken implements IASTNode {
    opComplexity: number;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): TNumberToken | null;
}
export declare class StringLiteral implements IASTNode {
    opComplexity: number;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): StringLiteral | null;
}
export declare class MemberAccessOperator implements IASTNode {
    opComplexity: number;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): MemberAccessOperator | null;
}
export declare class PlusExpression implements IASTNode {
    opComplexity: number;
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
    create(): PlusExpression;
    constructor();
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): PlusExpression | null;
}
export declare class MultiplyExpression implements IASTNode {
    opComplexity: number;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): MultiplyExpression | null;
}
export declare class ConditionalExpression implements IASTNode {
    opComplexity: number;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): ConditionalExpression | null;
}
export declare class ParenExpression implements IASTNode {
    opComplexity: number;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): ParenExpression | null;
}
export declare class TernaryOperator implements IASTNode {
    opComplexity: number;
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
    isInPath(code: CodeToConsume): boolean;
    consume(code: CodeToConsume): TernaryOperator | null;
}
export declare function WalkNode(orig: CodeToConsume, opInList?: IASTNode[]): ParsedContext | null;
