"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConsumer = function (wr) {
    wr.raw("\n\nexport interface ConsumePath {\n  nodetype: string\n  index: number\n}\n/**\n * @generated true\n */ \nexport class CodeToConsume {\n  str:string\n  index:number\n  expressionPath:ConsumePath[] = []\n  copy() : CodeToConsume {\n    const o = new CodeToConsume()\n    o.str = this.str\n    o.index = this.index\n    o.expressionPath = this.expressionPath.slice()\n    return o\n  }\n  from( cc: CodeToConsume) : CodeToConsume {\n    this.str = cc.str\n    this.index = cc.index\n    this.expressionPath = cc.expressionPath.slice()\n    return this\n  }\n  has( test:string ) : boolean {\n    for(let i=0; i < test.length ; i++) {\n      if(test.charCodeAt(i) !== this.str.charCodeAt(this.index +i)) return false\n    }\n    return true\n  }\n  consume( test:string ) {\n    for(let i=0; i < test.length ; i++) {\n      if(test.charCodeAt(i) !== this.str.charCodeAt(this.index + i)) return false\n    }\n    this.index += test.length\n    return true\n  }\n  removeSpace() {\n    let len = 0\n    for(let i=this.index; i < this.str.length ; i++) {\n      const c = this.str.charCodeAt(i)\n      if( c < 33 ) {\n        len++\n      } else {\n        break;\n      }\n    }  \n    this.index += len  \n  }\n  consumeNumber( ) : string {\n    let len = 0\n    for(let i=this.index; i < this.str.length ; i++) {\n      const c = this.str.charCodeAt(i)\n      if( (c >= 48) && (c<= 57) ) {\n        len++\n      } else {\n        break;\n      }\n    }\n    if(len > 0 ) {\n      const start = this.index\n      this.index += len\n      return this.str.substring( start, start + len )\n    }\n    return \"\"\n  } \n  consumeString( ) : string {\n    let len = 0\n    for(let i=this.index; i < this.str.length ; i++) {\n      const c = this.str.charCodeAt(i)\n      if( ((c > 64) && (c <=90)) ||\u00A0((c >= 97) && (c <= 122)) ) {\n        len++\n      } else {\n        break;\n      }\n    }\n    if(len > 0 ) {\n      const start = this.index\n      this.index += len\n      const result = this.str.substring( start, start + len )\n      if(!keywords[result]) return result\n    }\n    return \"\"\n  }  \n}\n\n  ", true);
};
//# sourceMappingURL=index.js.map