/******************************************
*                                         *
* AST Parsers, Automatically Generated    *
*                                         *
******************************************/


export interface ConsumePath {
  nodetype: string
  index: number
}
/**
 * @generated true
 */ 
export class CodeToConsume {
  str:string
  index:number
  expressionPath:ConsumePath[] = []
  copy() : CodeToConsume {
    const o = new CodeToConsume()
    o.str = this.str
    o.index = this.index
    o.expressionPath = this.expressionPath.slice()
    return o
  }
  from( cc: CodeToConsume) : CodeToConsume {
    this.str = cc.str
    this.index = cc.index
    this.expressionPath = cc.expressionPath.slice()
    return this
  }
  has( test:string ) : boolean {
    for(let i=0; i < test.length ; i++) {
      if(test.charCodeAt(i) !== this.str.charCodeAt(this.index +i)) return false
    }
    return true
  }
  consume( test:string ) {
    for(let i=0; i < test.length ; i++) {
      if(test.charCodeAt(i) !== this.str.charCodeAt(this.index + i)) return false
    }
    this.index += test.length
    return true
  }
  removeSpace() {
    let len = 0
    for(let i=this.index; i < this.str.length ; i++) {
      const c = this.str.charCodeAt(i)
      if( c < 33 ) {
        len++
      } else {
        break;
      }
    }  
    this.index += len  
  }
  consumeNumber( ) : string {
    let len = 0
    for(let i=this.index; i < this.str.length ; i++) {
      const c = this.str.charCodeAt(i)
      if( (c >= 48) && (c<= 57) ) {
        len++
      } else {
        break;
      }
    }
    if(len > 0 ) {
      const start = this.index
      this.index += len
      return this.str.substring( start, start + len )
    }
    return ""
  } 
  consumeString( ) : string {
    let len = 0
    for(let i=this.index; i < this.str.length ; i++) {
      const c = this.str.charCodeAt(i)
      if( ((c > 64) && (c <=90)) || ((c >= 97) && (c <= 122)) ) {
        len++
      } else {
        break;
      }
    }
    if(len > 0 ) {
      const start = this.index
      this.index += len
      const result = this.str.substring( start, start + len )
      if(!keywords[result]) return result
    }
    return ""
  }  
}

  

export interface ParsedContext {
  code: CodeToConsume
  node: IASTNode | null
}

export interface IParserMeta {
  structure : IASTNode[]
  types : string[]  
  ownTypes : string[]
  precedence : number
  starts?: number
  ends?: number
}

export interface IASTNode {
  NodeType: string
  precedence? : number
  // MetaData?: IParserMeta
  create() : IASTNode
  setFirst(value:any)
  getFirst() : IASTNode | null
  setLast(value:any)
  getLast() : IASTNode | null
  getFreeCount() : number
  consume(code:CodeToConsume) : IASTNode | null
  opComplexity : number
}    
    
