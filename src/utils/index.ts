import * as R from 'robowr'

export const createConsumer = (wr:R.CodeWriter) => {
  wr.raw(`

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

  `, true)
}