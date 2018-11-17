import { createProject } from "./parser";

// the starting point of the applictaion ts2grammar

export type ASTNode = Reference | RightAssocPlus | Expression | SelfReference

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
  MetaData?: IParserMeta
  create() : IASTNode
  consume(code:CodeToConsume) : IASTNode | null
}

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
  // Not real...
  consumeString( ) : string {
    let len = 0
    for(let i=this.index; i < this.str.length ; i++) {
      if(this.str.charCodeAt(i) > 60) {
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
}

export class SelfReference implements IASTNode {

  MetaData?: IParserMeta
  create() : SelfReference {
    return new SelfReference()
  }   
  consume(code:CodeToConsume) : Reference | null {
    return null
  }
}

export class Reference implements IASTNode {

  value:string
  MetaData = {
    structure : [null],
    types: ['Reference'],
    ownTypes: ['Expression', 'Reference'],
    precedence: 999,
  }

  create() : Reference {
    return new Reference()
  }    

  consume(code:CodeToConsume) : Reference | null {
    const start = code.copy()
    const res = this   
    if( this.MetaData.structure[0] !== null ) return null
    const refValue = start.consumeString()
    if(refValue.length > 0 ) {
      res.value = refValue
      code.index = start.index
      this.MetaData.structure[0] = new SelfReference
      return this
    }    
    return null
  }   

  static consume(original:CodeToConsume) : Reference | null {
    // collect any string value
    const copy = original.copy()
    const res = new Reference()
    const refValue = copy.consumeString()
    if(refValue.length > 0 ) {
      res.value = refValue
      original.index = copy.index
      return res
    }
    return null
  }
}

export class RightAssocPlus {
  parenStart = '++'
  ref:Reference
  // Consume the assoc
  static consume(code:CodeToConsume) : RightAssocPlus | null {
    const start = code.copy()
    const res = new RightAssocPlus()
    if( start.consume(res.parenStart) 
        && (res.ref = Reference.consume(start)) ) {
      code.index = start.index
      return res
    }
    return null
  } 
}

export type Expression = PlusExpression | MulExpression | Reference | ParenExpression

export class ParenExpression implements IASTNode {

  leftParen = '('
  expr:Expression  
  rightParen = ')'

  MetaData = {
    ownTypes: ['Expression', 'ParenExpression'],
    structure: [null],
    types: ['Expression', 'ParenExpression'],
    precedence: 20
  }

  create() : ParenExpression {
    return new ParenExpression()
  }  

  consume(code:CodeToConsume) : ParenExpression | null {
    const start = code.copy()
    const res = this   
    if( this.MetaData.structure[0] !== null ) return null
    if( !start.consume(res.leftParen) ) return null
    const walk = WalkNode(start)
    if(walk) {
      this.MetaData.structure[0] = walk.node
      start.from( walk.code )
    } else {
      return null
    }
    
    if( !start.consume(res.rightParen) ) return null
    code.from( start )
    return this
  }  
}

// should return
// - new position of the code
// - operator which was matched
export class PlusExpression implements IASTNode {

  left:Expression  
  op = ' + '
  right:Expression

  MetaData = {
    ownTypes: ['Expression', 'PlusExpression'],
    structure: [null, null],
    types: ['Expression', 'Expression'],
    precedence: 13
  }

  create() : PlusExpression {
    return new PlusExpression()
  }  

  consume(code:CodeToConsume) : PlusExpression | null {
    const start = code.copy()
    const res = this   
    if( this.MetaData.structure[0] === null ) {
      // ref, parentExpression,
      const walk = WalkNode(start, ['ParenExpression', 'Reference'])
      if(walk) {
        this.MetaData.structure[0] = walk.node
        start.from( walk.code )
      } else {
        return null
      }
    }
    if( !start.consume(res.op) ) return null
    if( this.MetaData.structure[1] === null ) {
      const walk =  WalkNode(start, ['ParenExpression', 'Reference'])
      if(walk) {
        this.MetaData.structure[1] = walk.node
        code.from( walk.code )
        return this
      } else {
        return null
      }
    }    
    return null
  }  
}

export class MulExpression implements IASTNode {
  
  left:Expression  
  op = ' * '
  right:Expression

  MetaData = {
    ownTypes: ['Expression', 'MulExpression'],
    structure: [null, null],
    types: ['Expression', 'Expression'],
    precedence: 14    
  }

  create() : MulExpression {
    return new MulExpression()
  }

  consume(code:CodeToConsume) : MulExpression | null {
    const start = code.copy()
    const res = this   
    if( this.MetaData.structure[0] === null ) {
      const walk = WalkNode(start, ['ParenExpression', 'Reference'])
      if(walk) {
        this.MetaData.structure[0] = walk.node
        start.from( walk.code )
      } else {
        return null
      }
    }
    if( !start.consume(res.op) ) return null
    if( this.MetaData.structure[1] === null ) {
      const walk = WalkNode(start, ['ParenExpression', 'Reference'])
      if(walk) {
        this.MetaData.structure[1] = walk.node
        code.from( walk.code )
        return this
      } else {
        return null
      }
    }    
    return null
  }    
}

/* a + b * c  */
/* a * b + c  */
/* ( a + b ) * c */

export type NodeOrNull = IASTNode | null

export function WalkNode(orig:CodeToConsume, types?:string[]) : ParsedContext | null {

  const cc = orig.copy()
  let activeOp:IASTNode = null
  let cnt = 0
  let lastCnt = -1
  
  while( cnt !== lastCnt ) {
    console.log(cnt, lastCnt, orig.index)
    lastCnt = cnt
    for( let op of opList ) {
      const opInstance = op.create()
      if(types && types.length > 0) {
        if( types.indexOf( opInstance.MetaData.ownTypes[opInstance.MetaData.ownTypes.length-1] ) < 0 ) {
          continue
        }
      }
      if(activeOp === null) {
        const test = opInstance.consume( cc )
        if( test ) {
          activeOp = test
          cnt++
          break
        }
      } else {
        const opMeta = opInstance.MetaData
        const activeMeta = activeOp.MetaData
        if(opMeta.precedence > activeMeta.precedence) {
          opMeta.structure[0] = activeMeta.structure[1]
          const mRes = opInstance.consume( cc )
          if(mRes) {
            activeMeta.structure[1] = mRes
            cnt++
            break
          }  
        } else {
          opMeta.structure[0] = activeOp
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
  if(activeOp === null) return null
  return {
    code: cc,
    node: activeOp
  }
}

const opList:IASTNode[] = [
  new Reference(),
  new ParenExpression(),
  new PlusExpression(),
  new MulExpression()
]


import * as PNew from './ast/parsers/typescript'

export function HelloWorld() {

  let activeOp:IASTNode = null
  const cc = new PNew.CodeToConsume()
  cc.str = '( A.B +foo.bar)*C'

  // cc.str = 'function test(a = new foobar(x+10,y,new foo.bar.jee,new foo().bar.jee),b=foo.bar,c=8){}'
  // cc.str = 'new myClass(x+r)'
  // cc.str = 'const myFn = (x) => x + 1;'
  // cc.str = 'const myFn = (x:number, y:number) => x + y;'

  //cc.str = '{cnt:1, obj: new foobar(), name:"Seppo", someFn : x => ( x + 2 ) , what:x=>(x+2),jaa:x=>(x+y+u) }'
  // cc.str = '{cnt:function jaa(){}, obj: new foobar(), name:"Seppo", someFn : x => ( x + 2 ) , what:x=>(x+2),jaa:x=>(x+y+u) }'

  // cc.str = '{m: y*z+x, fn: async (x:number) => x + 1, arr: [1,new foo.bar]}'

  // cc.str = '[new foo.bar, new foo().bar]'
  // cc.str = 'const myFn = x => (x + y);'
  cc.str = 'true ?   new someclass :  new  otherclass( 5  *  9 )'

  /*
    if( (d + 500) < 29 ) {
      return 300
    } else {
      return n ? new f() : "joo"
    };
  
  */
  // TODO: newline instead of ; 
  cc.str = `function hello( message:string ) {
    const a = 10
    const ff = new n()
    return "foobar"
  }`

  
  cc.str = `function hello<T extends Animal,S>( fn:(x:T) => void ) : S | () => number {
    const a = 10
    const c = new n()
    if( ((d=c.joo() + 9) + 500) < 29 ) {
      return 300
    } else {
      return n ? new f() : (y:number,x?:number) => y + 10 * x
    }    
    const c = 9
    c = jep()
    return x => "foobar"
  }

  function helloWorld() {
    return "Hello"
  }
  const MAXCNT = 1000

  class foo {
    jee() {

    };
    bar<T>() : () => T {

    };
    x = 123;
    y  
  }
  ` 
  

  // cc.str = 'const x = new foo ()'
  // cc.str = 'A*C+D'
  // cc.str = `caallSome(h,y)`
  cc.index = 0
  console.time('compiletime')
  const active = PNew.WalkNode( cc )
  console.timeEnd('compiletime')
  console.log(JSON.stringify( active.node, null, 2))
  const code = active.code
  console.log('Finished at ', code.index, '/', code.str.length)

  console.log(code.str.substr( code.index ))

  const active2 = PNew.WalkNode( code )
  if(active2) {
    console.log(JSON.stringify( active2.node, null, 2))
  }

  return 'Hello World!'
}
  
  