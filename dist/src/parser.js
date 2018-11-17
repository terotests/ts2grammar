"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ts_simple_ast_1 = require("ts-simple-ast");
var R = require("robowr");
var path = require("path");
var index_1 = require("./utils/index");
var createComment = function (wr, txt) {
    var lines = txt.split('\n');
    var longest = lines.map(function (line) { return line.length; }).reduce(function (prev, curr) { return Math.max(prev, curr); }, 0);
    var maxLine = longest + 6;
    var printLine = function (txt, fill, len) {
        var res = txt;
        var fillLen = len - txt.length;
        for (var i = 0; i < fillLen; i++) {
            res = res + fill;
        }
        return res;
    };
    wr.out('/*' + printLine('', '*', maxLine - 3) + '*', true);
    txt.split('\n').forEach(function (line) {
        wr.out('* ' + printLine(line, ' ', maxLine - 4) + ' *', true);
    });
    wr.out('*' + printLine('', '*', maxLine - 3) + '*/', true);
};
function createProject(settings) {
    return __awaiter(this, void 0, void 0, function () {
        var project, reducerPath, RFs, targetFiles, modelsList, generatedFiles, dirReducers, JSTags;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    project = new ts_simple_ast_1.default();
                    reducerPath = '/' + settings.reducerPath + '/';
                    project.addExistingSourceFiles([settings.path + "/**/*.ts", settings.path + "/**/*.tsx"]); // , "!**/*.d.ts"
                    RFs = new R.CodeFileSystem();
                    targetFiles = {};
                    modelsList = [];
                    generatedFiles = [];
                    dirReducers = {};
                    JSTags = function (c, name) {
                        var res = [];
                        c.getJsDocs().forEach(function (doc) { return doc.getTags().forEach(function (tag) {
                            if (tag.getTagName() === name)
                                res.push(tag.getComment());
                        }); });
                        return res;
                    };
                    project.getSourceFiles().forEach(function (sourceFile) {
                        sourceFile.getClasses().forEach(function (c) {
                            JSTags(c, 'generated').forEach(function (model) {
                                generatedFiles.push({
                                    name: '',
                                    iface: c,
                                    file: sourceFile
                                });
                            });
                            JSTags(c, 'redux').forEach(function (model) {
                                modelsList.push({
                                    name: model,
                                    iface: c,
                                    file: sourceFile
                                });
                            });
                        });
                    });
                    // mapeservice classes to the properties
                    project.getSourceFiles().forEach(function (sourceFile) {
                        if (sourceFile.getFilePath().indexOf(reducerPath) > 0)
                            return;
                        var fileName = path.basename(sourceFile.getFilePath());
                        var sourceDir = path.normalize(path.relative(process.cwd(), path.dirname(sourceFile.getFilePath())));
                        var fileNg = RFs.getFile(sourceDir + reducerPath, fileName).getWriter();
                        var ng = fileNg.fork();
                        var end = fileNg.fork();
                        var usedKeywords = {};
                        // do not process target files
                        if (generatedFiles.filter(function (m) { return m.file.getFilePath() == sourceFile.getFilePath(); }).length > 0) {
                            console.log('found one generated file');
                            return;
                        }
                        createComment(ng, "\nAST Parsers, Automatically Generated \n          ");
                        index_1.createConsumer(ng);
                        ng.raw("\nexport interface ParsedContext {\n  code: CodeToConsume\n  node: IASTNode | null\n}\n\nexport interface IParserMeta {\n  structure : IASTNode[]\n  types : string[]  \n  ownTypes : string[]\n  precedence : number\n  starts?: number\n  ends?: number\n}\n\nexport interface IASTNode {\n  NodeType: string\n  precedence? : number\n  // MetaData?: IParserMeta\n  create() : IASTNode\n  setFirst(value:any)\n  getFirst() : IASTNode | null\n  setLast(value:any)\n  getLast() : IASTNode | null\n  getFreeCount() : number\n  consume(code:CodeToConsume) : IASTNode | null\n  opComplexity : number\n}    \n    ", true);
                        // const apparentType = type.getApparentType();
                        // getIntersectionTypes
                        sourceFile.getTypeAliases().forEach(function (alias) {
                            ng.out('// Type : ' + alias.getName(), true);
                            // alias.
                            alias.getChildren().forEach(function (ch) {
                                if (ch.getKind() === ts_simple_ast_1.SyntaxKind.UnionType) {
                                    ng.out("// UNION: - " + ch.print(), true);
                                    ch.getType().getUnionTypes().forEach(function (ist) {
                                        var symb = ist.getSymbol();
                                        if (symb)
                                            ng.out('// Type --> ' + symb.getEscapedName(), true);
                                    });
                                }
                            });
                            ng.out(alias.print(), true);
                        });
                        end.out("const keywords:{[key:string]:boolean} = {", true);
                        end.indent(1);
                        var keywordList = end.fork();
                        end.indent(-1);
                        end.out("}", true);
                        end.out("const initialList:IASTNode[] = [", true);
                        end.indent(1);
                        var operatorList = end.fork();
                        end.indent(-1);
                        end.out("]", true);
                        sourceFile.getClasses().forEach(function (c) {
                            if (true) {
                                console.log(c.getName());
                                c.getType().getIntersectionTypes().forEach(function (ist) {
                                    var symb = ist.getSymbol();
                                    if (symb)
                                        ng.out('// Class Union Type -- ' + symb.getEscapedName());
                                    var tt = ist;
                                    if (tt) {
                                        tt.getTypeArguments().forEach(function (arg) {
                                            var s = arg.getSymbol();
                                            if (s) {
                                                ng.out('// Class Union type arg ==> ' + s.getEscapedName());
                                            }
                                        });
                                    }
                                });
                                operatorList.out("new " + c.getName() + "(),", true);
                                var tparams = c.getTypeParameters().map(function (tparam) { return tparam.print(); });
                                var tArgument = '';
                                if (tparams.length > 0) {
                                    tArgument = '<' + tparams.join(',') + '>';
                                }
                                ng.out("export class " + c.getName() + " " + tArgument + " implements IASTNode {", true);
                                ng.indent(1);
                                var variables = ng.fork();
                                var body_1 = ng.fork();
                                var methods = ng.fork();
                                var meta = ng.fork();
                                ng.indent(-1);
                                ng.out('}', true);
                                /*
                                meta.out(`MetaData = {`, true)
                                meta.indent(1)
                                  const metaProps = meta.fork()
                                meta.indent(-1)
                                meta.out(`}`, true)
                                */
                                methods.out("constructor() {", true);
                                methods.indent(1);
                                var constr_1 = methods.fork();
                                methods.indent(-1);
                                methods.out("}", true);
                                methods.out("isInPath(code:CodeToConsume) : boolean {", true);
                                methods.indent(1);
                                methods.out("for( let p of code.expressionPath) {", true);
                                methods.indent(1);
                                methods.out("if( (p.nodetype=='" + c.getName() + "') && (p.index === code.index)) return true", true);
                                methods.indent(-1);
                                methods.out("}", true);
                                methods.out("return false", true);
                                methods.indent(-1);
                                methods.out("}", true);
                                methods.out("consume(code:CodeToConsume) : " + c.getName() + " | null {", true);
                                methods.indent(1);
                                // See if we are already in the path
                                // methods.out(``)
                                methods.out("// console.log('Testing " + c.getName() + "', code.expressionPath)", true);
                                methods.out("if( this.isInPath(code)) {", true);
                                methods.indent(1);
                                // methods.out(`console.log('was already in path ${c.getName()}')`, true)
                                methods.out("return null", true);
                                methods.indent(-1);
                                methods.out("}", true);
                                methods.out("code.expressionPath.push({index:code.index, nodetype:'" + c.getName() + "'})", true);
                                methods.out("const start = code.copy()", true);
                                var consumer_1 = methods.fork();
                                // methods.out(`console.log('Matched ${c.getName()}')`, true)
                                methods.out("code.from( start )", true);
                                methods.out("return this", true);
                                methods.indent(-1);
                                methods.out("}", true);
                                body_1.out("NodeType = '" + c.getName() + "'", true);
                                /*
                                MetaData = {
                                  ownTypes: ['Expression', 'ParenExpression'],
                                  structure: [null],
                                  types: ['Expression', 'ParenExpression'],
                                  precedence: 20
                                }
                                */
                                var hadPred_1 = false;
                                var freeVariables_1 = [];
                                var trimOpts_1 = {};
                                var complexity_1 = 0;
                                c.getProperties().forEach(function (p, propIndex) {
                                    trimOpts_1[p.getName()] = { left: false, right: false };
                                    if (p.getName() === 'precedence') {
                                        body_1.out(p.print(), true);
                                        hadPred_1 = true;
                                        return;
                                    }
                                    var t = p.getTypeNode();
                                    body_1.out(p.print(), true);
                                    if (t) {
                                        console.log(' type node -> ', t.print());
                                        var tt = p.getType();
                                        if (tt) {
                                            tt.getTypeArguments().forEach(function (arg) {
                                                var s = arg.getSymbol();
                                                if (s) {
                                                    console.log(' type arg ==> ', s.getEscapedName());
                                                }
                                            });
                                        }
                                    }
                                    if (p.getInitializer()) {
                                        var init = p.getInitializer().getType();
                                        console.log(init.getText());
                                        console.log(p.getInitializer().print());
                                        // console.log( p.getInitializer().getType() )
                                        var initVal = p.getInitializer().print();
                                        var apparentType = init.getApparentType();
                                        var keywordValue = initVal;
                                        if (apparentType) {
                                            var s = apparentType.getSymbol();
                                            if (s) {
                                                if (s.getEscapedName() == 'String') {
                                                    if (!!p.hasQuestionToken()) {
                                                        complexity_1 += 10;
                                                    }
                                                    else {
                                                        complexity_1 += 1;
                                                    }
                                                    if (propIndex === 0 && !p.hasQuestionToken()) {
                                                        complexity_1 += 100;
                                                    }
                                                    if (initVal.length > 3) {
                                                        console.log('LEN ', initVal.length);
                                                        var hasSpace = false;
                                                        if (initVal.charAt(1) == ' ') {
                                                            trimOpts_1[p.getName()].left = true;
                                                            console.log('BEGINS with space');
                                                            hasSpace = true;
                                                        }
                                                        if (initVal.charAt(initVal.length - 2) == ' ') {
                                                            trimOpts_1[p.getName()].right = true;
                                                            console.log('ENDS with space');
                                                            hasSpace = true;
                                                        }
                                                        if (hasSpace) {
                                                            constr_1.out("this." + p.getName() + " = this." + p.getName() + ".trim()", true);
                                                        }
                                                    }
                                                }
                                                // console.log('Apparent Type: ', s.getEscapedName())
                                            }
                                        }
                                        if (isNaN(parseFloat(keywordValue)) && !usedKeywords[keywordValue]) {
                                            keywordList.out("[" + keywordValue + ".trim()] : true,", true);
                                            usedKeywords[keywordValue] = true;
                                        }
                                        consumer_1.out("if(typeof(this." + p.getName() + ") === 'string') {", true);
                                        consumer_1.indent(1);
                                        if (trimOpts_1[p.getName()].left) {
                                            consumer_1.out("start.removeSpace()", true);
                                        }
                                        if (p.hasQuestionToken()) {
                                            consumer_1.out("if(!start.consume(this." + p.getName() + ")) this." + p.getName() + " = '' ", true);
                                        }
                                        else {
                                            consumer_1.out("if( !start.consume(this." + p.getName() + ") ) return null", true);
                                        }
                                        if (trimOpts_1[p.getName()].right) {
                                            consumer_1.out("start.removeSpace()", true);
                                        }
                                        consumer_1.indent(-1);
                                        consumer_1.out("}", true);
                                    }
                                    else {
                                        freeVariables_1.push(p);
                                        consumer_1.out("// WALK: " + p.getName(), true);
                                        complexity_1 += 1;
                                        if (p.getType().getUnionTypes().length > 0) {
                                            consumer_1.out("if(!this." + p.getName() + ") {", true);
                                            consumer_1.indent(1);
                                            var uTypes = p.getType().getUnionTypes().map(function (ist) {
                                                var symb = ist.getSymbol();
                                                if (symb)
                                                    return '' + symb.getEscapedName();
                                                return '';
                                            }).filter(function (v) { return v.length > 0; });
                                            consumer_1.out("// Expect: " + uTypes.join(', '), true);
                                            consumer_1.out("const walk = WalkNode(start, [" + uTypes.map(function (t) { return 'new ' + t + '()'; }).join(', ') + "])", true);
                                            consumer_1.out("if(walk) {", true);
                                            consumer_1.indent(1);
                                            consumer_1.out("this." + p.getName() + " = walk.node as " + p.getTypeNode().print(), true);
                                            consumer_1.out("start.from( walk.code )", true);
                                            consumer_1.indent(-1);
                                            consumer_1.out("} else {", true);
                                            consumer_1.indent(1);
                                            if (!p.hasQuestionToken()) {
                                                consumer_1.out("return null", true);
                                            }
                                            consumer_1.indent(-1);
                                            consumer_1.out("}", true);
                                            /*
                                                  const walk = WalkNode(start, ['ParenExpression', 'Reference'])
                                                  if(walk) {
                                                    this.MetaData.structure[0] = walk.node
                                                    start.from( walk.code )
                                                  } else {
                                                    return null
                                                  }
                                            */
                                            consumer_1.indent(-1);
                                            consumer_1.out("}", true);
                                        }
                                        else {
                                            var tn = p.getTypeNode();
                                            if (tn) {
                                                consumer_1.out("// Expect Type: " + tn.print(), true);
                                                var vname = tn.print();
                                                switch (vname) {
                                                    case 'string':
                                                        consumer_1.out("this." + p.getName() + " = start.consumeString()", true);
                                                        if (!p.hasQuestionToken()) {
                                                            consumer_1.out("if(this." + p.getName() + ".length === 0) return null", true);
                                                        }
                                                        else {
                                                            consumer_1.out("if(this." + p.getName() + ".length === 0) this." + p.getName() + " =''", true);
                                                        }
                                                        break;
                                                    case 'number':
                                                        consumer_1.out("const tmp_" + p.getName() + " = start.consumeNumber()", true);
                                                        if (!p.hasQuestionToken()) {
                                                            consumer_1.out("if(tmp_" + p.getName() + ".length === 0) return null", true);
                                                        }
                                                        consumer_1.out("this." + p.getName() + " = parseInt(tmp_" + p.getName() + ")", true);
                                                        break;
                                                    default:
                                                        consumer_1.out("if(!this." + p.getName() + ") {", true);
                                                        consumer_1.indent(1);
                                                        consumer_1.out("const tmp_" + p.getName() + " = WalkNode(start, [new " + vname + "()])", true);
                                                        consumer_1.out("if(tmp_" + p.getName() + ") {", true);
                                                        consumer_1.indent(1);
                                                        consumer_1.out("this." + p.getName() + " = tmp_" + p.getName() + ".node as " + p.getTypeNode().print(), true);
                                                        consumer_1.out("start.from( tmp_" + p.getName() + ".code )", true);
                                                        consumer_1.indent(-1);
                                                        consumer_1.out("} else {", true);
                                                        consumer_1.indent(1);
                                                        if (!p.hasQuestionToken()) {
                                                            consumer_1.out("return null", true);
                                                        }
                                                        consumer_1.indent(-1);
                                                        consumer_1.out("}", true);
                                                        consumer_1.indent(-1);
                                                        consumer_1.out("}", true);
                                                }
                                            }
                                        }
                                    }
                                    p.getType().getIntersectionTypes().forEach(function (ist) {
                                        console.log(' ist', ist.compilerType);
                                    });
                                    if (p.hasQuestionToken()) {
                                        console.log(p.getName(), ' is optional');
                                    }
                                    p.getType().getUnionTypes().forEach(function (ist) {
                                        var symb = ist.getSymbol();
                                        if (symb)
                                            console.log(' -- ', symb.getEscapedName());
                                        var tt = ist;
                                        if (tt) {
                                            tt.getTypeArguments().forEach(function (arg) {
                                                var s = arg.getSymbol();
                                                if (s) {
                                                    console.log(' type arg ==> ', s.getEscapedName());
                                                }
                                            });
                                        }
                                        // console.log(' union ', ist.getText(), printNode(ist) )
                                    });
                                    /*
                                    t.getAliasTypeArguments().forEach( alias => {
                                      console.log( '| ', alias.getText() )
                                    })
                                    */
                                });
                                if (!hadPred_1)
                                    body_1.out("precedence? : number", true);
                                body_1.out("getFreeCount() : number {", true);
                                body_1.indent(1);
                                body_1.out("return  " + freeVariables_1.length, true);
                                body_1.indent(-1);
                                body_1.out("}", true);
                                // Setting the value of the first etc.
                                var firstVar = freeVariables_1[0];
                                // ${firstVar.getTypeNode().print()}
                                body_1.out("setFirst( value : any )  {", true);
                                body_1.indent(1);
                                if (firstVar) {
                                    body_1.out("this." + firstVar.getName() + " = value", true);
                                }
                                body_1.indent(-1);
                                body_1.out("}", true);
                                body_1.out("getFirst() : any | null {", true);
                                body_1.indent(1);
                                if (firstVar) {
                                    body_1.out("return this." + firstVar.getName(), true);
                                }
                                else {
                                    body_1.out("return null", true);
                                }
                                body_1.indent(-1);
                                body_1.out("}", true);
                                var lastVar = freeVariables_1[freeVariables_1.length - 1];
                                body_1.out("setLast( value : any )  {", true);
                                body_1.indent(1);
                                if (lastVar) {
                                    body_1.out("this." + lastVar.getName() + " = value", true);
                                }
                                body_1.indent(-1);
                                body_1.out("}", true);
                                body_1.out("getLast() : any | null {", true);
                                body_1.indent(1);
                                if (lastVar) {
                                    body_1.out("return this." + lastVar.getName(), true);
                                }
                                else {
                                    body_1.out("return null", true);
                                }
                                body_1.indent(-1);
                                body_1.out("}", true);
                                body_1.out("create() : " + c.getName() + " " + tArgument + " {", true);
                                body_1.indent(1);
                                body_1.out("return new " + c.getName() + " " + tArgument + "()", true);
                                body_1.indent(-1);
                                body_1.out("}", true);
                                variables.out("opComplexity = " + complexity_1, true);
                            }
                        });
                        end.raw("\nlet currDepth = 0\nexport function WalkNode(orig:CodeToConsume, opInList:IASTNode[] = initialList) : ParsedContext | null {\n  if(currDepth++ > 20) {\n    throw 'Max depth'\n  }\n  if( orig.index >= orig.str.length) {\n    return null\n  }\n  const opList = opInList.sort( (left, right) => {\n    return right.opComplexity - left.opComplexity\n  })\n  // console.log('pos', orig.index, orig.str.length, orig.str.substring( orig.index ))\n  const cc = orig.copy()\n  let activeOp:IASTNode = null\n  let cnt = 0\n  let lastCnt = -1\n  \n  while( cnt !== lastCnt ) {\n    lastCnt = cnt\n    for( let op of opList ) {\n      const opInstance = op.create()\n      if(activeOp === null) {\n        const test = opInstance.consume( cc )\n        if( test ) {\n          activeOp = test\n          cnt++\n          break\n        }\n      } else {\n        if( opInstance.getFreeCount() < 2) {\n          continue\n        }\n        if( opInstance.getFreeCount() > 1) {\n          if( opInstance && (opInstance.precedence > activeOp.precedence )) {\n            opInstance.setFirst( activeOp.getLast() )\n            const mRes = opInstance.consume( cc )\n            if(mRes) {\n              activeOp.setLast( mRes )\n              cnt++\n              break\n            }  \n          } else {\n            opInstance.setFirst( activeOp )\n            const mRes = opInstance.consume( cc )\n            if(mRes) {\n              activeOp = opInstance\n              cnt++\n              break\n            }      \n          }        \n        }\n      }\n    }\n  }\n  currDepth--\n  if(activeOp === null) return null\n  return {\n    code: cc,\n    node: activeOp\n  }\n}      \n          ", true);
                    });
                    return [4 /*yield*/, RFs.saveTo('./', false)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.createProject = createProject;
//# sourceMappingURL=parser.js.map