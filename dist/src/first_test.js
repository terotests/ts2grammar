"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as PNew from './ast/parsers/typescript'
var JSONParser = require("./ast/parsers/json");
function HelloWorld() {
    // cc.str = 'function test(a = new foobar(x+10,y,new foo.bar.jee,new foo().bar.jee),b=foo.bar,c=8){}'
    // cc.str = 'new myClass(x+r)'
    // cc.str = 'const myFn = (x) => x + 1;'
    // cc.str = 'const myFn = (x:number, y:number) => x + y;'
    //cc.str = '{cnt:1, obj: new foobar(), name:"Seppo", someFn : x => ( x + 2 ) , what:x=>(x+2),jaa:x=>(x+y+u) }'
    // cc.str = '{cnt:function jaa(){}, obj: new foobar(), name:"Seppo", someFn : x => ( x + 2 ) , what:x=>(x+2),jaa:x=>(x+y+u) }'
    // cc.str = '{m: y*z+x, fn: async (x:number) => x + 1, arr: [1,new foo.bar]}'
    // cc.str = '[new foo.bar, new foo().bar]'
    // cc.str = 'const myFn = x => (x + y);'
    // cc.str = 'true ?   new someclass :  new  otherclass( 5  *  9 )'
    /*
      if( (d + 500) < 29 ) {
        return 300
      } else {
        return n ? new f() : "joo"
      };
    
    */
    // TODO: newline instead of ; 
    /*
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
      y = true
    }
    `
    
  
    // cc.str = 'const x = new foo ()'
    // cc.str = 'A*C+D'
    // cc.str = `caallSome(h,y)`
    /*
    cc.index = 0
    console.time('compiletime')
    const active = PNew.WalkNode( cc )
    console.timeEnd('compiletime')
    console.log(JSON.stringify( active.node, null, 2))
    const code = active.code
    console.log('Finished at ', code.index, '/', code.str.length)
  
    console.log(code.str.substr( code.index ))
    */
    var jsonCode = new JSONParser.CodeToConsume();
    jsonCode.str = JSON.stringify({
        array1: ["1", 23, true, false, null],
        n: null,
        obj2: { ok: true, nook: false, n: 1, list: [1, 2, 3] }
    });
    jsonCode.index = 0;
    var testJSON = JSONParser.WalkNode(jsonCode);
    if (testJSON) {
        console.log('--- JSON ----');
        console.log(JSON.stringify(testJSON.node, null, 2));
    }
    return 'Hello World!';
}
exports.HelloWorld = HelloWorld;
//# sourceMappingURL=first_test.js.map