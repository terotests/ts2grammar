/******************************************
*                                         *
* AST Parsers, Automatically Generated    *
*                                         *
******************************************/

/**
 * @generated true
 */ 
export class CodeToConsume {
  str:string
  index:number
  copy() : CodeToConsume {
    const o = new CodeToConsume()
    o.str = this.str
    o.index = this.index
    return o
  }
  from( cc: CodeToConsume) : CodeToConsume {
    this.str = cc.str
    this.index = cc.index
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
  precedence? : number
  // MetaData?: IParserMeta
  create() : IASTNode
  setFirst(value:any)
  getFirst() : IASTNode | null
  setLast(value:any)
  getLast() : IASTNode | null
  getFreeCount() : number
  consume(code:CodeToConsume) : IASTNode | null
}    
    
// Type : BinaryExpressionPart
// UNION: - Token | ParenExpression | TNumber | MemberAccessOperator
// Type --> Token
// Type --> ParenExpression
// Type --> TNumber
// Type --> MemberAccessOperator
export type BinaryExpressionPart = Token | ParenExpression | TNumber | MemberAccessOperator;
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
// UNION: - SimpleArrowFunctionExpression | ArrowFunctionExpression | NewExpressionWithArgs | NewExpressionWithoutArgs | MemberAccessOperator | PlusExpression | MultiplyExpression | ParenExpression | Token | NTypes | ObjectLiteral | ArrayLiteral | FunctionExpression
// Type --> Token
// Type --> ParenExpression
// Type --> MemberAccessOperator
// Type --> TNumberToken
// Type --> StringLiteral
// Type --> SimpleArrowFunctionExpression
// Type --> ArrowFunctionExpression
// Type --> NewExpressionWithArgs
// Type --> NewExpressionWithoutArgs
// Type --> PlusExpression
// Type --> MultiplyExpression
// Type --> ObjectLiteral
// Type --> ArrayLiteral
// Type --> FunctionExpression
export type ExpressionType = SimpleArrowFunctionExpression | ArrowFunctionExpression | NewExpressionWithArgs | NewExpressionWithoutArgs | MemberAccessOperator | PlusExpression | MultiplyExpression | ParenExpression | Token | NTypes | ObjectLiteral | ArrayLiteral | FunctionExpression;
export class TypeDefinition  implements IASTNode {
  NodeType = 'TypeDefinition'
  spaceBefore? = ' ';
  start = ':';
  spaceAfter? = ' ';
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
  create() : TypeDefinition  {
    return new TypeDefinition ()
  }
  consume(code:CodeToConsume) : TypeDefinition | null {
    const start = code.copy()
    if(typeof(this.spaceBefore) === 'string') {
      if(!start.consume(this.spaceBefore)) this.spaceBefore = '' 
    }
    if(typeof(this.start) === 'string') {
      if( !start.consume(this.start) ) return null
    }
    if(typeof(this.spaceAfter) === 'string') {
      if(!start.consume(this.spaceAfter)) this.spaceAfter = '' 
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
    code.from( start )
    return this
  }
}
export class ParamInitializer  implements IASTNode {
  NodeType = 'ParamInitializer'
  spaceBefore? = ' ';
  start = '=';
  spaceAfter? = ' ';
  value: ExpressionType;
  precedence = 3;
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
  consume(code:CodeToConsume) : ParamInitializer | null {
    const start = code.copy()
    if(typeof(this.spaceBefore) === 'string') {
      if(!start.consume(this.spaceBefore)) this.spaceBefore = '' 
    }
    if(typeof(this.start) === 'string') {
      if( !start.consume(this.start) ) return null
    }
    if(typeof(this.spaceAfter) === 'string') {
      if(!start.consume(this.spaceAfter)) this.spaceAfter = '' 
    }
    // WALK: value
    if(!this.value) {
      // Expect: Token, ParenExpression, MemberAccessOperator, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, NewExpressionWithArgs, NewExpressionWithoutArgs, PlusExpression, MultiplyExpression, ObjectLiteral, ArrayLiteral, FunctionExpression
      const walk = WalkNode(start, [new Token(), new ParenExpression(), new MemberAccessOperator(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new NewExpressionWithArgs(), new NewExpressionWithoutArgs(), new PlusExpression(), new MultiplyExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression()])
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
  NodeType = 'ParameterListItemTail'
  start = ',';
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
  consume(code:CodeToConsume) : ParameterListItemTail | null {
    const start = code.copy()
    if(typeof(this.start) === 'string') {
      if( !start.consume(this.start) ) return null
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
  NodeType = 'ParameterList'
  spaceBefore? = ' ';
  start = '(';
  head?: Token;
  typedef?: TypeDefinition;
  initializer?: ParamInitializer;
  tail?: ParameterListItemTail;
  end = ')';
  spaceAfter? = ' ';
  precedence = 20;
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
  consume(code:CodeToConsume) : ParameterList | null {
    const start = code.copy()
    if(typeof(this.spaceBefore) === 'string') {
      if(!start.consume(this.spaceBefore)) this.spaceBefore = '' 
    }
    if(typeof(this.start) === 'string') {
      if( !start.consume(this.start) ) return null
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
      if( !start.consume(this.end) ) return null
    }
    if(typeof(this.spaceAfter) === 'string') {
      if(!start.consume(this.spaceAfter)) this.spaceAfter = '' 
    }
    code.from( start )
    return this
  }
}
export class CallParameterListTail  implements IASTNode {
  NodeType = 'CallParameterListTail'
  start = ',';
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
  consume(code:CodeToConsume) : CallParameterListTail | null {
    const start = code.copy()
    if(typeof(this.start) === 'string') {
      if( !start.consume(this.start) ) return null
    }
    // WALK: head
    if(!this.head) {
      // Expect: Token, ParenExpression, MemberAccessOperator, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, NewExpressionWithArgs, NewExpressionWithoutArgs, PlusExpression, MultiplyExpression, ObjectLiteral, ArrayLiteral, FunctionExpression
      const walk = WalkNode(start, [new Token(), new ParenExpression(), new MemberAccessOperator(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new NewExpressionWithArgs(), new NewExpressionWithoutArgs(), new PlusExpression(), new MultiplyExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression()])
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
  NodeType = 'CallParameterList'
  start = '(';
  head?: ExpressionType;
  tail?: CallParameterListTail;
  end = ')';
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
  consume(code:CodeToConsume) : CallParameterList | null {
    const start = code.copy()
    if(typeof(this.start) === 'string') {
      if( !start.consume(this.start) ) return null
    }
    // WALK: head
    if(!this.head) {
      // Expect: Token, ParenExpression, MemberAccessOperator, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, NewExpressionWithArgs, NewExpressionWithoutArgs, PlusExpression, MultiplyExpression, ObjectLiteral, ArrayLiteral, FunctionExpression
      const walk = WalkNode(start, [new Token(), new ParenExpression(), new MemberAccessOperator(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new NewExpressionWithArgs(), new NewExpressionWithoutArgs(), new PlusExpression(), new MultiplyExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression()])
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
      if( !start.consume(this.end) ) return null
    }
    code.from( start )
    return this
  }
}
export class NewExpressionWithArgs  implements IASTNode {
  NodeType = 'NewExpressionWithArgs'
  spaceBeforeNew? = ' ';
  start = 'new';
  spaceBefore? = ' ';
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
  consume(code:CodeToConsume) : NewExpressionWithArgs | null {
    const start = code.copy()
    if(typeof(this.spaceBeforeNew) === 'string') {
      if(!start.consume(this.spaceBeforeNew)) this.spaceBeforeNew = '' 
    }
    if(typeof(this.start) === 'string') {
      if( !start.consume(this.start) ) return null
    }
    if(typeof(this.spaceBefore) === 'string') {
      if(!start.consume(this.spaceBefore)) this.spaceBefore = '' 
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
export class NewExpressionWithoutArgs  implements IASTNode {
  NodeType = 'NewExpressionWithoutArgs'
  spaceBeforeNew? = ' ';
  start = 'new';
  spaceBefore? = ' ';
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
  consume(code:CodeToConsume) : NewExpressionWithoutArgs | null {
    const start = code.copy()
    if(typeof(this.spaceBeforeNew) === 'string') {
      if(!start.consume(this.spaceBeforeNew)) this.spaceBeforeNew = '' 
    }
    if(typeof(this.start) === 'string') {
      if( !start.consume(this.start) ) return null
    }
    if(typeof(this.spaceBefore) === 'string') {
      if(!start.consume(this.spaceBefore)) this.spaceBefore = '' 
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
  NodeType = 'FunctionExpression'
  start = 'function';
  name: Token;
  params: ParameterList;
  startBlock = '{';
  endBlock = '}';
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
    this.params = value
  }
  getLast() : any | null {
    return this.params
  }
  create() : FunctionExpression  {
    return new FunctionExpression ()
  }
  consume(code:CodeToConsume) : FunctionExpression | null {
    const start = code.copy()
    if(typeof(this.start) === 'string') {
      if( !start.consume(this.start) ) return null
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
    if(typeof(this.startBlock) === 'string') {
      if( !start.consume(this.startBlock) ) return null
    }
    if(typeof(this.endBlock) === 'string') {
      if( !start.consume(this.endBlock) ) return null
    }
    code.from( start )
    return this
  }
}
export class SimpleArrowFunctionExpression  implements IASTNode {
  NodeType = 'SimpleArrowFunctionExpression'
  param: Token;
  spaceBefore? = ' ';
  arrow = '=>';
  spaceAfter? = ' ';
  expression: ExpressionType;
  spaceAfter2? = ' ';
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
  consume(code:CodeToConsume) : SimpleArrowFunctionExpression | null {
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
    if(typeof(this.spaceBefore) === 'string') {
      if(!start.consume(this.spaceBefore)) this.spaceBefore = '' 
    }
    if(typeof(this.arrow) === 'string') {
      if( !start.consume(this.arrow) ) return null
    }
    if(typeof(this.spaceAfter) === 'string') {
      if(!start.consume(this.spaceAfter)) this.spaceAfter = '' 
    }
    // WALK: expression
    if(!this.expression) {
      // Expect: Token, ParenExpression, MemberAccessOperator, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, NewExpressionWithArgs, NewExpressionWithoutArgs, PlusExpression, MultiplyExpression, ObjectLiteral, ArrayLiteral, FunctionExpression
      const walk = WalkNode(start, [new Token(), new ParenExpression(), new MemberAccessOperator(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new NewExpressionWithArgs(), new NewExpressionWithoutArgs(), new PlusExpression(), new MultiplyExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression()])
      if(walk) {
        this.expression = walk.node as ExpressionType
        start.from( walk.code )
      } else {
        return null
      }
    }
    if(typeof(this.spaceAfter2) === 'string') {
      if(!start.consume(this.spaceAfter2)) this.spaceAfter2 = '' 
    }
    code.from( start )
    return this
  }
}
export class ArrowFunctionExpression  implements IASTNode {
  NodeType = 'ArrowFunctionExpression'
  async? = 'async';
  params: ParameterList;
  spaceBefore? = ' ';
  arrow = '=>';
  spaceAfter? = ' ';
  expression: ExpressionType;
  spaceAfter2? = ' ';
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
    this.expression = value
  }
  getLast() : any | null {
    return this.expression
  }
  create() : ArrowFunctionExpression  {
    return new ArrowFunctionExpression ()
  }
  consume(code:CodeToConsume) : ArrowFunctionExpression | null {
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
    if(typeof(this.spaceBefore) === 'string') {
      if(!start.consume(this.spaceBefore)) this.spaceBefore = '' 
    }
    if(typeof(this.arrow) === 'string') {
      if( !start.consume(this.arrow) ) return null
    }
    if(typeof(this.spaceAfter) === 'string') {
      if(!start.consume(this.spaceAfter)) this.spaceAfter = '' 
    }
    // WALK: expression
    if(!this.expression) {
      // Expect: Token, ParenExpression, MemberAccessOperator, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, NewExpressionWithArgs, NewExpressionWithoutArgs, PlusExpression, MultiplyExpression, ObjectLiteral, ArrayLiteral, FunctionExpression
      const walk = WalkNode(start, [new Token(), new ParenExpression(), new MemberAccessOperator(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new NewExpressionWithArgs(), new NewExpressionWithoutArgs(), new PlusExpression(), new MultiplyExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression()])
      if(walk) {
        this.expression = walk.node as ExpressionType
        start.from( walk.code )
      } else {
        return null
      }
    }
    if(typeof(this.spaceAfter2) === 'string') {
      if(!start.consume(this.spaceAfter2)) this.spaceAfter2 = '' 
    }
    code.from( start )
    return this
  }
}
export class ObjectLiteral  implements IASTNode {
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
  consume(code:CodeToConsume) : ObjectLiteral | null {
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
  consume(code:CodeToConsume) : ObjectLiteralEntry | null {
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
      // Expect: Token, ParenExpression, MemberAccessOperator, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, NewExpressionWithArgs, NewExpressionWithoutArgs, PlusExpression, MultiplyExpression, ObjectLiteral, ArrayLiteral, FunctionExpression
      const walk = WalkNode(start, [new Token(), new ParenExpression(), new MemberAccessOperator(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new NewExpressionWithArgs(), new NewExpressionWithoutArgs(), new PlusExpression(), new MultiplyExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression()])
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
  consume(code:CodeToConsume) : ObjectLiteralTail | null {
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
export class ArrayLiteralEntry  implements IASTNode {
  NodeType = 'ArrayLiteralEntry'
  spaceFill? = ' ';
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
  create() : ArrayLiteralEntry  {
    return new ArrayLiteralEntry ()
  }
  consume(code:CodeToConsume) : ArrayLiteralEntry | null {
    const start = code.copy()
    if(typeof(this.spaceFill) === 'string') {
      if(!start.consume(this.spaceFill)) this.spaceFill = '' 
    }
    // WALK: value
    if(!this.value) {
      // Expect: Token, ParenExpression, MemberAccessOperator, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, NewExpressionWithArgs, NewExpressionWithoutArgs, PlusExpression, MultiplyExpression, ObjectLiteral, ArrayLiteral, FunctionExpression
      const walk = WalkNode(start, [new Token(), new ParenExpression(), new MemberAccessOperator(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new NewExpressionWithArgs(), new NewExpressionWithoutArgs(), new PlusExpression(), new MultiplyExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression()])
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
export class ArrayLiteralTail  implements IASTNode {
  NodeType = 'ArrayLiteralTail'
  spaceFill? = ' ';
  start = ',';
  head: ArrayLiteralEntry;
  tail?: ArrayLiteralTail;
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
  create() : ArrayLiteralTail  {
    return new ArrayLiteralTail ()
  }
  consume(code:CodeToConsume) : ArrayLiteralTail | null {
    const start = code.copy()
    if(typeof(this.spaceFill) === 'string') {
      if(!start.consume(this.spaceFill)) this.spaceFill = '' 
    }
    if(typeof(this.start) === 'string') {
      if( !start.consume(this.start) ) return null
    }
    // WALK: head
    // Expect Type: ArrayLiteralEntry
    if(!this.head) {
      const tmp_head = WalkNode(start, [new ArrayLiteralEntry()])
      if(tmp_head) {
        this.head = tmp_head.node as ArrayLiteralEntry
        start.from( tmp_head.code )
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
export class ArrayLiteral  implements IASTNode {
  NodeType = 'ArrayLiteral'
  begin = '[';
  head?: ArrayLiteralEntry;
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
  consume(code:CodeToConsume) : ArrayLiteral | null {
    const start = code.copy()
    if(typeof(this.begin) === 'string') {
      if( !start.consume(this.begin) ) return null
    }
    // WALK: head
    // Expect Type: ArrayLiteralEntry
    if(!this.head) {
      const tmp_head = WalkNode(start, [new ArrayLiteralEntry()])
      if(tmp_head) {
        this.head = tmp_head.node as ArrayLiteralEntry
        start.from( tmp_head.code )
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
export class ConstDeclaration  implements IASTNode {
  NodeType = 'ConstDeclaration'
  constKeyword = 'const';
  spaceBefore? = ' ';
  name: Token;
  typedef?: TypeDefinition;
  spaceAfter? = ' ';
  assignOp = '=';
  spaceBeforeExpr? = ' ';
  value: ExpressionType;
  statementEnd? = ';';
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
  consume(code:CodeToConsume) : ConstDeclaration | null {
    const start = code.copy()
    if(typeof(this.constKeyword) === 'string') {
      if( !start.consume(this.constKeyword) ) return null
    }
    if(typeof(this.spaceBefore) === 'string') {
      if(!start.consume(this.spaceBefore)) this.spaceBefore = '' 
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
    if(typeof(this.spaceAfter) === 'string') {
      if(!start.consume(this.spaceAfter)) this.spaceAfter = '' 
    }
    if(typeof(this.assignOp) === 'string') {
      if( !start.consume(this.assignOp) ) return null
    }
    if(typeof(this.spaceBeforeExpr) === 'string') {
      if(!start.consume(this.spaceBeforeExpr)) this.spaceBeforeExpr = '' 
    }
    // WALK: value
    if(!this.value) {
      // Expect: Token, ParenExpression, MemberAccessOperator, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, NewExpressionWithArgs, NewExpressionWithoutArgs, PlusExpression, MultiplyExpression, ObjectLiteral, ArrayLiteral, FunctionExpression
      const walk = WalkNode(start, [new Token(), new ParenExpression(), new MemberAccessOperator(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new NewExpressionWithArgs(), new NewExpressionWithoutArgs(), new PlusExpression(), new MultiplyExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression()])
      if(walk) {
        this.value = walk.node as ExpressionType
        start.from( walk.code )
      } else {
        return null
      }
    }
    if(typeof(this.statementEnd) === 'string') {
      if(!start.consume(this.statementEnd)) this.statementEnd = '' 
    }
    code.from( start )
    return this
  }
}
export class TNumber  implements IASTNode {
  NodeType = 'TNumber'
  spaceBefore? = ' ';
  value: number;
  spaceAfter? = ' ';
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
  create() : TNumber  {
    return new TNumber ()
  }
  consume(code:CodeToConsume) : TNumber | null {
    const start = code.copy()
    if(typeof(this.spaceBefore) === 'string') {
      if(!start.consume(this.spaceBefore)) this.spaceBefore = '' 
    }
    // WALK: value
    // Expect Type: number
    const tmp_value = start.consumeNumber()
    if(tmp_value.length === 0) return null
    this.value = parseInt(tmp_value)
    if(typeof(this.spaceAfter) === 'string') {
      if(!start.consume(this.spaceAfter)) this.spaceAfter = '' 
    }
    code.from( start )
    return this
  }
}
export class Token  implements IASTNode {
  NodeType = 'Token'
  spaceBefore? = ' ';
  name: string;
  spaceAfter? = ' ';
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
  consume(code:CodeToConsume) : Token | null {
    const start = code.copy()
    if(typeof(this.spaceBefore) === 'string') {
      if(!start.consume(this.spaceBefore)) this.spaceBefore = '' 
    }
    // WALK: name
    // Expect Type: string
    this.name = start.consumeString()
    if(this.name.length === 0) return null
    if(typeof(this.spaceAfter) === 'string') {
      if(!start.consume(this.spaceAfter)) this.spaceAfter = '' 
    }
    code.from( start )
    return this
  }
}
export class TNumberToken  implements IASTNode {
  NodeType = 'TNumberToken'
  prefix? = '-';
  value: number;
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
  consume(code:CodeToConsume) : TNumberToken | null {
    const start = code.copy()
    if(typeof(this.prefix) === 'string') {
      if(!start.consume(this.prefix)) this.prefix = '' 
    }
    // WALK: value
    // Expect Type: number
    const tmp_value = start.consumeNumber()
    if(tmp_value.length === 0) return null
    this.value = parseInt(tmp_value)
    code.from( start )
    return this
  }
}
export class StringLiteral  implements IASTNode {
  NodeType = 'StringLiteral'
  start = '"';
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
  consume(code:CodeToConsume) : StringLiteral | null {
    const start = code.copy()
    if(typeof(this.start) === 'string') {
      if( !start.consume(this.start) ) return null
    }
    // WALK: value
    // Expect Type: string
    this.value = start.consumeString()
    if(this.value.length === 0) return null
    if(typeof(this.end) === 'string') {
      if( !start.consume(this.end) ) return null
    }
    code.from( start )
    return this
  }
}
export class MemberAccessOperator  implements IASTNode {
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
  consume(code:CodeToConsume) : MemberAccessOperator | null {
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
  NodeType = 'PlusExpression'
  left: BinaryExpressionPart;
  spaceBefore? = ' ';
  op = '+';
  spaceAfter? = ' ';
  right: BinaryExpressionPart;
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
  consume(code:CodeToConsume) : PlusExpression | null {
    const start = code.copy()
    // WALK: left
    if(!this.left) {
      // Expect: Token, ParenExpression, TNumber, MemberAccessOperator
      const walk = WalkNode(start, [new Token(), new ParenExpression(), new TNumber(), new MemberAccessOperator()])
      if(walk) {
        this.left = walk.node as BinaryExpressionPart
        start.from( walk.code )
      } else {
        return null
      }
    }
    if(typeof(this.spaceBefore) === 'string') {
      if(!start.consume(this.spaceBefore)) this.spaceBefore = '' 
    }
    if(typeof(this.op) === 'string') {
      if( !start.consume(this.op) ) return null
    }
    if(typeof(this.spaceAfter) === 'string') {
      if(!start.consume(this.spaceAfter)) this.spaceAfter = '' 
    }
    // WALK: right
    if(!this.right) {
      // Expect: Token, ParenExpression, TNumber, MemberAccessOperator
      const walk = WalkNode(start, [new Token(), new ParenExpression(), new TNumber(), new MemberAccessOperator()])
      if(walk) {
        this.right = walk.node as BinaryExpressionPart
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
  NodeType = 'MultiplyExpression'
  left: BinaryExpressionPart;
  spaceBefore? = ' ';
  op = '*';
  spaceAfter? = ' ';
  right: BinaryExpressionPart;
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
  consume(code:CodeToConsume) : MultiplyExpression | null {
    const start = code.copy()
    // WALK: left
    if(!this.left) {
      // Expect: Token, ParenExpression, TNumber, MemberAccessOperator
      const walk = WalkNode(start, [new Token(), new ParenExpression(), new TNumber(), new MemberAccessOperator()])
      if(walk) {
        this.left = walk.node as BinaryExpressionPart
        start.from( walk.code )
      } else {
        return null
      }
    }
    if(typeof(this.spaceBefore) === 'string') {
      if(!start.consume(this.spaceBefore)) this.spaceBefore = '' 
    }
    if(typeof(this.op) === 'string') {
      if( !start.consume(this.op) ) return null
    }
    if(typeof(this.spaceAfter) === 'string') {
      if(!start.consume(this.spaceAfter)) this.spaceAfter = '' 
    }
    // WALK: right
    if(!this.right) {
      // Expect: Token, ParenExpression, TNumber, MemberAccessOperator
      const walk = WalkNode(start, [new Token(), new ParenExpression(), new TNumber(), new MemberAccessOperator()])
      if(walk) {
        this.right = walk.node as BinaryExpressionPart
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
  NodeType = 'ParenExpression'
  leftParen = '(';
  expr: ExpressionType;
  rightParen = ')';
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
  consume(code:CodeToConsume) : ParenExpression | null {
    const start = code.copy()
    if(typeof(this.leftParen) === 'string') {
      if( !start.consume(this.leftParen) ) return null
    }
    // WALK: expr
    if(!this.expr) {
      // Expect: Token, ParenExpression, MemberAccessOperator, TNumberToken, StringLiteral, SimpleArrowFunctionExpression, ArrowFunctionExpression, NewExpressionWithArgs, NewExpressionWithoutArgs, PlusExpression, MultiplyExpression, ObjectLiteral, ArrayLiteral, FunctionExpression
      const walk = WalkNode(start, [new Token(), new ParenExpression(), new MemberAccessOperator(), new TNumberToken(), new StringLiteral(), new SimpleArrowFunctionExpression(), new ArrowFunctionExpression(), new NewExpressionWithArgs(), new NewExpressionWithoutArgs(), new PlusExpression(), new MultiplyExpression(), new ObjectLiteral(), new ArrayLiteral(), new FunctionExpression()])
      if(walk) {
        this.expr = walk.node as ExpressionType
        start.from( walk.code )
      } else {
        return null
      }
    }
    if(typeof(this.rightParen) === 'string') {
      if( !start.consume(this.rightParen) ) return null
    }
    code.from( start )
    return this
  }
}
const keywords:{[key:string]:boolean} = {
  ' ' : true,
  ':' : true,
  '=' : true,
  ',' : true,
  '(' : true,
  ')' : true,
  'new' : true,
  'function' : true,
  '{' : true,
  '}' : true,
  '=>' : true,
  'async' : true,
  '[' : true,
  ']' : true,
  'const' : true,
  ';' : true,
  '-' : true,
  '"' : true,
  '.' : true,
  '+' : true,
  '*' : true,
}
const initialList:IASTNode[] = [
  new TypeDefinition(),
  new ParamInitializer(),
  new ParameterListItemTail(),
  new ParameterList(),
  new CallParameterListTail(),
  new CallParameterList(),
  new NewExpressionWithArgs(),
  new NewExpressionWithoutArgs(),
  new FunctionExpression(),
  new SimpleArrowFunctionExpression(),
  new ArrowFunctionExpression(),
  new ObjectLiteral(),
  new ObjectLiteralEntry(),
  new ObjectLiteralTail(),
  new ArrayLiteralEntry(),
  new ArrayLiteralTail(),
  new ArrayLiteral(),
  new ConstDeclaration(),
  new TNumber(),
  new Token(),
  new TNumberToken(),
  new StringLiteral(),
  new MemberAccessOperator(),
  new PlusExpression(),
  new MultiplyExpression(),
  new ParenExpression(),
]

export function WalkNode(orig:CodeToConsume, opList:IASTNode[] = initialList) : ParsedContext | null {

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
        if( opInstance.getFreeCount() < 2) {
          continue
        }
        if( opInstance.getFreeCount() > 1) {
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
  if(activeOp === null) return null
  return {
    code: cc,
    node: activeOp
  }
}      
          
