
  
import Project, { InterfaceDeclaration, PropertyDeclaration, SourceFile, FunctionDeclaration, ClassDeclaration, ImportDeclaration, ImportDeclarationStructure, SyntaxKind, MethodDeclaration, Node, VariableDeclarationKind} from "ts-simple-ast";
import * as R from 'robowr'
import * as path from 'path'
// import { getJSDocTypeParameterTags } from "typescript";
import { dirname } from "path";
import { printNode } from 'ts-simple-ast'
import { createConsumer } from "./utils/index";


export interface GenerationOptions {
  path: string
  reducerPath?: string
  disableDevtoolsFromContext?: boolean
}

export interface ModelDefinition {
  name:string 
  iface:ClassDeclaration,
  file:SourceFile,
}

export interface TrimOptions {
  left: boolean,
  right: boolean
}

export interface TargetFile { 
  path:string,
  file:SourceFile,
  classes:{[key:string]:string}
}

export interface SyncInterface { 
  name:string
  file:SourceFile
  iface:InterfaceDeclaration
}

export interface GeneratedReducer { 
  name: string
  fileName: string
  writer: R.CodeWriter
  writerMainDir: string
  writerReducerDir: string
}

const createComment = (wr:R.CodeWriter, txt:string) => {
  const lines = txt.split('\n')
  const longest = lines.map( line => line.length ).reduce( (prev,curr) => Math.max(prev,curr), 0)
  const maxLine = longest + 6;
  const printLine = (txt:string, fill:string, len:number) => {
    let res = txt 
    const fillLen = len - txt.length
    for( let i=0 ; i < fillLen; i++) {
      res = res + fill
    }
    return res
  }
  wr.out('/*' + printLine('', '*', maxLine-3)  + '*', true)
  txt.split('\n').forEach(line=>{
    wr.out('* ' + printLine(line, ' ', maxLine-4) + ' *', true)
  })
  wr.out('*' + printLine('', '*', maxLine-3)  + '*/', true)
}

