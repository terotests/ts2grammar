"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TSParser = require("./ast/parsers/typescript");
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
  
    */
    var cc = new TSParser.CodeToConsume();
    cc.index = 0;
    cc.str = "function hello<T extends Animal,S>( fn:(x:T) => void ) : S | () => number {\n    const a = 10\n    const c = new n()\n    if( ((d=c.joo() + 9) + 500) < 29 ) {\n      return 300\n    } else {\n      return n ? new f() : (y:number,x?:number) => y + 10 * x\n    }    \n    const c = 9\n    c = jep()\n    return x => \"foobar\"\n  }\n\n  function helloWorld() {\n    return \"Hello\"\n  }\n  const MAXCNT = 1000\n\n  class foo {\n    jee() {\n\n    };\n    bar<T>() : () => T {\n\n    };\n    x = 123;\n    y = true\n  }\n  ";
    // cc.str = 'const x = new foo ()'
    // cc.str = 'A*C+D'
    cc.str = "\n  function ok() {\n    const a = 3\n    const b = 7  \n  }\n  ";
    // (y:number,x?:number) => y + 10 * x
    cc.str = "\nclass foo {\n  x = 123\n  y = 10\n  z = true\n  str = 144;\n  hello = \"Hello World\";\n  ok = true\n  notOK = false\n\n  bar<T extends Animal,S>() : () => T {\n    const a = 10\n    const c = new n()\n    if( true ) {\n      return 300\n    } else {\n      return n ? new f() : (y) => y\n    }    \n    const c = 9    \n    c = jep()\n    return (x) => \"foobar\"\n  }    \n}\n";
    console.time('compiletime');
    var active = TSParser.WalkNode(cc);
    console.timeEnd('compiletime');
    console.log(JSON.stringify(active.node, null, 2));
    var code = active.code;
    console.log('Finished at ', code.index, '/', code.str.length);
    console.log(code.str.substr(code.index));
    var jsonCode = new JSONParser.CodeToConsume();
    jsonCode.str = JSON.stringify({
        array1: ["1", 23, true, false, null, "Hello World"],
        n: null,
        obj2: { ok: true, nook: false, n: 1, list: [1, 2, 3] }
    });
    jsonCode.index = 0;
    console.time('json.compiletime');
    var testJSON = JSONParser.WalkNode(jsonCode);
    console.timeEnd('json.compiletime');
    if (testJSON) {
        console.log('--- JSON ----');
        // console.log(JSON.stringify( testJSON.node, null, 2))
    }
    return 'Hello World!';
}
exports.HelloWorld = HelloWorld;
//# sourceMappingURL=first_test.js.map