// Type : ArgType
// UNION: - Token | TNumberToken | StringLiteral
// Type --> Token
// Type --> TNumberToken
// Type --> StringLiteral
export type ArgType = Token | TNumberToken | StringLiteral;
// Type : NTypes
// UNION: - TNumberToken | StringLiteral
// Type --> TNumberToken
// Type --> StringLiteral
export type NTypes = TNumberToken | StringLiteral;
// Type : ExpressionType
// UNION: - SimpleArrowFunctionExpression | ArrowFunctionExpression | ArrowFunctionExpressionWithBlock | NewExpressionWithoutArgs | NewExpressionWithArgs | MemberAccessOperator | PlusExpression | MultiplyExpression | ParenExpression | Token | NTypes | ObjectLiteral | ArrayLiteral | FunctionExpression | TernaryOperator | ConditionalExpression | FnCallWithArgs | Assing | CallExpressionWithArgs | TrueLiteral | FalseLiteral
// Type --> Token
// Type --> TNumberToken
// Type --> StringLiteral
// Type --> SimpleArrowFunctionExpression
// Type --> ArrowFunctionExpression
// Type --> ArrowFunctionExpressionWithBlock
// Type --> NewExpressionWithoutArgs
// Type --> NewExpressionWithArgs
// Type --> MemberAccessOperator
// Type --> PlusExpression
// Type --> MultiplyExpression
// Type --> ParenExpression
// Type --> ObjectLiteral
// Type --> ArrayLiteral
// Type --> FunctionExpression
// Type --> TernaryOperator
// Type --> ConditionalExpression
// Type --> FnCallWithArgs
// Type --> Assing
// Type --> CallExpressionWithArgs
// Type --> TrueLiteral
// Type --> FalseLiteral
export type ExpressionType = SimpleArrowFunctionExpression | ArrowFunctionExpression | ArrowFunctionExpressionWithBlock | NewExpressionWithoutArgs | NewExpressionWithArgs | MemberAccessOperator | PlusExpression | MultiplyExpression | ParenExpression | Token | NTypes | ObjectLiteral | ArrayLiteral | FunctionExpression | TernaryOperator | ConditionalExpression | FnCallWithArgs | Assing | CallExpressionWithArgs | TrueLiteral | FalseLiteral;
// Type : TypeDefs
// UNION: - SimpleTypeDefinition | ArrowFnType
// Type --> SimpleTypeDefinition
// Type --> ArrowFnType
export type TypeDefs = SimpleTypeDefinition | ArrowFnType;
// Type : ClassBodyType
// UNION: - ClassMethodDeclaration | ClassPropertyDeclaration
// Type --> ClassMethodDeclaration
// Type --> ClassPropertyDeclaration
export type ClassBodyType = ClassMethodDeclaration | ClassPropertyDeclaration;
// Type : Statement
// UNION: - ConstDeclaration | IfStatement | ReturnStatement | Assing | FunctionExpression | ClassDeclaration
// Type --> FunctionExpression
// Type --> Assing
// Type --> ConstDeclaration
// Type --> IfStatement
// Type --> ReturnStatement
// Type --> ClassDeclaration
export type Statement = ConstDeclaration | IfStatement | ReturnStatement | Assing | FunctionExpression | ClassDeclaration;
// Type : Next
// UNION: - NextStatement | NextStatementNl
// Type --> NextStatement
// Type --> NextStatementNl
export type Next = NextStatement | NextStatementNl;
export class TypeDefinitionUnion  implements IASTNode {
  opComplexity = 232 // using getClassComplexity
  NodeType = 'TypeDefinitionUnion'
  start = ' | ';
  value: TypeDefs;
  union?: TypeDefinitionUnion;
  precedence? : number
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.value = value
  }
  getFirst() : any | null {
    return this.value
  }
  setLast( value : any )  {
    this.union = value
  }
  getLast() : any | null {
    return this.union
  }
  create() : TypeDefinitionUnion  {
    return new TypeDefinitionUnion ()
  }
  constructor() {
    this.start = this.start.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='TypeDefinitionUnion') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : TypeDefinitionUnion | null {
    // console.log('Testing TypeDefinitionUnion at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'TypeDefinitionUnion'})
    const start = code.copy()
    if(typeof(this.start) === 'string') {
      start.removeSpace()
      if( !start.consume(this.start) ) return null
      start.removeSpace()
    }
    // WALK: value
    if(!this.value) {
      // Expect: SimpleTypeDefinition, ArrowFnType
      const walk = WalkNode(start, [new SimpleTypeDefinition(), new ArrowFnType()])
      if(walk) {
        this.value = walk.node as TypeDefs
        start.from( walk.code )
      } else {
        return null
      }
    }
    // WALK: union
    // Expect Type: TypeDefinitionUnion
    if(!this.union) {
      const tmp_union = WalkNode(start, [new TypeDefinitionUnion()])
      if(tmp_union) {
        this.union = tmp_union.node as TypeDefinitionUnion
        start.from( tmp_union.code )
      } else {
      }
    }
    code.from( start )
    return this
  }
}
export class SimpleTypeDefinition  implements IASTNode {
  opComplexity = 4 // using getClassComplexity
  NodeType = 'SimpleTypeDefinition'
  value: Token;
  precedence? : number
  getFreeCount() : number {
    return  1
  }
  setFirst( value : any )  {
    this.value = value
  }
  getFirst() : any | null {
    return this.value
  }
  setLast( value : any )  {
    this.value = value
  }
  getLast() : any | null {
    return this.value
  }
  create() : SimpleTypeDefinition  {
    return new SimpleTypeDefinition ()
  }
  constructor() {
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='SimpleTypeDefinition') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : SimpleTypeDefinition | null {
    // console.log('Testing SimpleTypeDefinition at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'SimpleTypeDefinition'})
    const start = code.copy()
    // WALK: value
    // Expect Type: Token
    if(!this.value) {
      const tmp_value = WalkNode(start, [new Token()])
      if(tmp_value) {
        this.value = tmp_value.node as Token
        start.from( tmp_value.code )
      } else {
        return null
      }
    }
    code.from( start )
    return this
  }
}
export class Assing  implements IASTNode {
  opComplexity = 17 // using getClassComplexity
  NodeType = 'Assing'
  to: Token;
  arrow = ' = ';
  value: ExpressionType;
  precedence? : number
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.to = value
  }
  getFirst() : any | null {
    return this.to
  }
  setLast( value : any )  {
    this.value = value
  }
  getLast() : any | null {
    return this.value
  }
  create() : Assing  {
    return new Assing ()
  }
  constructor() {
    this.arrow = this.arrow.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='Assing') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : Assing | null {
    // console.log('Testing Assing at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'Assing'})
    const start = code.copy()
    // WALK: to
    // Expect Type: Token
    if(!this.to) {
      const tmp_to = WalkNode(start, [new Token()])
      if(tmp_to) {
        this.to = tmp_to.node as Token
        start.from( tmp_to.code )
      } else {
        return null
      }
    }
    if(typeof(this.arrow) === 'string') {
      start.removeSpace()
      if( !start.consume(this.arrow) ) return null
      start.removeSpace()
    }
    // WALK: value
    if(!this.value) {
      // Expect: Token, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, ArrowFunctionExpressionWithBlock, NewExpressionWithoutArgs, NewExpressionWithArgs, MemberAccessOperator, PlusExpression, MultiplyExpression, ParenExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator, ConditionalExpression, FnCallWithArgs, Assing, CallExpressionWithArgs, TrueLiteral, FalseLiteral
      const walk = WalkNode(start, [new Token(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new ArrowFunctionExpressionWithBlock(), new NewExpressionWithoutArgs(), new NewExpressionWithArgs(), new MemberAccessOperator(), new PlusExpression(), new MultiplyExpression(), new ParenExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator(), new ConditionalExpression(), new FnCallWithArgs(), new Assing(), new CallExpressionWithArgs(), new TrueLiteral(), new FalseLiteral()])
      if(walk) {
        this.value = walk.node as ExpressionType
        start.from( walk.code )
      } else {
        return null
      }
    }
    code.from( start )
    return this
  }
}
export class ArrowFnType  implements IASTNode {
  opComplexity = 1386 // using getClassComplexity
  NodeType = 'ArrowFnType'
  async? = 'async';
  params: ParameterList;
  arrow = ' => ';
  typdef: TypeDefs;
  precedence? : number
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.params = value
  }
  getFirst() : any | null {
    return this.params
  }
  setLast( value : any )  {
    this.typdef = value
  }
  getLast() : any | null {
    return this.typdef
  }
  create() : ArrowFnType  {
    return new ArrowFnType ()
  }
  constructor() {
    this.arrow = this.arrow.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='ArrowFnType') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : ArrowFnType | null {
    // console.log('Testing ArrowFnType at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'ArrowFnType'})
    const start = code.copy()
    if(typeof(this.async) === 'string') {
      if(!start.consume(this.async)) this.async = '' 
    }
    // WALK: params
    // Expect Type: ParameterList
    if(!this.params) {
      const tmp_params = WalkNode(start, [new ParameterList()])
      if(tmp_params) {
        this.params = tmp_params.node as ParameterList
        start.from( tmp_params.code )
      } else {
        return null
      }
    }
    if(typeof(this.arrow) === 'string') {
      start.removeSpace()
      if( !start.consume(this.arrow) ) return null
      start.removeSpace()
    }
    // WALK: typdef
    if(!this.typdef) {
      // Expect: SimpleTypeDefinition, ArrowFnType
      const walk = WalkNode(start, [new SimpleTypeDefinition(), new ArrowFnType()])
      if(walk) {
        this.typdef = walk.node as TypeDefs
        start.from( walk.code )
      } else {
        return null
      }
    }
    code.from( start )
    return this
  }
}
export class ExtendsKeyword  implements IASTNode {
  opComplexity = 114 // using getClassComplexity
  NodeType = 'ExtendsKeyword'
  kw = ' extends ';
  typename?: TypeDefs;
  precedence? : number
  getFreeCount() : number {
    return  1
  }
  setFirst( value : any )  {
    this.typename = value
  }
  getFirst() : any | null {
    return this.typename
  }
  setLast( value : any )  {
    this.typename = value
  }
  getLast() : any | null {
    return this.typename
  }
  create() : ExtendsKeyword  {
    return new ExtendsKeyword ()
  }
  constructor() {
    this.kw = this.kw.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='ExtendsKeyword') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : ExtendsKeyword | null {
    // console.log('Testing ExtendsKeyword at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'ExtendsKeyword'})
    const start = code.copy()
    if(typeof(this.kw) === 'string') {
      start.removeSpace()
      if( !start.consume(this.kw) ) return null
      start.removeSpace()
    }
    // WALK: typename
    if(!this.typename) {
      // Expect: SimpleTypeDefinition, ArrowFnType
      const walk = WalkNode(start, [new SimpleTypeDefinition(), new ArrowFnType()])
      if(walk) {
        this.typename = walk.node as TypeDefs
        start.from( walk.code )
      } else {
      }
    }
    code.from( start )
    return this
  }
}
export class TypeDefinition  implements IASTNode {
  opComplexity = 225 // using getClassComplexity
  NodeType = 'TypeDefinition'
  start = ' : ';
  value: TypeDefs;
  union?: TypeDefinitionUnion;
  precedence? : number
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.value = value
  }
  getFirst() : any | null {
    return this.value
  }
  setLast( value : any )  {
    this.union = value
  }
  getLast() : any | null {
    return this.union
  }
  create() : TypeDefinition  {
    return new TypeDefinition ()
  }
  constructor() {
    this.start = this.start.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='TypeDefinition') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : TypeDefinition | null {
    // console.log('Testing TypeDefinition at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'TypeDefinition'})
    const start = code.copy()
    if(typeof(this.start) === 'string') {
      start.removeSpace()
      if( !start.consume(this.start) ) return null
      start.removeSpace()
    }
    // WALK: value
    if(!this.value) {
      // Expect: SimpleTypeDefinition, ArrowFnType
      const walk = WalkNode(start, [new SimpleTypeDefinition(), new ArrowFnType()])
      if(walk) {
        this.value = walk.node as TypeDefs
        start.from( walk.code )
      } else {
        return null
      }
    }
    // WALK: union
    // Expect Type: TypeDefinitionUnion
    if(!this.union) {
      const tmp_union = WalkNode(start, [new TypeDefinitionUnion()])
      if(tmp_union) {
        this.union = tmp_union.node as TypeDefinitionUnion
        start.from( tmp_union.code )
      } else {
      }
    }
    code.from( start )
    return this
  }
}
export class NextGenericsDefinition  implements IASTNode {
  opComplexity = 228 // using getClassComplexity
  NodeType = 'NextGenericsDefinition'
  comma = ' , ';
  value: Token;
  next?: NextGenericsDefinition;
  precedence? : number
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.value = value
  }
  getFirst() : any | null {
    return this.value
  }
  setLast( value : any )  {
    this.next = value
  }
  getLast() : any | null {
    return this.next
  }
  create() : NextGenericsDefinition  {
    return new NextGenericsDefinition ()
  }
  constructor() {
    this.comma = this.comma.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='NextGenericsDefinition') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : NextGenericsDefinition | null {
    // console.log('Testing NextGenericsDefinition at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'NextGenericsDefinition'})
    const start = code.copy()
    if(typeof(this.comma) === 'string') {
      start.removeSpace()
      if( !start.consume(this.comma) ) return null
      start.removeSpace()
    }
    // WALK: value
    // Expect Type: Token
    if(!this.value) {
      const tmp_value = WalkNode(start, [new Token()])
      if(tmp_value) {
        this.value = tmp_value.node as Token
        start.from( tmp_value.code )
      } else {
        return null
      }
    }
    // WALK: next
    // Expect Type: NextGenericsDefinition
    if(!this.next) {
      const tmp_next = WalkNode(start, [new NextGenericsDefinition()])
      if(tmp_next) {
        this.next = tmp_next.node as NextGenericsDefinition
        start.from( tmp_next.code )
      } else {
      }
    }
    code.from( start )
    return this
  }
}
export class GenericsDefinition  implements IASTNode {
  opComplexity = 346 // using getClassComplexity
  NodeType = 'GenericsDefinition'
  value: Token;
  extends?: ExtendsKeyword;
  next?: NextGenericsDefinition;
  precedence? : number
  getFreeCount() : number {
    return  3
  }
  setFirst( value : any )  {
    this.value = value
  }
  getFirst() : any | null {
    return this.value
  }
  setLast( value : any )  {
    this.next = value
  }
  getLast() : any | null {
    return this.next
  }
  create() : GenericsDefinition  {
    return new GenericsDefinition ()
  }
  constructor() {
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='GenericsDefinition') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : GenericsDefinition | null {
    // console.log('Testing GenericsDefinition at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'GenericsDefinition'})
    const start = code.copy()
    // WALK: value
    // Expect Type: Token
    if(!this.value) {
      const tmp_value = WalkNode(start, [new Token()])
      if(tmp_value) {
        this.value = tmp_value.node as Token
        start.from( tmp_value.code )
      } else {
        return null
      }
    }
    // WALK: extends
    // Expect Type: ExtendsKeyword
    if(!this.extends) {
      const tmp_extends = WalkNode(start, [new ExtendsKeyword()])
      if(tmp_extends) {
        this.extends = tmp_extends.node as ExtendsKeyword
        start.from( tmp_extends.code )
      } else {
      }
    }
    // WALK: next
    // Expect Type: NextGenericsDefinition
    if(!this.next) {
      const tmp_next = WalkNode(start, [new NextGenericsDefinition()])
      if(tmp_next) {
        this.next = tmp_next.node as NextGenericsDefinition
        start.from( tmp_next.code )
      } else {
      }
    }
    code.from( start )
    return this
  }
}
export class Generics  implements IASTNode {
  opComplexity = 467 // using getClassComplexity
  NodeType = 'Generics'
  start = ' < ';
  value: GenericsDefinition;
  end = ' > ';
  precedence? : number
  getFreeCount() : number {
    return  1
  }
  setFirst( value : any )  {
    this.value = value
  }
  getFirst() : any | null {
    return this.value
  }
  setLast( value : any )  {
    this.value = value
  }
  getLast() : any | null {
    return this.value
  }
  create() : Generics  {
    return new Generics ()
  }
  constructor() {
    this.start = this.start.trim()
    this.end = this.end.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='Generics') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : Generics | null {
    // console.log('Testing Generics at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'Generics'})
    const start = code.copy()
    if(typeof(this.start) === 'string') {
      start.removeSpace()
      if( !start.consume(this.start) ) return null
      start.removeSpace()
    }
    // WALK: value
    // Expect Type: GenericsDefinition
    if(!this.value) {
      const tmp_value = WalkNode(start, [new GenericsDefinition()])
      if(tmp_value) {
        this.value = tmp_value.node as GenericsDefinition
        start.from( tmp_value.code )
      } else {
        return null
      }
    }
    if(typeof(this.end) === 'string') {
      start.removeSpace()
      if( !start.consume(this.end) ) return null
      start.removeSpace()
    }
    code.from( start )
    return this
  }
}
export class ParamInitializer  implements IASTNode {
  opComplexity = 114 // using getClassComplexity
  NodeType = 'ParamInitializer'
  start = ' = ';
  value: ExpressionType;
  precedence? : number
  getFreeCount() : number {
    return  1
  }
  setFirst( value : any )  {
    this.value = value
  }
  getFirst() : any | null {
    return this.value
  }
  setLast( value : any )  {
    this.value = value
  }
  getLast() : any | null {
    return this.value
  }
  create() : ParamInitializer  {
    return new ParamInitializer ()
  }
  constructor() {
    this.start = this.start.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='ParamInitializer') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : ParamInitializer | null {
    // console.log('Testing ParamInitializer at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'ParamInitializer'})
    const start = code.copy()
    if(typeof(this.start) === 'string') {
      start.removeSpace()
      if( !start.consume(this.start) ) return null
      start.removeSpace()
    }
    // WALK: value
    if(!this.value) {
      // Expect: Token, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, ArrowFunctionExpressionWithBlock, NewExpressionWithoutArgs, NewExpressionWithArgs, MemberAccessOperator, PlusExpression, MultiplyExpression, ParenExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator, ConditionalExpression, FnCallWithArgs, Assing, CallExpressionWithArgs, TrueLiteral, FalseLiteral
      const walk = WalkNode(start, [new Token(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new ArrowFunctionExpressionWithBlock(), new NewExpressionWithoutArgs(), new NewExpressionWithArgs(), new MemberAccessOperator(), new PlusExpression(), new MultiplyExpression(), new ParenExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator(), new ConditionalExpression(), new FnCallWithArgs(), new Assing(), new CallExpressionWithArgs(), new TrueLiteral(), new FalseLiteral()])
      if(walk) {
        this.value = walk.node as ExpressionType
        start.from( walk.code )
      } else {
        return null
      }
    }
    code.from( start )
    return this
  }
}
export class ParameterListItemTail  implements IASTNode {
  opComplexity = 906 // using getClassComplexity
  NodeType = 'ParameterListItemTail'
  start = ' , ';
  head: Token;
  typedef?: TypeDefinition;
  initializer?: ParamInitializer;
  tail?: ParameterListItemTail;
  precedence? : number
  getFreeCount() : number {
    return  4
  }
  setFirst( value : any )  {
    this.head = value
  }
  getFirst() : any | null {
    return this.head
  }
  setLast( value : any )  {
    this.tail = value
  }
  getLast() : any | null {
    return this.tail
  }
  create() : ParameterListItemTail  {
    return new ParameterListItemTail ()
  }
  constructor() {
    this.start = this.start.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='ParameterListItemTail') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : ParameterListItemTail | null {
    // console.log('Testing ParameterListItemTail at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'ParameterListItemTail'})
    const start = code.copy()
    if(typeof(this.start) === 'string') {
      start.removeSpace()
      if( !start.consume(this.start) ) return null
      start.removeSpace()
    }
    // WALK: head
    // Expect Type: Token
    if(!this.head) {
      const tmp_head = WalkNode(start, [new Token()])
      if(tmp_head) {
        this.head = tmp_head.node as Token
        start.from( tmp_head.code )
      } else {
        return null
      }
    }
    // WALK: typedef
    // Expect Type: TypeDefinition
    if(!this.typedef) {
      const tmp_typedef = WalkNode(start, [new TypeDefinition()])
      if(tmp_typedef) {
        this.typedef = tmp_typedef.node as TypeDefinition
        start.from( tmp_typedef.code )
      } else {
      }
    }
    // WALK: initializer
    // Expect Type: ParamInitializer
    if(!this.initializer) {
      const tmp_initializer = WalkNode(start, [new ParamInitializer()])
      if(tmp_initializer) {
        this.initializer = tmp_initializer.node as ParamInitializer
        start.from( tmp_initializer.code )
      } else {
      }
    }
    // WALK: tail
    // Expect Type: ParameterListItemTail
    if(!this.tail) {
      const tmp_tail = WalkNode(start, [new ParameterListItemTail()])
      if(tmp_tail) {
        this.tail = tmp_tail.node as ParameterListItemTail
        start.from( tmp_tail.code )
      } else {
      }
    }
    code.from( start )
    return this
  }
}
export class ParameterList  implements IASTNode {
  opComplexity = 1369 // using getClassComplexity
  NodeType = 'ParameterList'
  start = ' ( ';
  head?: Token;
  typedef?: TypeDefinition;
  initializer?: ParamInitializer;
  tail?: ParameterListItemTail;
  end = ' )';
  precedence? : number
  getFreeCount() : number {
    return  4
  }
  setFirst( value : any )  {
    this.head = value
  }
  getFirst() : any | null {
    return this.head
  }
  setLast( value : any )  {
    this.tail = value
  }
  getLast() : any | null {
    return this.tail
  }
  create() : ParameterList  {
    return new ParameterList ()
  }
  constructor() {
    this.start = this.start.trim()
    this.end = this.end.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='ParameterList') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : ParameterList | null {
    // console.log('Testing ParameterList at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'ParameterList'})
    const start = code.copy()
    if(typeof(this.start) === 'string') {
      start.removeSpace()
      if( !start.consume(this.start) ) return null
      start.removeSpace()
    }
    // WALK: head
    // Expect Type: Token
    if(!this.head) {
      const tmp_head = WalkNode(start, [new Token()])
      if(tmp_head) {
        this.head = tmp_head.node as Token
        start.from( tmp_head.code )
      } else {
      }
    }
    // WALK: typedef
    // Expect Type: TypeDefinition
    if(!this.typedef) {
      const tmp_typedef = WalkNode(start, [new TypeDefinition()])
      if(tmp_typedef) {
        this.typedef = tmp_typedef.node as TypeDefinition
        start.from( tmp_typedef.code )
      } else {
      }
    }
    // WALK: initializer
    // Expect Type: ParamInitializer
    if(!this.initializer) {
      const tmp_initializer = WalkNode(start, [new ParamInitializer()])
      if(tmp_initializer) {
        this.initializer = tmp_initializer.node as ParamInitializer
        start.from( tmp_initializer.code )
      } else {
      }
    }
    // WALK: tail
    // Expect Type: ParameterListItemTail
    if(!this.tail) {
      const tmp_tail = WalkNode(start, [new ParameterListItemTail()])
      if(tmp_tail) {
        this.tail = tmp_tail.node as ParameterListItemTail
        start.from( tmp_tail.code )
      } else {
      }
    }
    if(typeof(this.end) === 'string') {
      start.removeSpace()
      if( !start.consume(this.end) ) return null
    }
    code.from( start )
    return this
  }
}
export class CallParameterListTail  implements IASTNode {
  opComplexity = 228 // using getClassComplexity
  NodeType = 'CallParameterListTail'
  start = ' , ';
  head: ExpressionType;
  tail?: CallParameterListTail;
  precedence? : number
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.head = value
  }
  getFirst() : any | null {
    return this.head
  }
  setLast( value : any )  {
    this.tail = value
  }
  getLast() : any | null {
    return this.tail
  }
  create() : CallParameterListTail  {
    return new CallParameterListTail ()
  }
  constructor() {
    this.start = this.start.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='CallParameterListTail') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : CallParameterListTail | null {
    // console.log('Testing CallParameterListTail at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'CallParameterListTail'})
    const start = code.copy()
    if(typeof(this.start) === 'string') {
      start.removeSpace()
      if( !start.consume(this.start) ) return null
      start.removeSpace()
    }
    // WALK: head
    if(!this.head) {
      // Expect: Token, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, ArrowFunctionExpressionWithBlock, NewExpressionWithoutArgs, NewExpressionWithArgs, MemberAccessOperator, PlusExpression, MultiplyExpression, ParenExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator, ConditionalExpression, FnCallWithArgs, Assing, CallExpressionWithArgs, TrueLiteral, FalseLiteral
      const walk = WalkNode(start, [new Token(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new ArrowFunctionExpressionWithBlock(), new NewExpressionWithoutArgs(), new NewExpressionWithArgs(), new MemberAccessOperator(), new PlusExpression(), new MultiplyExpression(), new ParenExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator(), new ConditionalExpression(), new FnCallWithArgs(), new Assing(), new CallExpressionWithArgs(), new TrueLiteral(), new FalseLiteral()])
      if(walk) {
        this.head = walk.node as ExpressionType
        start.from( walk.code )
      } else {
        return null
      }
    }
    // WALK: tail
    // Expect Type: CallParameterListTail
    if(!this.tail) {
      const tmp_tail = WalkNode(start, [new CallParameterListTail()])
      if(tmp_tail) {
        this.tail = tmp_tail.node as CallParameterListTail
        start.from( tmp_tail.code )
      } else {
      }
    }
    code.from( start )
    return this
  }
}
export class CallParameterList  implements IASTNode {
  opComplexity = 352 // using getClassComplexity
  NodeType = 'CallParameterList'
  start = ' ( ';
  head?: ExpressionType;
  tail?: CallParameterListTail;
  end = ' )';
  precedence = 20;
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.head = value
  }
  getFirst() : any | null {
    return this.head
  }
  setLast( value : any )  {
    this.tail = value
  }
  getLast() : any | null {
    return this.tail
  }
  create() : CallParameterList  {
    return new CallParameterList ()
  }
  constructor() {
    this.start = this.start.trim()
    this.end = this.end.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='CallParameterList') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : CallParameterList | null {
    // console.log('Testing CallParameterList at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'CallParameterList'})
    const start = code.copy()
    if(typeof(this.start) === 'string') {
      start.removeSpace()
      if( !start.consume(this.start) ) return null
      start.removeSpace()
    }
    // WALK: head
    if(!this.head) {
      // Expect: Token, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, ArrowFunctionExpressionWithBlock, NewExpressionWithoutArgs, NewExpressionWithArgs, MemberAccessOperator, PlusExpression, MultiplyExpression, ParenExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator, ConditionalExpression, FnCallWithArgs, Assing, CallExpressionWithArgs, TrueLiteral, FalseLiteral
      const walk = WalkNode(start, [new Token(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new ArrowFunctionExpressionWithBlock(), new NewExpressionWithoutArgs(), new NewExpressionWithArgs(), new MemberAccessOperator(), new PlusExpression(), new MultiplyExpression(), new ParenExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator(), new ConditionalExpression(), new FnCallWithArgs(), new Assing(), new CallExpressionWithArgs(), new TrueLiteral(), new FalseLiteral()])
      if(walk) {
        this.head = walk.node as ExpressionType
        start.from( walk.code )
      } else {
      }
    }
    // WALK: tail
    // Expect Type: CallParameterListTail
    if(!this.tail) {
      const tmp_tail = WalkNode(start, [new CallParameterListTail()])
      if(tmp_tail) {
        this.tail = tmp_tail.node as CallParameterListTail
        start.from( tmp_tail.code )
      } else {
      }
    }
    if(typeof(this.end) === 'string') {
      start.removeSpace()
      if( !start.consume(this.end) ) return null
    }
    code.from( start )
    return this
  }
}
export class NewExpressionWithArgs  implements IASTNode {
  opComplexity = 466 // using getClassComplexity
  NodeType = 'NewExpressionWithArgs'
  start = ' new ';
  className: Token;
  params: CallParameterList;
  precedence = 19;
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.className = value
  }
  getFirst() : any | null {
    return this.className
  }
  setLast( value : any )  {
    this.params = value
  }
  getLast() : any | null {
    return this.params
  }
  create() : NewExpressionWithArgs  {
    return new NewExpressionWithArgs ()
  }
  constructor() {
    this.start = this.start.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='NewExpressionWithArgs') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : NewExpressionWithArgs | null {
    // console.log('Testing NewExpressionWithArgs at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'NewExpressionWithArgs'})
    const start = code.copy()
    if(typeof(this.start) === 'string') {
      start.removeSpace()
      if( !start.consume(this.start) ) return null
      start.removeSpace()
    }
    // WALK: className
    // Expect Type: Token
    if(!this.className) {
      const tmp_className = WalkNode(start, [new Token()])
      if(tmp_className) {
        this.className = tmp_className.node as Token
        start.from( tmp_className.code )
      } else {
        return null
      }
    }
    // WALK: params
    // Expect Type: CallParameterList
    if(!this.params) {
      const tmp_params = WalkNode(start, [new CallParameterList()])
      if(tmp_params) {
        this.params = tmp_params.node as CallParameterList
        start.from( tmp_params.code )
      } else {
        return null
      }
    }
    code.from( start )
    return this
  }
}
export class ClassMethodDeclaration  implements IASTNode {
  opComplexity = 1146 // using getClassComplexity
  NodeType = 'ClassMethodDeclaration'
  name: Token;
  generics?: Generics;
  params: ParameterList;
  returnType?: TypeDefinition;
  body: StatementBlock;
  precedence? : number
  getFreeCount() : number {
    return  5
  }
  setFirst( value : any )  {
    this.name = value
  }
  getFirst() : any | null {
    return this.name
  }
  setLast( value : any )  {
    this.body = value
  }
  getLast() : any | null {
    return this.body
  }
  create() : ClassMethodDeclaration  {
    return new ClassMethodDeclaration ()
  }
  constructor() {
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='ClassMethodDeclaration') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : ClassMethodDeclaration | null {
    // console.log('Testing ClassMethodDeclaration at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'ClassMethodDeclaration'})
    const start = code.copy()
    // WALK: name
    // Expect Type: Token
    if(!this.name) {
      const tmp_name = WalkNode(start, [new Token()])
      if(tmp_name) {
        this.name = tmp_name.node as Token
        start.from( tmp_name.code )
      } else {
        return null
      }
    }
    // WALK: generics
    // Expect Type: Generics
    if(!this.generics) {
      const tmp_generics = WalkNode(start, [new Generics()])
      if(tmp_generics) {
        this.generics = tmp_generics.node as Generics
        start.from( tmp_generics.code )
      } else {
      }
    }
    // WALK: params
    // Expect Type: ParameterList
    if(!this.params) {
      const tmp_params = WalkNode(start, [new ParameterList()])
      if(tmp_params) {
        this.params = tmp_params.node as ParameterList
        start.from( tmp_params.code )
      } else {
        return null
      }
    }
    // WALK: returnType
    // Expect Type: TypeDefinition
    if(!this.returnType) {
      const tmp_returnType = WalkNode(start, [new TypeDefinition()])
      if(tmp_returnType) {
        this.returnType = tmp_returnType.node as TypeDefinition
        start.from( tmp_returnType.code )
      } else {
      }
    }
    // WALK: body
    // Expect Type: StatementBlock
    if(!this.body) {
      const tmp_body = WalkNode(start, [new StatementBlock()])
      if(tmp_body) {
        this.body = tmp_body.node as StatementBlock
        start.from( tmp_body.code )
      } else {
        return null
      }
    }
    code.from( start )
    return this
  }
}
export class ClassPropertyDeclaration  implements IASTNode {
  opComplexity = 115 // using getClassComplexity
  NodeType = 'ClassPropertyDeclaration'
  name: Token;
  init?: ParamInitializer;
  precedence? : number
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.name = value
  }
  getFirst() : any | null {
    return this.name
  }
  setLast( value : any )  {
    this.init = value
  }
  getLast() : any | null {
    return this.init
  }
  create() : ClassPropertyDeclaration  {
    return new ClassPropertyDeclaration ()
  }
  constructor() {
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='ClassPropertyDeclaration') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : ClassPropertyDeclaration | null {
    // console.log('Testing ClassPropertyDeclaration at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'ClassPropertyDeclaration'})
    const start = code.copy()
    // WALK: name
    // Expect Type: Token
    if(!this.name) {
      const tmp_name = WalkNode(start, [new Token()])
      if(tmp_name) {
        this.name = tmp_name.node as Token
        start.from( tmp_name.code )
      } else {
        return null
      }
    }
    // WALK: init
    // Expect Type: ParamInitializer
    if(!this.init) {
      const tmp_init = WalkNode(start, [new ParamInitializer()])
      if(tmp_init) {
        this.init = tmp_init.node as ParamInitializer
        start.from( tmp_init.code )
      } else {
      }
    }
    code.from( start )
    return this
  }
}
export class ClassBodyStatement  implements IASTNode {
  opComplexity = 236 // using getClassComplexity
  NodeType = 'ClassBodyStatement'
  // begins_regexp = /\S*[\n;]+[ \t\n\r]*/
  begins_regexp = /^[ \t\n\r;]+/;
  begins: string;
  head: ClassBodyType;
  tail?: ClassBodyStatement;
  precedence? : number
  getFreeCount() : number {
    return  3
  }
  setFirst( value : any )  {
    this.begins = value
  }
  getFirst() : any | null {
    return this.begins
  }
  setLast( value : any )  {
    this.tail = value
  }
  getLast() : any | null {
    return this.tail
  }
  create() : ClassBodyStatement  {
    return new ClassBodyStatement ()
  }
  constructor() {
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='ClassBodyStatement') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : ClassBodyStatement | null {
    // console.log('Testing ClassBodyStatement at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'ClassBodyStatement'})
    const start = code.copy()
    // WALK: begins
    // Expect Type: string
    const m_begins = start.str.substring(start.index).match(this.begins_regexp)
    if(m_begins && m_begins.index === 0) {
      this.begins = m_begins[0]
      start.index += this.begins.length
    } else {
      return null
    }
    // WALK: head
    if(!this.head) {
      // Expect: ClassMethodDeclaration, ClassPropertyDeclaration
      const walk = WalkNode(start, [new ClassMethodDeclaration(), new ClassPropertyDeclaration()])
      if(walk) {
        this.head = walk.node as ClassBodyType
        start.from( walk.code )
      } else {
        return null
      }
    }
    // WALK: tail
    // Expect Type: ClassBodyStatement
    if(!this.tail) {
      const tmp_tail = WalkNode(start, [new ClassBodyStatement()])
      if(tmp_tail) {
        this.tail = tmp_tail.node as ClassBodyStatement
        start.from( tmp_tail.code )
      } else {
      }
    }
    code.from( start )
    return this
  }
}
export class ClassBody  implements IASTNode {
  opComplexity = 473 // using getClassComplexity
  NodeType = 'ClassBody'
  begin = ' { ';
  head: ClassBodyType;
  tail?: ClassBodyStatement;
  end = ' } ';
  precedence? : number
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.head = value
  }
  getFirst() : any | null {
    return this.head
  }
  setLast( value : any )  {
    this.tail = value
  }
  getLast() : any | null {
    return this.tail
  }
  create() : ClassBody  {
    return new ClassBody ()
  }
  constructor() {
    this.begin = this.begin.trim()
    this.end = this.end.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='ClassBody') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : ClassBody | null {
    // console.log('Testing ClassBody at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'ClassBody'})
    const start = code.copy()
    if(typeof(this.begin) === 'string') {
      start.removeSpace()
      if( !start.consume(this.begin) ) return null
      start.removeSpace()
    }
    // WALK: head
    if(!this.head) {
      // Expect: ClassMethodDeclaration, ClassPropertyDeclaration
      const walk = WalkNode(start, [new ClassMethodDeclaration(), new ClassPropertyDeclaration()])
      if(walk) {
        this.head = walk.node as ClassBodyType
        start.from( walk.code )
      } else {
        return null
      }
    }
    // WALK: tail
    // Expect Type: ClassBodyStatement
    if(!this.tail) {
      const tmp_tail = WalkNode(start, [new ClassBodyStatement()])
      if(tmp_tail) {
        this.tail = tmp_tail.node as ClassBodyStatement
        start.from( tmp_tail.code )
      } else {
      }
    }
    if(typeof(this.end) === 'string') {
      start.removeSpace()
      if( !start.consume(this.end) ) return null
      start.removeSpace()
    }
    code.from( start )
    return this
  }
}
export class ClassDeclaration  implements IASTNode {
  opComplexity = 701 // using getClassComplexity
  NodeType = 'ClassDeclaration'
  start = ' class ';
  className: Token;
  extends?: ExtendsKeyword;
  body: ClassBody;
  precedence? : number
  getFreeCount() : number {
    return  3
  }
  setFirst( value : any )  {
    this.className = value
  }
  getFirst() : any | null {
    return this.className
  }
  setLast( value : any )  {
    this.body = value
  }
  getLast() : any | null {
    return this.body
  }
  create() : ClassDeclaration  {
    return new ClassDeclaration ()
  }
  constructor() {
    this.start = this.start.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='ClassDeclaration') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : ClassDeclaration | null {
    // console.log('Testing ClassDeclaration at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'ClassDeclaration'})
    const start = code.copy()
    if(typeof(this.start) === 'string') {
      start.removeSpace()
      if( !start.consume(this.start) ) return null
      start.removeSpace()
    }
    // WALK: className
    // Expect Type: Token
    if(!this.className) {
      const tmp_className = WalkNode(start, [new Token()])
      if(tmp_className) {
        this.className = tmp_className.node as Token
        start.from( tmp_className.code )
      } else {
        return null
      }
    }
    // WALK: extends
    // Expect Type: ExtendsKeyword
    if(!this.extends) {
      const tmp_extends = WalkNode(start, [new ExtendsKeyword()])
      if(tmp_extends) {
        this.extends = tmp_extends.node as ExtendsKeyword
        start.from( tmp_extends.code )
      } else {
      }
    }
    // WALK: body
    // Expect Type: ClassBody
    if(!this.body) {
      const tmp_body = WalkNode(start, [new ClassBody()])
      if(tmp_body) {
        this.body = tmp_body.node as ClassBody
        start.from( tmp_body.code )
      } else {
        return null
      }
    }
    code.from( start )
    return this
  }
}
export class CallExpressionWithArgs  implements IASTNode {
  opComplexity = 114 // using getClassComplexity
  NodeType = 'CallExpressionWithArgs'
  obj: ExpressionType;
  params: CallParameterList;
  precedence = 19;
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.obj = value
  }
  getFirst() : any | null {
    return this.obj
  }
  setLast( value : any )  {
    this.params = value
  }
  getLast() : any | null {
    return this.params
  }
  create() : CallExpressionWithArgs  {
    return new CallExpressionWithArgs ()
  }
  constructor() {
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='CallExpressionWithArgs') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : CallExpressionWithArgs | null {
    // console.log('Testing CallExpressionWithArgs at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'CallExpressionWithArgs'})
    const start = code.copy()
    // WALK: obj
    if(!this.obj) {
      // Expect: Token, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, ArrowFunctionExpressionWithBlock, NewExpressionWithoutArgs, NewExpressionWithArgs, MemberAccessOperator, PlusExpression, MultiplyExpression, ParenExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator, ConditionalExpression, FnCallWithArgs, Assing, CallExpressionWithArgs, TrueLiteral, FalseLiteral
      const walk = WalkNode(start, [new Token(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new ArrowFunctionExpressionWithBlock(), new NewExpressionWithoutArgs(), new NewExpressionWithArgs(), new MemberAccessOperator(), new PlusExpression(), new MultiplyExpression(), new ParenExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator(), new ConditionalExpression(), new FnCallWithArgs(), new Assing(), new CallExpressionWithArgs(), new TrueLiteral(), new FalseLiteral()])
      if(walk) {
        this.obj = walk.node as ExpressionType
        start.from( walk.code )
      } else {
        return null
      }
    }
    // WALK: params
    // Expect Type: CallParameterList
    if(!this.params) {
      const tmp_params = WalkNode(start, [new CallParameterList()])
      if(tmp_params) {
        this.params = tmp_params.node as CallParameterList
        start.from( tmp_params.code )
      } else {
        return null
      }
    }
    code.from( start )
    return this
  }
}
export class FnCallWithArgs  implements IASTNode {
  opComplexity = 115 // using getClassComplexity
  NodeType = 'FnCallWithArgs'
  name: Token;
  params: CallParameterList;
  precedence = 19;
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.name = value
  }
  getFirst() : any | null {
    return this.name
  }
  setLast( value : any )  {
    this.params = value
  }
  getLast() : any | null {
    return this.params
  }
  create() : FnCallWithArgs  {
    return new FnCallWithArgs ()
  }
  constructor() {
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='FnCallWithArgs') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : FnCallWithArgs | null {
    // console.log('Testing FnCallWithArgs at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'FnCallWithArgs'})
    const start = code.copy()
    // WALK: name
    // Expect Type: Token
    if(!this.name) {
      const tmp_name = WalkNode(start, [new Token()])
      if(tmp_name) {
        this.name = tmp_name.node as Token
        start.from( tmp_name.code )
      } else {
        return null
      }
    }
    // WALK: params
    // Expect Type: CallParameterList
    if(!this.params) {
      const tmp_params = WalkNode(start, [new CallParameterList()])
      if(tmp_params) {
        this.params = tmp_params.node as CallParameterList
        start.from( tmp_params.code )
      } else {
        return null
      }
    }
    code.from( start )
    return this
  }
}
export class NewExpressionWithoutArgs  implements IASTNode {
  opComplexity = 114 // using getClassComplexity
  NodeType = 'NewExpressionWithoutArgs'
  start = ' new ';
  className: Token;
  precedence = 18;
  getFreeCount() : number {
    return  1
  }
  setFirst( value : any )  {
    this.className = value
  }
  getFirst() : any | null {
    return this.className
  }
  setLast( value : any )  {
    this.className = value
  }
  getLast() : any | null {
    return this.className
  }
  create() : NewExpressionWithoutArgs  {
    return new NewExpressionWithoutArgs ()
  }
  constructor() {
    this.start = this.start.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='NewExpressionWithoutArgs') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : NewExpressionWithoutArgs | null {
    // console.log('Testing NewExpressionWithoutArgs at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'NewExpressionWithoutArgs'})
    const start = code.copy()
    if(typeof(this.start) === 'string') {
      start.removeSpace()
      if( !start.consume(this.start) ) return null
      start.removeSpace()
    }
    // WALK: className
    // Expect Type: Token
    if(!this.className) {
      const tmp_className = WalkNode(start, [new Token()])
      if(tmp_className) {
        this.className = tmp_className.node as Token
        start.from( tmp_className.code )
      } else {
        return null
      }
    }
    code.from( start )
    return this
  }
}
export class FunctionExpression  implements IASTNode {
  opComplexity = 1256 // using getClassComplexity
  NodeType = 'FunctionExpression'
  start = ' function ';
  name: Token;
  generics?: Generics;
  params: ParameterList;
  returnType?: TypeDefinition;
  body: StatementBlock;
  precedence? : number
  getFreeCount() : number {
    return  5
  }
  setFirst( value : any )  {
    this.name = value
  }
  getFirst() : any | null {
    return this.name
  }
  setLast( value : any )  {
    this.body = value
  }
  getLast() : any | null {
    return this.body
  }
  create() : FunctionExpression  {
    return new FunctionExpression ()
  }
  constructor() {
    this.start = this.start.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='FunctionExpression') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : FunctionExpression | null {
    // console.log('Testing FunctionExpression at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'FunctionExpression'})
    const start = code.copy()
    if(typeof(this.start) === 'string') {
      start.removeSpace()
      if( !start.consume(this.start) ) return null
      start.removeSpace()
    }
    // WALK: name
    // Expect Type: Token
    if(!this.name) {
      const tmp_name = WalkNode(start, [new Token()])
      if(tmp_name) {
        this.name = tmp_name.node as Token
        start.from( tmp_name.code )
      } else {
        return null
      }
    }
    // WALK: generics
    // Expect Type: Generics
    if(!this.generics) {
      const tmp_generics = WalkNode(start, [new Generics()])
      if(tmp_generics) {
        this.generics = tmp_generics.node as Generics
        start.from( tmp_generics.code )
      } else {
      }
    }
    // WALK: params
    // Expect Type: ParameterList
    if(!this.params) {
      const tmp_params = WalkNode(start, [new ParameterList()])
      if(tmp_params) {
        this.params = tmp_params.node as ParameterList
        start.from( tmp_params.code )
      } else {
        return null
      }
    }
    // WALK: returnType
    // Expect Type: TypeDefinition
    if(!this.returnType) {
      const tmp_returnType = WalkNode(start, [new TypeDefinition()])
      if(tmp_returnType) {
        this.returnType = tmp_returnType.node as TypeDefinition
        start.from( tmp_returnType.code )
      } else {
      }
    }
    // WALK: body
    // Expect Type: StatementBlock
    if(!this.body) {
      const tmp_body = WalkNode(start, [new StatementBlock()])
      if(tmp_body) {
        this.body = tmp_body.node as StatementBlock
        start.from( tmp_body.code )
      } else {
        return null
      }
    }
    code.from( start )
    return this
  }
}
export class SimpleArrowFunctionExpression  implements IASTNode {
  opComplexity = 17 // using getClassComplexity
  NodeType = 'SimpleArrowFunctionExpression'
  param: Token;
  arrow = ' => ';
  expression: ExpressionType;
  precedence? : number
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.param = value
  }
  getFirst() : any | null {
    return this.param
  }
  setLast( value : any )  {
    this.expression = value
  }
  getLast() : any | null {
    return this.expression
  }
  create() : SimpleArrowFunctionExpression  {
    return new SimpleArrowFunctionExpression ()
  }
  constructor() {
    this.arrow = this.arrow.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='SimpleArrowFunctionExpression') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : SimpleArrowFunctionExpression | null {
    // console.log('Testing SimpleArrowFunctionExpression at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'SimpleArrowFunctionExpression'})
    const start = code.copy()
    // WALK: param
    // Expect Type: Token
    if(!this.param) {
      const tmp_param = WalkNode(start, [new Token()])
      if(tmp_param) {
        this.param = tmp_param.node as Token
        start.from( tmp_param.code )
      } else {
        return null
      }
    }
    if(typeof(this.arrow) === 'string') {
      start.removeSpace()
      if( !start.consume(this.arrow) ) return null
      start.removeSpace()
    }
    // WALK: expression
    if(!this.expression) {
      // Expect: Token, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, ArrowFunctionExpressionWithBlock, NewExpressionWithoutArgs, NewExpressionWithArgs, MemberAccessOperator, PlusExpression, MultiplyExpression, ParenExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator, ConditionalExpression, FnCallWithArgs, Assing, CallExpressionWithArgs, TrueLiteral, FalseLiteral
      const walk = WalkNode(start, [new Token(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new ArrowFunctionExpressionWithBlock(), new NewExpressionWithoutArgs(), new NewExpressionWithArgs(), new MemberAccessOperator(), new PlusExpression(), new MultiplyExpression(), new ParenExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator(), new ConditionalExpression(), new FnCallWithArgs(), new Assing(), new CallExpressionWithArgs(), new TrueLiteral(), new FalseLiteral()])
      if(walk) {
        this.expression = walk.node as ExpressionType
        start.from( walk.code )
      } else {
        return null
      }
    }
    code.from( start )
    return this
  }
}
export class ArrowFunctionExpressionWithBlock  implements IASTNode {
  opComplexity = 750 // using getClassComplexity
  NodeType = 'ArrowFunctionExpressionWithBlock'
  async? = ' async ';
  params: ParameterList;
  arrow = ' => ';
  body: StatementBlock;
  precedence? : number
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.params = value
  }
  getFirst() : any | null {
    return this.params
  }
  setLast( value : any )  {
    this.body = value
  }
  getLast() : any | null {
    return this.body
  }
  create() : ArrowFunctionExpressionWithBlock  {
    return new ArrowFunctionExpressionWithBlock ()
  }
  constructor() {
    this.async = this.async.trim()
    this.arrow = this.arrow.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='ArrowFunctionExpressionWithBlock') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : ArrowFunctionExpressionWithBlock | null {
    // console.log('Testing ArrowFunctionExpressionWithBlock at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'ArrowFunctionExpressionWithBlock'})
    const start = code.copy()
    if(typeof(this.async) === 'string') {
      start.removeSpace()
      if(!start.consume(this.async)) this.async = '' 
      start.removeSpace()
    }
    // WALK: params
    // Expect Type: ParameterList
    if(!this.params) {
      const tmp_params = WalkNode(start, [new ParameterList()])
      if(tmp_params) {
        this.params = tmp_params.node as ParameterList
        start.from( tmp_params.code )
      } else {
        return null
      }
    }
    if(typeof(this.arrow) === 'string') {
      start.removeSpace()
      if( !start.consume(this.arrow) ) return null
      start.removeSpace()
    }
    // WALK: body
    // Expect Type: StatementBlock
    if(!this.body) {
      const tmp_body = WalkNode(start, [new StatementBlock()])
      if(tmp_body) {
        this.body = tmp_body.node as StatementBlock
        start.from( tmp_body.code )
      } else {
        return null
      }
    }
    code.from( start )
    return this
  }
}
export class ArrowFunctionExpression  implements IASTNode {
  opComplexity = 354 // using getClassComplexity
  NodeType = 'ArrowFunctionExpression'
  async? = ' async ';
  params: ParameterList;
  arrow = ' => ';
  body: ExpressionType;
  precedence? : number
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.params = value
  }
  getFirst() : any | null {
    return this.params
  }
  setLast( value : any )  {
    this.body = value
  }
  getLast() : any | null {
    return this.body
  }
  create() : ArrowFunctionExpression  {
    return new ArrowFunctionExpression ()
  }
  constructor() {
    this.async = this.async.trim()
    this.arrow = this.arrow.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='ArrowFunctionExpression') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : ArrowFunctionExpression | null {
    // console.log('Testing ArrowFunctionExpression at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'ArrowFunctionExpression'})
    const start = code.copy()
    if(typeof(this.async) === 'string') {
      start.removeSpace()
      if(!start.consume(this.async)) this.async = '' 
      start.removeSpace()
    }
    // WALK: params
    // Expect Type: ParameterList
    if(!this.params) {
      const tmp_params = WalkNode(start, [new ParameterList()])
      if(tmp_params) {
        this.params = tmp_params.node as ParameterList
        start.from( tmp_params.code )
      } else {
        return null
      }
    }
    if(typeof(this.arrow) === 'string') {
      start.removeSpace()
      if( !start.consume(this.arrow) ) return null
      start.removeSpace()
    }
    // WALK: body
    if(!this.body) {
      // Expect: Token, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, ArrowFunctionExpressionWithBlock, NewExpressionWithoutArgs, NewExpressionWithArgs, MemberAccessOperator, PlusExpression, MultiplyExpression, ParenExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator, ConditionalExpression, FnCallWithArgs, Assing, CallExpressionWithArgs, TrueLiteral, FalseLiteral
      const walk = WalkNode(start, [new Token(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new ArrowFunctionExpressionWithBlock(), new NewExpressionWithoutArgs(), new NewExpressionWithArgs(), new MemberAccessOperator(), new PlusExpression(), new MultiplyExpression(), new ParenExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator(), new ConditionalExpression(), new FnCallWithArgs(), new Assing(), new CallExpressionWithArgs(), new TrueLiteral(), new FalseLiteral()])
      if(walk) {
        this.body = walk.node as ExpressionType
        start.from( walk.code )
      } else {
        return null
      }
    }
    code.from( start )
    return this
  }
}
export class ObjectLiteral  implements IASTNode {
  opComplexity = 204 // using getClassComplexity
  NodeType = 'ObjectLiteral'
  begin = '{';
  spaceBefore? = ' ';
  head?: ObjectLiteralEntry;
  tail?: ObjectLiteralTail;
  spaceAfter? = ' ';
  end = '}';
  precedence? : number
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.head = value
  }
  getFirst() : any | null {
    return this.head
  }
  setLast( value : any )  {
    this.tail = value
  }
  getLast() : any | null {
    return this.tail
  }
  create() : ObjectLiteral  {
    return new ObjectLiteral ()
  }
  constructor() {
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='ObjectLiteral') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : ObjectLiteral | null {
    // console.log('Testing ObjectLiteral at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'ObjectLiteral'})
    const start = code.copy()
    if(typeof(this.begin) === 'string') {
      if( !start.consume(this.begin) ) return null
    }
    if(typeof(this.spaceBefore) === 'string') {
      if(!start.consume(this.spaceBefore)) this.spaceBefore = '' 
    }
    // WALK: head
    // Expect Type: ObjectLiteralEntry
    if(!this.head) {
      const tmp_head = WalkNode(start, [new ObjectLiteralEntry()])
      if(tmp_head) {
        this.head = tmp_head.node as ObjectLiteralEntry
        start.from( tmp_head.code )
      } else {
      }
    }
    // WALK: tail
    // Expect Type: ObjectLiteralTail
    if(!this.tail) {
      const tmp_tail = WalkNode(start, [new ObjectLiteralTail()])
      if(tmp_tail) {
        this.tail = tmp_tail.node as ObjectLiteralTail
        start.from( tmp_tail.code )
      } else {
      }
    }
    if(typeof(this.spaceAfter) === 'string') {
      if(!start.consume(this.spaceAfter)) this.spaceAfter = '' 
    }
    if(typeof(this.end) === 'string') {
      if( !start.consume(this.end) ) return null
    }
    code.from( start )
    return this
  }
}
export class ObjectLiteralEntry  implements IASTNode {
  opComplexity = 19 // using getClassComplexity
  NodeType = 'ObjectLiteralEntry'
  spaceFill? = ' ';
  key: Token;
  spaceBefore? = ' ';
  separator = ':';
  spaceAfter? = ' ';
  value: ExpressionType;
  precedence? : number
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.key = value
  }
  getFirst() : any | null {
    return this.key
  }
  setLast( value : any )  {
    this.value = value
  }
  getLast() : any | null {
    return this.value
  }
  create() : ObjectLiteralEntry  {
    return new ObjectLiteralEntry ()
  }
  constructor() {
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='ObjectLiteralEntry') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : ObjectLiteralEntry | null {
    // console.log('Testing ObjectLiteralEntry at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'ObjectLiteralEntry'})
    const start = code.copy()
    if(typeof(this.spaceFill) === 'string') {
      if(!start.consume(this.spaceFill)) this.spaceFill = '' 
    }
    // WALK: key
    // Expect Type: Token
    if(!this.key) {
      const tmp_key = WalkNode(start, [new Token()])
      if(tmp_key) {
        this.key = tmp_key.node as Token
        start.from( tmp_key.code )
      } else {
        return null
      }
    }
    if(typeof(this.spaceBefore) === 'string') {
      if(!start.consume(this.spaceBefore)) this.spaceBefore = '' 
    }
    if(typeof(this.separator) === 'string') {
      if( !start.consume(this.separator) ) return null
    }
    if(typeof(this.spaceAfter) === 'string') {
      if(!start.consume(this.spaceAfter)) this.spaceAfter = '' 
    }
    // WALK: value
    if(!this.value) {
      // Expect: Token, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, ArrowFunctionExpressionWithBlock, NewExpressionWithoutArgs, NewExpressionWithArgs, MemberAccessOperator, PlusExpression, MultiplyExpression, ParenExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator, ConditionalExpression, FnCallWithArgs, Assing, CallExpressionWithArgs, TrueLiteral, FalseLiteral
      const walk = WalkNode(start, [new Token(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new ArrowFunctionExpressionWithBlock(), new NewExpressionWithoutArgs(), new NewExpressionWithArgs(), new MemberAccessOperator(), new PlusExpression(), new MultiplyExpression(), new ParenExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator(), new ConditionalExpression(), new FnCallWithArgs(), new Assing(), new CallExpressionWithArgs(), new TrueLiteral(), new FalseLiteral()])
      if(walk) {
        this.value = walk.node as ExpressionType
        start.from( walk.code )
      } else {
        return null
      }
    }
    code.from( start )
    return this
  }
}
export class ObjectLiteralTail  implements IASTNode {
  opComplexity = 62 // using getClassComplexity
  NodeType = 'ObjectLiteralTail'
  spaceFill? = ' ';
  start = ',';
  head: ObjectLiteralEntry;
  tail?: ObjectLiteralTail;
  precedence? : number
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.head = value
  }
  getFirst() : any | null {
    return this.head
  }
  setLast( value : any )  {
    this.tail = value
  }
  getLast() : any | null {
    return this.tail
  }
  create() : ObjectLiteralTail  {
    return new ObjectLiteralTail ()
  }
  constructor() {
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='ObjectLiteralTail') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : ObjectLiteralTail | null {
    // console.log('Testing ObjectLiteralTail at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'ObjectLiteralTail'})
    const start = code.copy()
    if(typeof(this.spaceFill) === 'string') {
      if(!start.consume(this.spaceFill)) this.spaceFill = '' 
    }
    if(typeof(this.start) === 'string') {
      if( !start.consume(this.start) ) return null
    }
    // WALK: head
    // Expect Type: ObjectLiteralEntry
    if(!this.head) {
      const tmp_head = WalkNode(start, [new ObjectLiteralEntry()])
      if(tmp_head) {
        this.head = tmp_head.node as ObjectLiteralEntry
        start.from( tmp_head.code )
      } else {
        return null
      }
    }
    // WALK: tail
    // Expect Type: ObjectLiteralTail
    if(!this.tail) {
      const tmp_tail = WalkNode(start, [new ObjectLiteralTail()])
      if(tmp_tail) {
        this.tail = tmp_tail.node as ObjectLiteralTail
        start.from( tmp_tail.code )
      } else {
      }
    }
    code.from( start )
    return this
  }
}
export class ArrayLiteral  implements IASTNode {
  opComplexity = 154 // using getClassComplexity
  NodeType = 'ArrayLiteral'
  begin = '[';
  spaceFill? = ' ';
  head?: ExpressionType;
  tail?: ArrayLiteralTail;
  end = ']';
  precedence? : number
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.head = value
  }
  getFirst() : any | null {
    return this.head
  }
  setLast( value : any )  {
    this.tail = value
  }
  getLast() : any | null {
    return this.tail
  }
  create() : ArrayLiteral  {
    return new ArrayLiteral ()
  }
  constructor() {
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='ArrayLiteral') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : ArrayLiteral | null {
    // console.log('Testing ArrayLiteral at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'ArrayLiteral'})
    const start = code.copy()
    if(typeof(this.begin) === 'string') {
      if( !start.consume(this.begin) ) return null
    }
    if(typeof(this.spaceFill) === 'string') {
      if(!start.consume(this.spaceFill)) this.spaceFill = '' 
    }
    // WALK: head
    if(!this.head) {
      // Expect: Token, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, ArrowFunctionExpressionWithBlock, NewExpressionWithoutArgs, NewExpressionWithArgs, MemberAccessOperator, PlusExpression, MultiplyExpression, ParenExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator, ConditionalExpression, FnCallWithArgs, Assing, CallExpressionWithArgs, TrueLiteral, FalseLiteral
      const walk = WalkNode(start, [new Token(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new ArrowFunctionExpressionWithBlock(), new NewExpressionWithoutArgs(), new NewExpressionWithArgs(), new MemberAccessOperator(), new PlusExpression(), new MultiplyExpression(), new ParenExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator(), new ConditionalExpression(), new FnCallWithArgs(), new Assing(), new CallExpressionWithArgs(), new TrueLiteral(), new FalseLiteral()])
      if(walk) {
        this.head = walk.node as ExpressionType
        start.from( walk.code )
      } else {
      }
    }
    // WALK: tail
    // Expect Type: ArrayLiteralTail
    if(!this.tail) {
      const tmp_tail = WalkNode(start, [new ArrayLiteralTail()])
      if(tmp_tail) {
        this.tail = tmp_tail.node as ArrayLiteralTail
        start.from( tmp_tail.code )
      } else {
      }
    }
    if(typeof(this.end) === 'string') {
      if( !start.consume(this.end) ) return null
    }
    code.from( start )
    return this
  }
}
export class ArrayLiteralTail  implements IASTNode {
  opComplexity = 30 // using getClassComplexity
  NodeType = 'ArrayLiteralTail'
  spaceFill? = ' ';
  start = ',';
  spaceFillBeforeValue? = ' ';
  value: ExpressionType;
  tail?: ArrayLiteralTail;
  precedence? : number
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.value = value
  }
  getFirst() : any | null {
    return this.value
  }
  setLast( value : any )  {
    this.tail = value
  }
  getLast() : any | null {
    return this.tail
  }
  create() : ArrayLiteralTail  {
    return new ArrayLiteralTail ()
  }
  constructor() {
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='ArrayLiteralTail') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : ArrayLiteralTail | null {
    // console.log('Testing ArrayLiteralTail at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'ArrayLiteralTail'})
    const start = code.copy()
    if(typeof(this.spaceFill) === 'string') {
      if(!start.consume(this.spaceFill)) this.spaceFill = '' 
    }
    if(typeof(this.start) === 'string') {
      if( !start.consume(this.start) ) return null
    }
    if(typeof(this.spaceFillBeforeValue) === 'string') {
      if(!start.consume(this.spaceFillBeforeValue)) this.spaceFillBeforeValue = '' 
    }
    // WALK: value
    if(!this.value) {
      // Expect: Token, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, ArrowFunctionExpressionWithBlock, NewExpressionWithoutArgs, NewExpressionWithArgs, MemberAccessOperator, PlusExpression, MultiplyExpression, ParenExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator, ConditionalExpression, FnCallWithArgs, Assing, CallExpressionWithArgs, TrueLiteral, FalseLiteral
      const walk = WalkNode(start, [new Token(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new ArrowFunctionExpressionWithBlock(), new NewExpressionWithoutArgs(), new NewExpressionWithArgs(), new MemberAccessOperator(), new PlusExpression(), new MultiplyExpression(), new ParenExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator(), new ConditionalExpression(), new FnCallWithArgs(), new Assing(), new CallExpressionWithArgs(), new TrueLiteral(), new FalseLiteral()])
      if(walk) {
        this.value = walk.node as ExpressionType
        start.from( walk.code )
      } else {
        return null
      }
    }
    // WALK: tail
    // Expect Type: ArrayLiteralTail
    if(!this.tail) {
      const tmp_tail = WalkNode(start, [new ArrayLiteralTail()])
      if(tmp_tail) {
        this.tail = tmp_tail.node as ArrayLiteralTail
        start.from( tmp_tail.code )
      } else {
      }
    }
    code.from( start )
    return this
  }
}
export class ConstDeclaration  implements IASTNode {
  opComplexity = 352 // using getClassComplexity
  NodeType = 'ConstDeclaration'
  constKeyword = ' const ';
  name: Token;
  typedef?: TypeDefinition;
  assignOp = ' = ';
  value: ExpressionType;
  precedence? : number
  getFreeCount() : number {
    return  3
  }
  setFirst( value : any )  {
    this.name = value
  }
  getFirst() : any | null {
    return this.name
  }
  setLast( value : any )  {
    this.value = value
  }
  getLast() : any | null {
    return this.value
  }
  create() : ConstDeclaration  {
    return new ConstDeclaration ()
  }
  constructor() {
    this.constKeyword = this.constKeyword.trim()
    this.assignOp = this.assignOp.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='ConstDeclaration') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : ConstDeclaration | null {
    // console.log('Testing ConstDeclaration at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'ConstDeclaration'})
    const start = code.copy()
    if(typeof(this.constKeyword) === 'string') {
      start.removeSpace()
      if( !start.consume(this.constKeyword) ) return null
      start.removeSpace()
    }
    // WALK: name
    // Expect Type: Token
    if(!this.name) {
      const tmp_name = WalkNode(start, [new Token()])
      if(tmp_name) {
        this.name = tmp_name.node as Token
        start.from( tmp_name.code )
      } else {
        return null
      }
    }
    // WALK: typedef
    // Expect Type: TypeDefinition
    if(!this.typedef) {
      const tmp_typedef = WalkNode(start, [new TypeDefinition()])
      if(tmp_typedef) {
        this.typedef = tmp_typedef.node as TypeDefinition
        start.from( tmp_typedef.code )
      } else {
      }
    }
    if(typeof(this.assignOp) === 'string') {
      start.removeSpace()
      if( !start.consume(this.assignOp) ) return null
      start.removeSpace()
    }
    // WALK: value
    if(!this.value) {
      // Expect: Token, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, ArrowFunctionExpressionWithBlock, NewExpressionWithoutArgs, NewExpressionWithArgs, MemberAccessOperator, PlusExpression, MultiplyExpression, ParenExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator, ConditionalExpression, FnCallWithArgs, Assing, CallExpressionWithArgs, TrueLiteral, FalseLiteral
      const walk = WalkNode(start, [new Token(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new ArrowFunctionExpressionWithBlock(), new NewExpressionWithoutArgs(), new NewExpressionWithArgs(), new MemberAccessOperator(), new PlusExpression(), new MultiplyExpression(), new ParenExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator(), new ConditionalExpression(), new FnCallWithArgs(), new Assing(), new CallExpressionWithArgs(), new TrueLiteral(), new FalseLiteral()])
      if(walk) {
        this.value = walk.node as ExpressionType
        start.from( walk.code )
      } else {
        return null
      }
    }
    code.from( start )
    return this
  }
}
export class ReturnStatement  implements IASTNode {
  opComplexity = 114 // using getClassComplexity
  NodeType = 'ReturnStatement'
  returnKeyword = ' return ';
  value?: ExpressionType;
  precedence? : number
  getFreeCount() : number {
    return  1
  }
  setFirst( value : any )  {
    this.value = value
  }
  getFirst() : any | null {
    return this.value
  }
  setLast( value : any )  {
    this.value = value
  }
  getLast() : any | null {
    return this.value
  }
  create() : ReturnStatement  {
    return new ReturnStatement ()
  }
  constructor() {
    this.returnKeyword = this.returnKeyword.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='ReturnStatement') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : ReturnStatement | null {
    // console.log('Testing ReturnStatement at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'ReturnStatement'})
    const start = code.copy()
    if(typeof(this.returnKeyword) === 'string') {
      start.removeSpace()
      if( !start.consume(this.returnKeyword) ) return null
      start.removeSpace()
    }
    // WALK: value
    if(!this.value) {
      // Expect: Token, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, ArrowFunctionExpressionWithBlock, NewExpressionWithoutArgs, NewExpressionWithArgs, MemberAccessOperator, PlusExpression, MultiplyExpression, ParenExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator, ConditionalExpression, FnCallWithArgs, Assing, CallExpressionWithArgs, TrueLiteral, FalseLiteral
      const walk = WalkNode(start, [new Token(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new ArrowFunctionExpressionWithBlock(), new NewExpressionWithoutArgs(), new NewExpressionWithArgs(), new MemberAccessOperator(), new PlusExpression(), new MultiplyExpression(), new ParenExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator(), new ConditionalExpression(), new FnCallWithArgs(), new Assing(), new CallExpressionWithArgs(), new TrueLiteral(), new FalseLiteral()])
      if(walk) {
        this.value = walk.node as ExpressionType
        start.from( walk.code )
      } else {
      }
    }
    code.from( start )
    return this
  }
}
export class ElseBlock  implements IASTNode {
  opComplexity = 222 // using getClassComplexity
  NodeType = 'ElseBlock'
  elseKeyword = ' else ';
  elseBlock: StatementBlock;
  precedence? : number
  getFreeCount() : number {
    return  1
  }
  setFirst( value : any )  {
    this.elseBlock = value
  }
  getFirst() : any | null {
    return this.elseBlock
  }
  setLast( value : any )  {
    this.elseBlock = value
  }
  getLast() : any | null {
    return this.elseBlock
  }
  create() : ElseBlock  {
    return new ElseBlock ()
  }
  constructor() {
    this.elseKeyword = this.elseKeyword.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='ElseBlock') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : ElseBlock | null {
    // console.log('Testing ElseBlock at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'ElseBlock'})
    const start = code.copy()
    if(typeof(this.elseKeyword) === 'string') {
      start.removeSpace()
      if( !start.consume(this.elseKeyword) ) return null
      start.removeSpace()
    }
    // WALK: elseBlock
    // Expect Type: StatementBlock
    if(!this.elseBlock) {
      const tmp_elseBlock = WalkNode(start, [new StatementBlock()])
      if(tmp_elseBlock) {
        this.elseBlock = tmp_elseBlock.node as StatementBlock
        start.from( tmp_elseBlock.code )
      } else {
        return null
      }
    }
    code.from( start )
    return this
  }
}
export class IfStatement  implements IASTNode {
  opComplexity = 467 // using getClassComplexity
  NodeType = 'IfStatement'
  ifKeyword = ' if ';
  leftParen = ' ( ';
  condition: ExpressionType;
  rightParen = ' ) ';
  thenBlock: StatementBlock;
  elseBlock?: ElseBlock;
  precedence? : number
  getFreeCount() : number {
    return  3
  }
  setFirst( value : any )  {
    this.condition = value
  }
  getFirst() : any | null {
    return this.condition
  }
  setLast( value : any )  {
    this.elseBlock = value
  }
  getLast() : any | null {
    return this.elseBlock
  }
  create() : IfStatement  {
    return new IfStatement ()
  }
  constructor() {
    this.ifKeyword = this.ifKeyword.trim()
    this.leftParen = this.leftParen.trim()
    this.rightParen = this.rightParen.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='IfStatement') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : IfStatement | null {
    // console.log('Testing IfStatement at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'IfStatement'})
    const start = code.copy()
    if(typeof(this.ifKeyword) === 'string') {
      start.removeSpace()
      if( !start.consume(this.ifKeyword) ) return null
      start.removeSpace()
    }
    if(typeof(this.leftParen) === 'string') {
      start.removeSpace()
      if( !start.consume(this.leftParen) ) return null
      start.removeSpace()
    }
    // WALK: condition
    if(!this.condition) {
      // Expect: Token, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, ArrowFunctionExpressionWithBlock, NewExpressionWithoutArgs, NewExpressionWithArgs, MemberAccessOperator, PlusExpression, MultiplyExpression, ParenExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator, ConditionalExpression, FnCallWithArgs, Assing, CallExpressionWithArgs, TrueLiteral, FalseLiteral
      const walk = WalkNode(start, [new Token(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new ArrowFunctionExpressionWithBlock(), new NewExpressionWithoutArgs(), new NewExpressionWithArgs(), new MemberAccessOperator(), new PlusExpression(), new MultiplyExpression(), new ParenExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator(), new ConditionalExpression(), new FnCallWithArgs(), new Assing(), new CallExpressionWithArgs(), new TrueLiteral(), new FalseLiteral()])
      if(walk) {
        this.condition = walk.node as ExpressionType
        start.from( walk.code )
      } else {
        return null
      }
    }
    if(typeof(this.rightParen) === 'string') {
      start.removeSpace()
      if( !start.consume(this.rightParen) ) return null
      start.removeSpace()
    }
    // WALK: thenBlock
    // Expect Type: StatementBlock
    if(!this.thenBlock) {
      const tmp_thenBlock = WalkNode(start, [new StatementBlock()])
      if(tmp_thenBlock) {
        this.thenBlock = tmp_thenBlock.node as StatementBlock
        start.from( tmp_thenBlock.code )
      } else {
        return null
      }
    }
    // WALK: elseBlock
    // Expect Type: ElseBlock
    if(!this.elseBlock) {
      const tmp_elseBlock = WalkNode(start, [new ElseBlock()])
      if(tmp_elseBlock) {
        this.elseBlock = tmp_elseBlock.node as ElseBlock
        start.from( tmp_elseBlock.code )
      } else {
      }
    }
    code.from( start )
    return this
  }
}
export class NextStatement  implements IASTNode {
  opComplexity = 259 // using getClassComplexity
  NodeType = 'NextStatement'
  space = ' ; ';
  statement?: Statement;
  next?: Next;
  precedence? : number
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.statement = value
  }
  getFirst() : any | null {
    return this.statement
  }
  setLast( value : any )  {
    this.next = value
  }
  getLast() : any | null {
    return this.next
  }
  create() : NextStatement  {
    return new NextStatement ()
  }
  constructor() {
    this.space = this.space.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='NextStatement') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : NextStatement | null {
    // console.log('Testing NextStatement at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'NextStatement'})
    const start = code.copy()
    if(typeof(this.space) === 'string') {
      start.removeSpace()
      if( !start.consume(this.space) ) return null
      start.removeSpace()
    }
    // WALK: statement
    if(!this.statement) {
      // Expect: FunctionExpression, Assing, ConstDeclaration, IfStatement, ReturnStatement, ClassDeclaration
      const walk = WalkNode(start, [new FunctionExpression(), new Assing(), new ConstDeclaration(), new IfStatement(), new ReturnStatement(), new ClassDeclaration()])
      if(walk) {
        this.statement = walk.node as Statement
        start.from( walk.code )
      } else {
      }
    }
    // WALK: next
    if(!this.next) {
      // Expect: NextStatement, NextStatementNl
      const walk = WalkNode(start, [new NextStatement(), new NextStatementNl()])
      if(walk) {
        this.next = walk.node as Next
        start.from( walk.code )
      } else {
      }
    }
    code.from( start )
    return this
  }
}
export class NextStatementNl  implements IASTNode {
  opComplexity = 259 // using getClassComplexity
  NodeType = 'NextStatementNl'
  // space_regexp = /^\n/
  space: string = ' \n ';
  statement?: Statement;
  next?: Next;
  precedence? : number
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.statement = value
  }
  getFirst() : any | null {
    return this.statement
  }
  setLast( value : any )  {
    this.next = value
  }
  getLast() : any | null {
    return this.next
  }
  create() : NextStatementNl  {
    return new NextStatementNl ()
  }
  constructor() {
    this.space = this.space.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='NextStatementNl') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : NextStatementNl | null {
    // console.log('Testing NextStatementNl at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'NextStatementNl'})
    const start = code.copy()
    if(typeof(this.space) === 'string') {
      start.removeSpace()
      if( !start.consume(this.space) ) return null
      start.removeSpace()
    }
    // WALK: statement
    if(!this.statement) {
      // Expect: FunctionExpression, Assing, ConstDeclaration, IfStatement, ReturnStatement, ClassDeclaration
      const walk = WalkNode(start, [new FunctionExpression(), new Assing(), new ConstDeclaration(), new IfStatement(), new ReturnStatement(), new ClassDeclaration()])
      if(walk) {
        this.statement = walk.node as Statement
        start.from( walk.code )
      } else {
      }
    }
    // WALK: next
    if(!this.next) {
      // Expect: NextStatement, NextStatementNl
      const walk = WalkNode(start, [new NextStatement(), new NextStatementNl()])
      if(walk) {
        this.next = walk.node as Next
        start.from( walk.code )
      } else {
      }
    }
    code.from( start )
    return this
  }
}
export class StatementBlock  implements IASTNode {
  opComplexity = 399 // using getClassComplexity
  NodeType = 'StatementBlock'
  start = ' { ';
  statement?: Statement;
  next?: Next;
  end = ' }';
  precedence? : number
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.statement = value
  }
  getFirst() : any | null {
    return this.statement
  }
  setLast( value : any )  {
    this.next = value
  }
  getLast() : any | null {
    return this.next
  }
  create() : StatementBlock  {
    return new StatementBlock ()
  }
  constructor() {
    this.start = this.start.trim()
    this.end = this.end.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='StatementBlock') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : StatementBlock | null {
    // console.log('Testing StatementBlock at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'StatementBlock'})
    const start = code.copy()
    if(typeof(this.start) === 'string') {
      start.removeSpace()
      if( !start.consume(this.start) ) return null
      start.removeSpace()
    }
    // WALK: statement
    if(!this.statement) {
      // Expect: FunctionExpression, Assing, ConstDeclaration, IfStatement, ReturnStatement, ClassDeclaration
      const walk = WalkNode(start, [new FunctionExpression(), new Assing(), new ConstDeclaration(), new IfStatement(), new ReturnStatement(), new ClassDeclaration()])
      if(walk) {
        this.statement = walk.node as Statement
        start.from( walk.code )
      } else {
      }
    }
    // WALK: next
    if(!this.next) {
      // Expect: NextStatement, NextStatementNl
      const walk = WalkNode(start, [new NextStatement(), new NextStatementNl()])
      if(walk) {
        this.next = walk.node as Next
        start.from( walk.code )
      } else {
      }
    }
    if(typeof(this.end) === 'string') {
      start.removeSpace()
      if( !start.consume(this.end) ) return null
    }
    code.from( start )
    return this
  }
}
export class StatementBlock2  implements IASTNode {
  opComplexity = 399 // using getClassComplexity
  NodeType = 'StatementBlock2'
  start = ' { ';
  statement?: Statement;
  next?: Next;
  end = ' } ';
  precedence? : number
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.statement = value
  }
  getFirst() : any | null {
    return this.statement
  }
  setLast( value : any )  {
    this.next = value
  }
  getLast() : any | null {
    return this.next
  }
  create() : StatementBlock2  {
    return new StatementBlock2 ()
  }
  constructor() {
    this.start = this.start.trim()
    this.end = this.end.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='StatementBlock2') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : StatementBlock2 | null {
    // console.log('Testing StatementBlock2 at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'StatementBlock2'})
    const start = code.copy()
    if(typeof(this.start) === 'string') {
      start.removeSpace()
      if( !start.consume(this.start) ) return null
      start.removeSpace()
    }
    // WALK: statement
    if(!this.statement) {
      // Expect: FunctionExpression, Assing, ConstDeclaration, IfStatement, ReturnStatement, ClassDeclaration
      const walk = WalkNode(start, [new FunctionExpression(), new Assing(), new ConstDeclaration(), new IfStatement(), new ReturnStatement(), new ClassDeclaration()])
      if(walk) {
        this.statement = walk.node as Statement
        start.from( walk.code )
      } else {
      }
    }
    // WALK: next
    if(!this.next) {
      // Expect: NextStatement, NextStatementNl
      const walk = WalkNode(start, [new NextStatement(), new NextStatementNl()])
      if(walk) {
        this.next = walk.node as Next
        start.from( walk.code )
      } else {
      }
    }
    if(typeof(this.end) === 'string') {
      start.removeSpace()
      if( !start.consume(this.end) ) return null
      start.removeSpace()
    }
    code.from( start )
    return this
  }
}
export class TrueLiteral  implements IASTNode {
  opComplexity = 111 // using getClassComplexity
  NodeType = 'TrueLiteral'
  tag = ' true';
  precedence? : number
  getFreeCount() : number {
    return  0
  }
  setFirst( value : any )  {
  }
  getFirst() : any | null {
    return null
  }
  setLast( value : any )  {
  }
  getLast() : any | null {
    return null
  }
  create() : TrueLiteral  {
    return new TrueLiteral ()
  }
  constructor() {
    this.tag = this.tag.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='TrueLiteral') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : TrueLiteral | null {
    // console.log('Testing TrueLiteral at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'TrueLiteral'})
    const start = code.copy()
    if(typeof(this.tag) === 'string') {
      start.removeSpace()
      if( !start.consume(this.tag) ) return null
    }
    code.from( start )
    return this
  }
}
export class FalseLiteral  implements IASTNode {
  opComplexity = 111 // using getClassComplexity
  NodeType = 'FalseLiteral'
  tag = ' false';
  precedence? : number
  getFreeCount() : number {
    return  0
  }
  setFirst( value : any )  {
  }
  getFirst() : any | null {
    return null
  }
  setLast( value : any )  {
  }
  getLast() : any | null {
    return null
  }
  create() : FalseLiteral  {
    return new FalseLiteral ()
  }
  constructor() {
    this.tag = this.tag.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='FalseLiteral') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : FalseLiteral | null {
    // console.log('Testing FalseLiteral at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'FalseLiteral'})
    const start = code.copy()
    if(typeof(this.tag) === 'string') {
      start.removeSpace()
      if( !start.consume(this.tag) ) return null
    }
    code.from( start )
    return this
  }
}
export class Token  implements IASTNode {
  opComplexity = 3 // using getClassComplexity
  NodeType = 'Token'
  name: string;
  questionmark? = '?';
  precedence? : number
  getFreeCount() : number {
    return  1
  }
  setFirst( value : any )  {
    this.name = value
  }
  getFirst() : any | null {
    return this.name
  }
  setLast( value : any )  {
    this.name = value
  }
  getLast() : any | null {
    return this.name
  }
  create() : Token  {
    return new Token ()
  }
  constructor() {
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='Token') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : Token | null {
    // console.log('Testing Token at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'Token'})
    const start = code.copy()
    // WALK: name
    // Expect Type: string
    this.name = start.consumeString()
    if(this.name.length === 0) return null
    if(typeof(this.questionmark) === 'string') {
      if(!start.consume(this.questionmark)) this.questionmark = '' 
    }
    code.from( start )
    return this
  }
}
export class TNumberToken  implements IASTNode {
  opComplexity = 2 // using getClassComplexity
  NodeType = 'TNumberToken'
  value_regexp = /^-?(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?/;
  value: string;
  precedence? : number
  getFreeCount() : number {
    return  1
  }
  setFirst( value : any )  {
    this.value = value
  }
  getFirst() : any | null {
    return this.value
  }
  setLast( value : any )  {
    this.value = value
  }
  getLast() : any | null {
    return this.value
  }
  create() : TNumberToken  {
    return new TNumberToken ()
  }
  constructor() {
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='TNumberToken') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : TNumberToken | null {
    // console.log('Testing TNumberToken at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'TNumberToken'})
    const start = code.copy()
    // WALK: value
    // Expect Type: string
    const m_value = start.str.substring(start.index).match(this.value_regexp)
    if(m_value && m_value.index === 0) {
      this.value = m_value[0]
      start.index += this.value.length
    } else {
      return null
    }
    code.from( start )
    return this
  }
}
export class StringLiteral  implements IASTNode {
  opComplexity = 122 // using getClassComplexity
  NodeType = 'StringLiteral'
  start = '"';
  value_regexp = /^(?:[^\\"]|\\(?:[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*/;
  value: string;
  end = '"';
  precedence? : number
  getFreeCount() : number {
    return  1
  }
  setFirst( value : any )  {
    this.value = value
  }
  getFirst() : any | null {
    return this.value
  }
  setLast( value : any )  {
    this.value = value
  }
  getLast() : any | null {
    return this.value
  }
  create() : StringLiteral  {
    return new StringLiteral ()
  }
  constructor() {
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='StringLiteral') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : StringLiteral | null {
    // console.log('Testing StringLiteral at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'StringLiteral'})
    const start = code.copy()
    if(typeof(this.start) === 'string') {
      if( !start.consume(this.start) ) return null
    }
    // WALK: value
    // Expect Type: string
    const m_value = start.str.substring(start.index).match(this.value_regexp)
    if(m_value && m_value.index === 0) {
      this.value = m_value[0]
      start.index += this.value.length
    } else {
      return null
    }
    if(typeof(this.end) === 'string') {
      if( !start.consume(this.end) ) return null
    }
    code.from( start )
    return this
  }
}
export class MemberAccessOperator  implements IASTNode {
  opComplexity = 19 // using getClassComplexity
  NodeType = 'MemberAccessOperator'
  spaceBefore? = ' ';
  left: Token;
  op = '.';
  right: Token;
  spaceAfter? = ' ';
  precedence = 19;
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.left = value
  }
  getFirst() : any | null {
    return this.left
  }
  setLast( value : any )  {
    this.right = value
  }
  getLast() : any | null {
    return this.right
  }
  create() : MemberAccessOperator  {
    return new MemberAccessOperator ()
  }
  constructor() {
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='MemberAccessOperator') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : MemberAccessOperator | null {
    // console.log('Testing MemberAccessOperator at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'MemberAccessOperator'})
    const start = code.copy()
    if(typeof(this.spaceBefore) === 'string') {
      if(!start.consume(this.spaceBefore)) this.spaceBefore = '' 
    }
    // WALK: left
    // Expect Type: Token
    if(!this.left) {
      const tmp_left = WalkNode(start, [new Token()])
      if(tmp_left) {
        this.left = tmp_left.node as Token
        start.from( tmp_left.code )
      } else {
        return null
      }
    }
    if(typeof(this.op) === 'string') {
      if( !start.consume(this.op) ) return null
    }
    // WALK: right
    // Expect Type: Token
    if(!this.right) {
      const tmp_right = WalkNode(start, [new Token()])
      if(tmp_right) {
        this.right = tmp_right.node as Token
        start.from( tmp_right.code )
      } else {
        return null
      }
    }
    if(typeof(this.spaceAfter) === 'string') {
      if(!start.consume(this.spaceAfter)) this.spaceAfter = '' 
    }
    code.from( start )
    return this
  }
}
export class PlusExpression  implements IASTNode {
  opComplexity = 16 // using getClassComplexity
  NodeType = 'PlusExpression'
  left: ExpressionType;
  op = ' + ';
  right: ExpressionType;
  precedence = 13;
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.left = value
  }
  getFirst() : any | null {
    return this.left
  }
  setLast( value : any )  {
    this.right = value
  }
  getLast() : any | null {
    return this.right
  }
  create() : PlusExpression  {
    return new PlusExpression ()
  }
  constructor() {
    this.op = this.op.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='PlusExpression') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : PlusExpression | null {
    // console.log('Testing PlusExpression at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'PlusExpression'})
    const start = code.copy()
    // WALK: left
    if(!this.left) {
      // Expect: Token, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, ArrowFunctionExpressionWithBlock, NewExpressionWithoutArgs, NewExpressionWithArgs, MemberAccessOperator, PlusExpression, MultiplyExpression, ParenExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator, ConditionalExpression, FnCallWithArgs, Assing, CallExpressionWithArgs, TrueLiteral, FalseLiteral
      const walk = WalkNode(start, [new Token(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new ArrowFunctionExpressionWithBlock(), new NewExpressionWithoutArgs(), new NewExpressionWithArgs(), new MemberAccessOperator(), new PlusExpression(), new MultiplyExpression(), new ParenExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator(), new ConditionalExpression(), new FnCallWithArgs(), new Assing(), new CallExpressionWithArgs(), new TrueLiteral(), new FalseLiteral()])
      if(walk) {
        this.left = walk.node as ExpressionType
        start.from( walk.code )
      } else {
        return null
      }
    }
    if(typeof(this.op) === 'string') {
      start.removeSpace()
      if( !start.consume(this.op) ) return null
      start.removeSpace()
    }
    // WALK: right
    if(!this.right) {
      // Expect: Token, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, ArrowFunctionExpressionWithBlock, NewExpressionWithoutArgs, NewExpressionWithArgs, MemberAccessOperator, PlusExpression, MultiplyExpression, ParenExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator, ConditionalExpression, FnCallWithArgs, Assing, CallExpressionWithArgs, TrueLiteral, FalseLiteral
      const walk = WalkNode(start, [new Token(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new ArrowFunctionExpressionWithBlock(), new NewExpressionWithoutArgs(), new NewExpressionWithArgs(), new MemberAccessOperator(), new PlusExpression(), new MultiplyExpression(), new ParenExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator(), new ConditionalExpression(), new FnCallWithArgs(), new Assing(), new CallExpressionWithArgs(), new TrueLiteral(), new FalseLiteral()])
      if(walk) {
        this.right = walk.node as ExpressionType
        start.from( walk.code )
      } else {
        return null
      }
    }
    code.from( start )
    return this
  }
}
export class MultiplyExpression  implements IASTNode {
  opComplexity = 15 // using getClassComplexity
  NodeType = 'MultiplyExpression'
  left: ExpressionType;
  op = ' * ';
  right: ExpressionType;
  precedence = 14;
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.left = value
  }
  getFirst() : any | null {
    return this.left
  }
  setLast( value : any )  {
    this.right = value
  }
  getLast() : any | null {
    return this.right
  }
  create() : MultiplyExpression  {
    return new MultiplyExpression ()
  }
  constructor() {
    this.op = this.op.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='MultiplyExpression') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : MultiplyExpression | null {
    // console.log('Testing MultiplyExpression at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'MultiplyExpression'})
    const start = code.copy()
    // WALK: left
    if(!this.left) {
      // Expect: Token, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, ArrowFunctionExpressionWithBlock, NewExpressionWithoutArgs, NewExpressionWithArgs, MemberAccessOperator, PlusExpression, MultiplyExpression, ParenExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator, ConditionalExpression, FnCallWithArgs, Assing, CallExpressionWithArgs, TrueLiteral, FalseLiteral
      const walk = WalkNode(start, [new Token(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new ArrowFunctionExpressionWithBlock(), new NewExpressionWithoutArgs(), new NewExpressionWithArgs(), new MemberAccessOperator(), new PlusExpression(), new MultiplyExpression(), new ParenExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator(), new ConditionalExpression(), new FnCallWithArgs(), new Assing(), new CallExpressionWithArgs(), new TrueLiteral(), new FalseLiteral()])
      if(walk) {
        this.left = walk.node as ExpressionType
        start.from( walk.code )
      } else {
        return null
      }
    }
    if(typeof(this.op) === 'string') {
      start.removeSpace()
      if( !start.consume(this.op) ) return null
      start.removeSpace()
    }
    // WALK: right
    if(!this.right) {
      // Expect: Token, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, ArrowFunctionExpressionWithBlock, NewExpressionWithoutArgs, NewExpressionWithArgs, MemberAccessOperator, PlusExpression, MultiplyExpression, ParenExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator, ConditionalExpression, FnCallWithArgs, Assing, CallExpressionWithArgs, TrueLiteral, FalseLiteral
      const walk = WalkNode(start, [new Token(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new ArrowFunctionExpressionWithBlock(), new NewExpressionWithoutArgs(), new NewExpressionWithArgs(), new MemberAccessOperator(), new PlusExpression(), new MultiplyExpression(), new ParenExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator(), new ConditionalExpression(), new FnCallWithArgs(), new Assing(), new CallExpressionWithArgs(), new TrueLiteral(), new FalseLiteral()])
      if(walk) {
        this.right = walk.node as ExpressionType
        start.from( walk.code )
      } else {
        return null
      }
    }
    code.from( start )
    return this
  }
}
export class ConditionalExpression  implements IASTNode {
  opComplexity = 15 // using getClassComplexity
  NodeType = 'ConditionalExpression'
  left: ExpressionType;
  op = ' < ';
  right: ExpressionType;
  precedence = 11;
  getFreeCount() : number {
    return  2
  }
  setFirst( value : any )  {
    this.left = value
  }
  getFirst() : any | null {
    return this.left
  }
  setLast( value : any )  {
    this.right = value
  }
  getLast() : any | null {
    return this.right
  }
  create() : ConditionalExpression  {
    return new ConditionalExpression ()
  }
  constructor() {
    this.op = this.op.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='ConditionalExpression') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : ConditionalExpression | null {
    // console.log('Testing ConditionalExpression at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'ConditionalExpression'})
    const start = code.copy()
    // WALK: left
    if(!this.left) {
      // Expect: Token, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, ArrowFunctionExpressionWithBlock, NewExpressionWithoutArgs, NewExpressionWithArgs, MemberAccessOperator, PlusExpression, MultiplyExpression, ParenExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator, ConditionalExpression, FnCallWithArgs, Assing, CallExpressionWithArgs, TrueLiteral, FalseLiteral
      const walk = WalkNode(start, [new Token(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new ArrowFunctionExpressionWithBlock(), new NewExpressionWithoutArgs(), new NewExpressionWithArgs(), new MemberAccessOperator(), new PlusExpression(), new MultiplyExpression(), new ParenExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator(), new ConditionalExpression(), new FnCallWithArgs(), new Assing(), new CallExpressionWithArgs(), new TrueLiteral(), new FalseLiteral()])
      if(walk) {
        this.left = walk.node as ExpressionType
        start.from( walk.code )
      } else {
        return null
      }
    }
    if(typeof(this.op) === 'string') {
      start.removeSpace()
      if( !start.consume(this.op) ) return null
      start.removeSpace()
    }
    // WALK: right
    if(!this.right) {
      // Expect: Token, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, ArrowFunctionExpressionWithBlock, NewExpressionWithoutArgs, NewExpressionWithArgs, MemberAccessOperator, PlusExpression, MultiplyExpression, ParenExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator, ConditionalExpression, FnCallWithArgs, Assing, CallExpressionWithArgs, TrueLiteral, FalseLiteral
      const walk = WalkNode(start, [new Token(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new ArrowFunctionExpressionWithBlock(), new NewExpressionWithoutArgs(), new NewExpressionWithArgs(), new MemberAccessOperator(), new PlusExpression(), new MultiplyExpression(), new ParenExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator(), new ConditionalExpression(), new FnCallWithArgs(), new Assing(), new CallExpressionWithArgs(), new TrueLiteral(), new FalseLiteral()])
      if(walk) {
        this.right = walk.node as ExpressionType
        start.from( walk.code )
      } else {
        return null
      }
    }
    code.from( start )
    return this
  }
}
export class ParenExpression  implements IASTNode {
  opComplexity = 123 // using getClassComplexity
  NodeType = 'ParenExpression'
  leftParen = ' ( ';
  expr: ExpressionType;
  rightParen = ' )';
  precedence? : number
  getFreeCount() : number {
    return  1
  }
  setFirst( value : any )  {
    this.expr = value
  }
  getFirst() : any | null {
    return this.expr
  }
  setLast( value : any )  {
    this.expr = value
  }
  getLast() : any | null {
    return this.expr
  }
  create() : ParenExpression  {
    return new ParenExpression ()
  }
  constructor() {
    this.leftParen = this.leftParen.trim()
    this.rightParen = this.rightParen.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='ParenExpression') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : ParenExpression | null {
    // console.log('Testing ParenExpression at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'ParenExpression'})
    const start = code.copy()
    if(typeof(this.leftParen) === 'string') {
      start.removeSpace()
      if( !start.consume(this.leftParen) ) return null
      start.removeSpace()
    }
    // WALK: expr
    if(!this.expr) {
      // Expect: Token, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, ArrowFunctionExpressionWithBlock, NewExpressionWithoutArgs, NewExpressionWithArgs, MemberAccessOperator, PlusExpression, MultiplyExpression, ParenExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator, ConditionalExpression, FnCallWithArgs, Assing, CallExpressionWithArgs, TrueLiteral, FalseLiteral
      const walk = WalkNode(start, [new Token(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new ArrowFunctionExpressionWithBlock(), new NewExpressionWithoutArgs(), new NewExpressionWithArgs(), new MemberAccessOperator(), new PlusExpression(), new MultiplyExpression(), new ParenExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator(), new ConditionalExpression(), new FnCallWithArgs(), new Assing(), new CallExpressionWithArgs(), new TrueLiteral(), new FalseLiteral()])
      if(walk) {
        this.expr = walk.node as ExpressionType
        start.from( walk.code )
      } else {
        return null
      }
    }
    if(typeof(this.rightParen) === 'string') {
      start.removeSpace()
      if( !start.consume(this.rightParen) ) return null
    }
    code.from( start )
    return this
  }
}
export class TernaryOperator  implements IASTNode {
  opComplexity = 27 // using getClassComplexity
  NodeType = 'TernaryOperator'
  condition: ExpressionType;
  start = ' ? ';
  whentrue?: ExpressionType;
  separator = ' : ';
  whenfalse?: ExpressionType;
  precedence = 4;
  getFreeCount() : number {
    return  3
  }
  setFirst( value : any )  {
    this.condition = value
  }
  getFirst() : any | null {
    return this.condition
  }
  setLast( value : any )  {
    this.whenfalse = value
  }
  getLast() : any | null {
    return this.whenfalse
  }
  create() : TernaryOperator  {
    return new TernaryOperator ()
  }
  constructor() {
    this.start = this.start.trim()
    this.separator = this.separator.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='TernaryOperator') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : TernaryOperator | null {
    // console.log('Testing TernaryOperator at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'TernaryOperator'})
    const start = code.copy()
    // WALK: condition
    if(!this.condition) {
      // Expect: Token, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, ArrowFunctionExpressionWithBlock, NewExpressionWithoutArgs, NewExpressionWithArgs, MemberAccessOperator, PlusExpression, MultiplyExpression, ParenExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator, ConditionalExpression, FnCallWithArgs, Assing, CallExpressionWithArgs, TrueLiteral, FalseLiteral
      const walk = WalkNode(start, [new Token(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new ArrowFunctionExpressionWithBlock(), new NewExpressionWithoutArgs(), new NewExpressionWithArgs(), new MemberAccessOperator(), new PlusExpression(), new MultiplyExpression(), new ParenExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator(), new ConditionalExpression(), new FnCallWithArgs(), new Assing(), new CallExpressionWithArgs(), new TrueLiteral(), new FalseLiteral()])
      if(walk) {
        this.condition = walk.node as ExpressionType
        start.from( walk.code )
      } else {
        return null
      }
    }
    if(typeof(this.start) === 'string') {
      start.removeSpace()
      if( !start.consume(this.start) ) return null
      start.removeSpace()
    }
    // WALK: whentrue
    if(!this.whentrue) {
      // Expect: Token, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, ArrowFunctionExpressionWithBlock, NewExpressionWithoutArgs, NewExpressionWithArgs, MemberAccessOperator, PlusExpression, MultiplyExpression, ParenExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator, ConditionalExpression, FnCallWithArgs, Assing, CallExpressionWithArgs, TrueLiteral, FalseLiteral
      const walk = WalkNode(start, [new Token(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new ArrowFunctionExpressionWithBlock(), new NewExpressionWithoutArgs(), new NewExpressionWithArgs(), new MemberAccessOperator(), new PlusExpression(), new MultiplyExpression(), new ParenExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator(), new ConditionalExpression(), new FnCallWithArgs(), new Assing(), new CallExpressionWithArgs(), new TrueLiteral(), new FalseLiteral()])
      if(walk) {
        this.whentrue = walk.node as ExpressionType
        start.from( walk.code )
      } else {
      }
    }
    if(typeof(this.separator) === 'string') {
      start.removeSpace()
      if( !start.consume(this.separator) ) return null
      start.removeSpace()
    }
    // WALK: whenfalse
    if(!this.whenfalse) {
      // Expect: Token, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, ArrowFunctionExpressionWithBlock, NewExpressionWithoutArgs, NewExpressionWithArgs, MemberAccessOperator, PlusExpression, MultiplyExpression, ParenExpression, ObjectLiteral, ArrayLiteral, FunctionExpression, TernaryOperator, ConditionalExpression, FnCallWithArgs, Assing, CallExpressionWithArgs, TrueLiteral, FalseLiteral
      const walk = WalkNode(start, [new Token(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new ArrowFunctionExpressionWithBlock(), new NewExpressionWithoutArgs(), new NewExpressionWithArgs(), new MemberAccessOperator(), new PlusExpression(), new MultiplyExpression(), new ParenExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression(), new TernaryOperator(), new ConditionalExpression(), new FnCallWithArgs(), new Assing(), new CallExpressionWithArgs(), new TrueLiteral(), new FalseLiteral()])
      if(walk) {
        this.whenfalse = walk.node as ExpressionType
        start.from( walk.code )
      } else {
      }
    }
    code.from( start )
    return this
  }
}
export class Root  implements IASTNode {
  opComplexity = 19 // using getClassComplexity
  NodeType = 'Root'
  statement?: Statement;
  precedence? : number
  getFreeCount() : number {
    return  1
  }
  setFirst( value : any )  {
    this.statement = value
  }
  getFirst() : any | null {
    return this.statement
  }
  setLast( value : any )  {
    this.statement = value
  }
  getLast() : any | null {
    return this.statement
  }
  create() : Root  {
    return new Root ()
  }
  constructor() {
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='Root') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : Root | null {
    // console.log('Testing Root at ' +code.str.substring(code.index, code.index + 20), code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'Root'})
    const start = code.copy()
    // WALK: statement
    if(!this.statement) {
      // Expect: FunctionExpression, Assing, ConstDeclaration, IfStatement, ReturnStatement, ClassDeclaration
      const walk = WalkNode(start, [new FunctionExpression(), new Assing(), new ConstDeclaration(), new IfStatement(), new ReturnStatement(), new ClassDeclaration()])
      if(walk) {
        this.statement = walk.node as Statement
        start.from( walk.code )
      } else {
      }
    }
    code.from( start )
    return this
  }
}
const keywords:{[key:string]:boolean} = {
  [' | '.trim()] : true,
  [' = '.trim()] : true,
  ['async'.trim()] : true,
  [' => '.trim()] : true,
  [' extends '.trim()] : true,
  [' : '.trim()] : true,
  [' , '.trim()] : true,
  [' < '.trim()] : true,
  [' > '.trim()] : true,
  [' ( '.trim()] : true,
  [' )'.trim()] : true,
  [' new '.trim()] : true,
  [' { '.trim()] : true,
  [' } '.trim()] : true,
  [' class '.trim()] : true,
  [' function '.trim()] : true,
  [' async '.trim()] : true,
  ['{'.trim()] : true,
  [' '.trim()] : true,
  ['}'.trim()] : true,
  [':'.trim()] : true,
  [','.trim()] : true,
  ['['.trim()] : true,
  [']'.trim()] : true,
  [' const '.trim()] : true,
  [' return '.trim()] : true,
  [' else '.trim()] : true,
  [' if '.trim()] : true,
  [' ) '.trim()] : true,
  [' ; '.trim()] : true,
  [' \n '.trim()] : true,
  [' }'.trim()] : true,
  [' true'.trim()] : true,
  [' false'.trim()] : true,
  ['?'.trim()] : true,
  ['"'.trim()] : true,
  ['.'.trim()] : true,
  [' + '.trim()] : true,
  [' * '.trim()] : true,
  [' ? '.trim()] : true,
}
const initialList:IASTNode[] = [
  new TypeDefinitionUnion(),
  new SimpleTypeDefinition(),
  new Assing(),
  new ArrowFnType(),
  new ExtendsKeyword(),
  new TypeDefinition(),
  new NextGenericsDefinition(),
  new GenericsDefinition(),
  new Generics(),
  new ParamInitializer(),
  new ParameterListItemTail(),
  new ParameterList(),
  new CallParameterListTail(),
  new CallParameterList(),
  new NewExpressionWithArgs(),
  new ClassMethodDeclaration(),
  new ClassPropertyDeclaration(),
  new ClassBodyStatement(),
  new ClassBody(),
  new ClassDeclaration(),
  new CallExpressionWithArgs(),
  new FnCallWithArgs(),
  new NewExpressionWithoutArgs(),
  new FunctionExpression(),
  new SimpleArrowFunctionExpression(),
  new ArrowFunctionExpressionWithBlock(),
  new ArrowFunctionExpression(),
  new ObjectLiteral(),
  new ObjectLiteralEntry(),
  new ObjectLiteralTail(),
  new ArrayLiteral(),
  new ArrayLiteralTail(),
  new ConstDeclaration(),
  new ReturnStatement(),
  new ElseBlock(),
  new IfStatement(),
  new NextStatement(),
  new NextStatementNl(),
  new StatementBlock(),
  new StatementBlock2(),
  new TrueLiteral(),
  new FalseLiteral(),
  new Token(),
  new TNumberToken(),
  new StringLiteral(),
  new MemberAccessOperator(),
  new PlusExpression(),
  new MultiplyExpression(),
  new ConditionalExpression(),
  new ParenExpression(),
  new TernaryOperator(),
  new Root(),
]

let currDepth = 0
export function WalkNode(orig:CodeToConsume, opInList:IASTNode[] = [new Root()]) : ParsedContext | null {
  if(currDepth++ > 100) {
    throw 'Max depth'
  }
  if( orig.index >= orig.str.length) {
    return null
  }
  const opList = opInList.sort( (left, right) => {
    return right.opComplexity - left.opComplexity
  })
  // console.log('pos', orig.index, orig.str.length, orig.str.substring( orig.index ))
  const cc = orig.copy()
  let activeOp:IASTNode = null
  let cnt = 0
  let lastCnt = -1
  
  while( cnt !== lastCnt ) {
    lastCnt = cnt
    for( let op of opList ) {
      const opInstance = op.create()
      if(activeOp === null) {
        const test = opInstance.consume( cc )
        if( test ) {
          activeOp = test
          cnt++
          break
        }
      } else {
        if( opInstance.getFreeCount() > 1 && (opInstance.precedence) && activeOp.precedence) {
          if( opInstance && (opInstance.precedence > activeOp.precedence )) {
            opInstance.setFirst( activeOp.getLast() )
            const mRes = opInstance.consume( cc )
            if(mRes) {
              activeOp.setLast( mRes )
              cnt++
              break
            }  
          } else {
            opInstance.setFirst( activeOp )
            const mRes = opInstance.consume( cc )
            if(mRes) {
              activeOp = opInstance
              cnt++
              break
            }      
          }        
        }
      }
    }
  }
  currDepth--
  if(activeOp === null) return null
  return {
    code: cc,
    node: activeOp
  }
}      
          