export async function createProject( settings:GenerationOptions) {
  const project = new Project();
  const reducerPath =  '/'+settings.reducerPath+'/'
  project.addExistingSourceFiles([`${settings.path}/**/*.ts`,`${settings.path}/**/*.tsx`]); // , "!**/*.d.ts"
  const RFs = new R.CodeFileSystem()


  const targetFiles:{[key:string]:TargetFile} = {};
  const modelsList:ModelDefinition[] = []
  const generatedFiles:ModelDefinition[] = []
  const dirReducers:{[key:string]:GeneratedReducer[]} = {}

  // NOTE:
  // https://daveceddia.com/context-api-vs-redux/

  const JSTags = (c:InterfaceDeclaration|ClassDeclaration|FunctionDeclaration, name:string) : string[] => {
    const res:string[] = []
    c.getJsDocs().forEach(
      doc => doc.getTags().forEach( tag => {
        if( tag.getTagName() === name ) res.push( tag.getComment() )
      })
    )   
    return res 
  }

  project.getSourceFiles().forEach( sourceFile => {
    sourceFile.getClasses().forEach( c=>{
      JSTags( c, 'generated').forEach( model => {
        generatedFiles.push({
          name: '',
          iface : c,
          file : sourceFile
        })
      })    
      JSTags( c, 'redux').forEach( model => {
        modelsList.push({
          name: model,
          iface : c,
          file : sourceFile
        })
      })    
    })
  })

  // mapeservice classes to the properties
  project.getSourceFiles().forEach( sourceFile => {

    if( sourceFile.getFilePath().indexOf(reducerPath) > 0 ) return

    const fileName = path.basename( sourceFile.getFilePath() ) 
    const sourceDir = path.normalize( path.relative( process.cwd(), path.dirname( sourceFile.getFilePath() ) ) )
    const fileNg = RFs.getFile(sourceDir + reducerPath,  fileName ).getWriter()

    const ng = fileNg.fork()
    const end = fileNg.fork()

    const usedKeywords:{[key:string]:boolean} = {}

    // do not process target files
    if( generatedFiles.filter( m => m.file.getFilePath() == sourceFile.getFilePath() ).length > 0 ) {
      console.log('found one generated file')
      return;
    }
    createComment(ng, `
AST Parsers, Automatically Generated 
          `)

    createConsumer(ng)

    ng.raw(`
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
    `, true)
    
    // const apparentType = type.getApparentType();
    // getIntersectionTypes

    sourceFile.getTypeAliases().forEach( alias => {
      ng.out('// Type : ' + alias.getName(), true)
      // alias.
      alias.getChildren().forEach( ch=> {        
        if(ch.getKind() === SyntaxKind.UnionType) {
          ng.out(`// UNION: - ${ch.print()}`, true)
          ch.getType().getUnionTypes().forEach( ist => {
            const symb = ist.getSymbol()
            if(symb) ng.out( '// Type --> ' + symb.getEscapedName(), true)            
          })
        }
      })
      ng.out( alias.print(), true )
    })

    end.out(`const keywords:{[key:string]:boolean} = {`, true)
      end.indent(1)
      const keywordList = end.fork()
      end.indent(-1)
    end.out(`}`, true)    

    end.out(`const initialList:IASTNode[] = [`, true)
      end.indent(1)
      const operatorList = end.fork()
      end.indent(-1)
    end.out(`]`, true)

    sourceFile.getClasses().forEach( c=>{

      if(true) {
        console.log(c.getName())

        c.getType().getIntersectionTypes().forEach( ist => {
          const symb = ist.getSymbol()
          if(symb) ng.out( '// Class Union Type -- ' + symb.getEscapedName())
          const tt = ist
          if(tt) {
            tt.getTypeArguments().forEach( arg => {
              const s = arg.getSymbol()
              if(s) {
                ng.out( '// Class Union type arg ==> ' + s.getEscapedName() )
              }
            })
          }          
        })

        operatorList.out(`new ${c.getName()}(),`, true)

        const tparams = c.getTypeParameters().map( tparam => tparam.print() )
        let tArgument = ''
        if(tparams.length > 0 ) {
          tArgument = '<' + tparams.join(',') + '>'
        }

        ng.out(`export class ${c.getName()} ${tArgument} implements IASTNode {`, true)
        ng.indent(1)
        const variables = ng.fork()
        const body = ng.fork()
        const methods = ng.fork()
        const meta = ng.fork()
        ng.indent(-1)
        ng.out('}', true)

        /*
        meta.out(`MetaData = {`, true)
        meta.indent(1)
          const metaProps = meta.fork()
        meta.indent(-1)
        meta.out(`}`, true)
        */

        methods.out(`constructor() {`, true)
          methods.indent(1)
          const constr = methods.fork()
          methods.indent(-1)
        methods.out(`}`, true)

        methods.out(`isInPath(code:CodeToConsume) : boolean {`, true)
        methods.indent(1)
          methods.out(`for( let p of code.expressionPath) {`, true)
            methods.indent(1)
            methods.out(`if( (p.nodetype=='${c.getName()}') && (p.index === code.index)) return true`, true)
            methods.indent(-1)
          methods.out(`}`, true)
          methods.out(`return false`, true)
        methods.indent(-1)
        methods.out(`}`, true)
        
        methods.out(`consume(code:CodeToConsume) : ${c.getName()} | null {`, true)
          methods.indent(1)
          // See if we are already in the path
          // methods.out(``)
          methods.out(`// console.log('Testing ${c.getName()}', code.expressionPath)`, true)
          methods.out(`if( this.isInPath(code)) {`, true)
            methods.indent(1)
            // methods.out(`console.log('was already in path ${c.getName()}')`, true)
            methods.out(`return null`, true)
            methods.indent(-1)
          methods.out(`}`, true)
          methods.out(`code.expressionPath.push({index:code.index, nodetype:'${c.getName()}'})`, true)
          methods.out(`const start = code.copy()`, true)
          const consumer = methods.fork()
          // methods.out(`console.log('Matched ${c.getName()}')`, true)
          methods.out(`code.from( start )`, true)
          methods.out(`return this`, true)
          methods.indent(-1)
        methods.out(`}`, true)


        body.out(`NodeType = '${c.getName()}'`, true)

/*
MetaData = {
  ownTypes: ['Expression', 'ParenExpression'],
  structure: [null],
  types: ['Expression', 'ParenExpression'],
  precedence: 20
}
*/        

        let hadPred = false
        const freeVariables:PropertyDeclaration[] = []
        const trimOpts:{[key:string]:TrimOptions} = {}
        let complexity = 0
        c.getProperties().forEach( (p, propIndex) => {
          trimOpts[p.getName()] = { left:false, right:false }
          if(p.getName() === 'precedence') {
            body.out(p.print(), true)
            hadPred = true
            return
          }
          const t = p.getTypeNode()
          body.out(p.print(), true)
          if(t) {
            console.log(' type node -> ', t.print())
            const tt = p.getType()
            if(tt) {
              tt.getTypeArguments().forEach( arg => {
                const s = arg.getSymbol()
                if(s) {
                  console.log( ' type arg ==> ', s.getEscapedName() )
                }
              })
            }
          }

          if( p.getInitializer() ) {
            const init = p.getInitializer().getType()
            console.log(init.getText())
            console.log( p.getInitializer().print() )
            // console.log( p.getInitializer().getType() )

            const initVal = p.getInitializer().print()
            const apparentType = init.getApparentType();

            let keywordValue = initVal
            if( apparentType ) {
              const s = apparentType.getSymbol()
              if(s) {
                if( s.getEscapedName() == 'String' ) {
                  if(!!p.hasQuestionToken()) {
                    complexity+=10
                  } else {
                    complexity+=1
                  }
                  
                  if( propIndex === 0 && !p.hasQuestionToken() ) {
                    complexity+=100
                  }
                  if( initVal.length > 3 ) {
                    console.log('LEN ', initVal.length)
                    let hasSpace = false
                    if(initVal.charAt( 1 ) == ' ') {
                      trimOpts[p.getName()].left = true
                      console.log('BEGINS with space')
                      hasSpace = true
                    }
                    if(initVal.charAt( initVal.length - 2 ) == ' ') {
                      trimOpts[p.getName()].right = true
                      console.log('ENDS with space')
                      hasSpace = true
                    }  
                    if(hasSpace) {
                      constr.out(`this.${p.getName()} = this.${p.getName()}.trim()`, true)
                    }
                  }
                }
                // console.log('Apparent Type: ', s.getEscapedName())
              }
            }
            

            if(isNaN(parseFloat(keywordValue)) && !usedKeywords[keywordValue]) {
              keywordList.out(`[${keywordValue}.trim()] : true,`, true)  
              usedKeywords[keywordValue] = true            
            }

            consumer.out(`if(typeof(this.${p.getName()}) === 'string') {`, true)
              consumer.indent(1)
              if( trimOpts[p.getName()].left ) {
                consumer.out(`start.removeSpace()`, true)                
              }
              if( p.hasQuestionToken() ) {
                consumer.out(`if(!start.consume(this.${p.getName()})) this.${p.getName()} = '' `, true)
              } else {
                consumer.out(`if( !start.consume(this.${p.getName()}) ) return null`, true)
              }
              if( trimOpts[p.getName()].right ) {
                consumer.out(`start.removeSpace()`, true)                
              }              
              consumer.indent(-1)
            consumer.out(`}`, true)
          } else {
            freeVariables.push( p )
            consumer.out(`// WALK: ${p.getName()}`, true)
            complexity += 1
            if(p.getType().getUnionTypes().length > 0) {

              consumer.out(`if(!this.${p.getName()}) {`, true)
              consumer.indent(1)              
              const uTypes = p.getType().getUnionTypes().map( ist => {
                const symb = ist.getSymbol()
                if(symb) return '' + symb.getEscapedName()
                return ''
              }).filter( v => v.length > 0)         
              consumer.out(`// Expect: ${uTypes.join(', ')}`, true)   

              consumer.out(`const walk = WalkNode(start, [${uTypes.map( t => 'new '+t+'()' ).join(', ')}])`, true)
              consumer.out(`if(walk) {`, true)
                consumer.indent(1)
                consumer.out(`this.${p.getName()} = walk.node as ${p.getTypeNode().print()}`, true)
                consumer.out(`start.from( walk.code )`, true)
                consumer.indent(-1)
              consumer.out(`} else {`, true)
              consumer.indent(1)
                if( !p.hasQuestionToken() ) {
                  consumer.out(`return null`, true)
                }
              consumer.indent(-1)
            consumer.out(`}`, true)

/*
      const walk = WalkNode(start, ['ParenExpression', 'Reference'])
      if(walk) {
        this.MetaData.structure[0] = walk.node
        start.from( walk.code )
      } else {
        return null
      }
*/              
              consumer.indent(-1)
              consumer.out(`}`, true)
  
            } else {
              const tn = p.getTypeNode()
              if(tn) {
                consumer.out(`// Expect Type: ${tn.print()}`, true) 
                const vname = tn.print()
                switch( vname ) {
                  case 'string':
                    consumer.out(`this.${p.getName()} = start.consumeString()`, true)
                    if( !p.hasQuestionToken() ) {
                      consumer.out(`if(this.${p.getName()}.length === 0) return null`, true)
                    } else {
                      consumer.out(`if(this.${p.getName()}.length === 0) this.${p.getName()} =''`, true)                      
                    }
                    break
                  case 'number':
                    consumer.out(`const tmp_${p.getName()} = start.consumeNumber()`, true)
                    if( !p.hasQuestionToken() ) {
                      consumer.out(`if(tmp_${p.getName()}.length === 0) return null`, true)
                    } 
                    consumer.out(`this.${p.getName()} = parseInt(tmp_${p.getName()})`, true)   
                    break;
                  default:
                    consumer.out(`if(!this.${p.getName()}) {`, true)
                    consumer.indent(1)
                      consumer.out(`const tmp_${p.getName()} = WalkNode(start, [new ${vname}()])`, true)
                      consumer.out(`if(tmp_${p.getName()}) {`, true)
                        consumer.indent(1)
                        consumer.out(`this.${p.getName()} = tmp_${p.getName()}.node as ${p.getTypeNode().print()}`, true)
                        consumer.out(`start.from( tmp_${p.getName()}.code )`, true)
                        consumer.indent(-1)
                      consumer.out(`} else {`, true)
                      consumer.indent(1)
                        if( !p.hasQuestionToken() ) {
                          consumer.out(`return null`, true)
                        }
                      consumer.indent(-1)
                      consumer.out(`}`, true)      
                    consumer.indent(-1)            
                    consumer.out(`}`, true)      
                  
                } 
              }
            }

          }

          p.getType().getIntersectionTypes().forEach( ist => {
            console.log(' ist',  ist.compilerType )
          })
          if( p.hasQuestionToken() ) {
            console.log( p.getName(), ' is optional')
          }
          p.getType().getUnionTypes().forEach( ist => {
            const symb = ist.getSymbol()
            if(symb) console.log( ' -- ', symb.getEscapedName())
            const tt = ist
            if(tt) {
              tt.getTypeArguments().forEach( arg => {
                const s = arg.getSymbol()
                if(s) {
                  console.log( ' type arg ==> ', s.getEscapedName() )
                }
              })
            }            
            // console.log(' union ', ist.getText(), printNode(ist) )
          })                  
          /*
          t.getAliasTypeArguments().forEach( alias => {
            console.log( '| ', alias.getText() )
          })
          */
        })

        if(!hadPred) body.out(`precedence? : number`, true)
        body.out(`getFreeCount() : number {`, true)
          body.indent(1)
          body.out(`return  ${freeVariables.length}`, true)
          body.indent(-1)
        body.out(`}`, true)
        // Setting the value of the first etc.
        const firstVar = freeVariables[0]
        // ${firstVar.getTypeNode().print()}
        
        body.out(`setFirst( value : any )  {`, true)
          body.indent(1)
          if(firstVar) {
            body.out(`this.${firstVar.getName()} = value`, true)
          }
          body.indent(-1)
        body.out(`}`, true) 
        body.out(`getFirst() : any | null {`, true)
          body.indent(1)
          if(firstVar) {
            body.out(`return this.${firstVar.getName()}`, true)
          } else {
            body.out(`return null`, true)
          }
          body.indent(-1)
        body.out(`}`, true) 
        

        const lastVar = freeVariables[freeVariables.length-1]    
        
        body.out(`setLast( value : any )  {`, true)
          body.indent(1)
          if(lastVar) {
            body.out(`this.${lastVar.getName()} = value`, true)
          }
          body.indent(-1)
        body.out(`}`, true) 
        body.out(`getLast() : any | null {`, true)
          body.indent(1)
          if(lastVar) {
            body.out(`return this.${lastVar.getName()}`, true)
          } else {
            body.out(`return null`, true)
          }
          body.indent(-1)
        body.out(`}`, true)         

        body.out(`create() : ${c.getName()} ${tArgument} {`, true)
          body.indent(1)
          body.out(`return new ${c.getName()} ${tArgument}()`, true)
          body.indent(-1)
        body.out(`}`, true)

        variables.out(`opComplexity = ${complexity}`, true)

      }     

    })      
    end.raw(`
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
          `, true)     
    
  })  
  await RFs.saveTo('./', false );
}