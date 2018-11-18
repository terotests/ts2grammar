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
    
// Type : ExpressionType
// UNION: - Token | Number | ObjectLiteral | ArrayLiteral | TrueLiteral | FalseLiteral | StringLiteral | NullLiteral
// Type --> Token
// Type --> Number
// Type --> ObjectLiteral
// Type --> ArrayLiteral
// Type --> TrueLiteral
// Type --> FalseLiteral
// Type --> StringLiteral
// Type --> NullLiteral
export type ExpressionType = Token | Number | ObjectLiteral | ArrayLiteral | TrueLiteral | FalseLiteral | StringLiteral | NullLiteral;
export class TrueLiteral  implements IASTNode {
  opComplexity = 101
  NodeType = 'TrueLiteral'
  tag = ' true ';
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
    // console.log('Testing TrueLiteral', code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'TrueLiteral'})
    const start = code.copy()
    if(typeof(this.tag) === 'string') {
      start.removeSpace()
      if( !start.consume(this.tag) ) return null
      start.removeSpace()
    }
    code.from( start )
    return this
  }
}
export class FalseLiteral  implements IASTNode {
  opComplexity = 101
  NodeType = 'FalseLiteral'
  tag = ' false ';
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
    // console.log('Testing FalseLiteral', code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'FalseLiteral'})
    const start = code.copy()
    if(typeof(this.tag) === 'string') {
      start.removeSpace()
      if( !start.consume(this.tag) ) return null
      start.removeSpace()
    }
    code.from( start )
    return this
  }
}
export class NullLiteral  implements IASTNode {
  opComplexity = 101
  NodeType = 'NullLiteral'
  tag = ' null ';
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
  create() : NullLiteral  {
    return new NullLiteral ()
  }
  constructor() {
    this.tag = this.tag.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='NullLiteral') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : NullLiteral | null {
    // console.log('Testing NullLiteral', code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'NullLiteral'})
    const start = code.copy()
    if(typeof(this.tag) === 'string') {
      start.removeSpace()
      if( !start.consume(this.tag) ) return null
      start.removeSpace()
    }
    code.from( start )
    return this
  }
}
export class Token  implements IASTNode {
  opComplexity = 1
  NodeType = 'Token'
  name: string;
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
    // console.log('Testing Token', code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'Token'})
    const start = code.copy()
    // WALK: name
    // Expect Type: string
    this.name = start.consumeString()
    if(this.name.length === 0) return null
    code.from( start )
    return this
  }
}
export class Number  implements IASTNode {
  opComplexity = 1
  NodeType = 'Number'
  value_regexp = /^-?(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?/;
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
  create() : Number  {
    return new Number ()
  }
  constructor() {
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='Number') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : Number | null {
    // console.log('Testing Number', code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'Number'})
    const start = code.copy()
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
  opComplexity = 103
  NodeType = 'StringLiteral'
  start = ' "';
  value_regexp = /^(?:[^\\"]|\\(?:[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*/;
  value: string;
  end = '" ';
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
    this.start = this.start.trim()
    this.end = this.end.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='StringLiteral') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : StringLiteral | null {
    // console.log('Testing StringLiteral', code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'StringLiteral'})
    const start = code.copy()
    if(typeof(this.start) === 'string') {
      start.removeSpace()
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
      start.removeSpace()
    }
    code.from( start )
    return this
  }
}
export class ObjectLiteralEntry  implements IASTNode {
  opComplexity = 3
  NodeType = 'ObjectLiteralEntry'
  key: StringLiteral;
  separator = ' : ';
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
    this.separator = this.separator.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='ObjectLiteralEntry') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : ObjectLiteralEntry | null {
    // console.log('Testing ObjectLiteralEntry', code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'ObjectLiteralEntry'})
    const start = code.copy()
    // WALK: key
    // Expect Type: StringLiteral
    if(!this.key) {
      const tmp_key = WalkNode(start, [new StringLiteral()])
      if(tmp_key) {
        this.key = tmp_key.node as StringLiteral
        start.from( tmp_key.code )
      } else {
        return null
      }
    }
    if(typeof(this.separator) === 'string') {
      start.removeSpace()
      if( !start.consume(this.separator) ) return null
      start.removeSpace()
    }
    // WALK: value
    if(!this.value) {
      // Expect: Token, Number, ObjectLiteral, ArrayLiteral, TrueLiteral, FalseLiteral, StringLiteral, NullLiteral
      const walk = WalkNode(start, [new Token(), new Number(), new ObjectLiteral(), new ArrayLiteral(), new TrueLiteral(), new FalseLiteral(), new StringLiteral(), new NullLiteral()])
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
  opComplexity = 103
  NodeType = 'ObjectLiteralTail'
  start = ' , ';
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
    this.start = this.start.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='ObjectLiteralTail') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : ObjectLiteralTail | null {
    // console.log('Testing ObjectLiteralTail', code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'ObjectLiteralTail'})
    const start = code.copy()
    if(typeof(this.start) === 'string') {
      start.removeSpace()
      if( !start.consume(this.start) ) return null
      start.removeSpace()
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
export class ObjectLiteral  implements IASTNode {
  opComplexity = 104
  NodeType = 'ObjectLiteral'
  begin = ' { ';
  head?: ObjectLiteralEntry;
  tail?: ObjectLiteralTail;
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
  create() : ObjectLiteral  {
    return new ObjectLiteral ()
  }
  constructor() {
    this.begin = this.begin.trim()
    this.end = this.end.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='ObjectLiteral') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : ObjectLiteral | null {
    // console.log('Testing ObjectLiteral', code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'ObjectLiteral'})
    const start = code.copy()
    if(typeof(this.begin) === 'string') {
      start.removeSpace()
      if( !start.consume(this.begin) ) return null
      start.removeSpace()
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
    if(typeof(this.end) === 'string') {
      start.removeSpace()
      if( !start.consume(this.end) ) return null
      start.removeSpace()
    }
    code.from( start )
    return this
  }
}
export class ArrayLiteral  implements IASTNode {
  opComplexity = 104
  NodeType = 'ArrayLiteral'
  begin = ' [ ';
  head?: ExpressionType;
  tail?: ArrayLiteralTail;
  end = ' ] ';
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
    this.begin = this.begin.trim()
    this.end = this.end.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='ArrayLiteral') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : ArrayLiteral | null {
    // console.log('Testing ArrayLiteral', code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'ArrayLiteral'})
    const start = code.copy()
    if(typeof(this.begin) === 'string') {
      start.removeSpace()
      if( !start.consume(this.begin) ) return null
      start.removeSpace()
    }
    // WALK: head
    if(!this.head) {
      // Expect: Token, Number, ObjectLiteral, ArrayLiteral, TrueLiteral, FalseLiteral, StringLiteral, NullLiteral
      const walk = WalkNode(start, [new Token(), new Number(), new ObjectLiteral(), new ArrayLiteral(), new TrueLiteral(), new FalseLiteral(), new StringLiteral(), new NullLiteral()])
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
      start.removeSpace()
      if( !start.consume(this.end) ) return null
      start.removeSpace()
    }
    code.from( start )
    return this
  }
}
export class ArrayLiteralTail  implements IASTNode {
  opComplexity = 103
  NodeType = 'ArrayLiteralTail'
  start = ' , ';
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
    this.start = this.start.trim()
  }
  isInPath(code:CodeToConsume) : boolean {
    for( let p of code.expressionPath) {
      if( (p.nodetype=='ArrayLiteralTail') && (p.index === code.index)) return true
    }
    return false
  }
  consume(code:CodeToConsume) : ArrayLiteralTail | null {
    // console.log('Testing ArrayLiteralTail', code.expressionPath)
    if( this.isInPath(code)) {
      return null
    }
    code.expressionPath.push({index:code.index, nodetype:'ArrayLiteralTail'})
    const start = code.copy()
    if(typeof(this.start) === 'string') {
      start.removeSpace()
      if( !start.consume(this.start) ) return null
      start.removeSpace()
    }
    // WALK: value
    if(!this.value) {
      // Expect: Token, Number, ObjectLiteral, ArrayLiteral, TrueLiteral, FalseLiteral, StringLiteral, NullLiteral
      const walk = WalkNode(start, [new Token(), new Number(), new ObjectLiteral(), new ArrayLiteral(), new TrueLiteral(), new FalseLiteral(), new StringLiteral(), new NullLiteral()])
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
const keywords:{[key:string]:boolean} = {
  [' true '.trim()] : true,
  [' false '.trim()] : true,
  [' null '.trim()] : true,
  [' "'.trim()] : true,
  ['" '.trim()] : true,
  [' : '.trim()] : true,
  [' , '.trim()] : true,
  [' { '.trim()] : true,
  [' } '.trim()] : true,
  [' [ '.trim()] : true,
  [' ] '.trim()] : true,
}
const initialList:IASTNode[] = [
  new TrueLiteral(),
  new FalseLiteral(),
  new NullLiteral(),
  new Token(),
  new Number(),
  new StringLiteral(),
  new ObjectLiteralEntry(),
  new ObjectLiteralTail(),
  new ObjectLiteral(),
  new ArrayLiteral(),
  new ArrayLiteralTail(),
]

let currDepth = 0
export function WalkNode(orig:CodeToConsume, opInList:IASTNode[] = initialList) : ParsedContext | null {
  if(currDepth++ > 20) {
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
  currDepth--
  if(activeOp === null) return null
  return {
    code: cc,
    node: activeOp
  }
}      
          
