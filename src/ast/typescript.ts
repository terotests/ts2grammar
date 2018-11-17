export type BinaryExpressionPart = Token | ParenExpression | TNumber | MemberAccessOperator
export type ArgType = Token | TNumberToken | StringLiteral
export type NTypes = TNumberToken | StringLiteral
export type ExpressionType =  SimpleArrowFunctionExpression 
  | ArrowFunctionExpression 
  | NewExpressionWithoutArgs 
  | NewExpressionWithArgs 
  | MemberAccessOperator 
  | PlusExpression 
  | MultiplyExpression 
  | ParenExpression 
  | Token 
  | NTypes
  | ObjectLiteral
  | ArrayLiteral
  | FunctionExpression
  | TernaryOperator
  | ConditionalExpression
  | FnCallWithArgs
  | Assing
  | CallExpressionWithArgs
  | TrueLiteral
  | FalseLiteral

export type TypeDefs = SimpleTypeDefinition | ArrowFnType
  
// SimpleArrowFunctionExpression |

export class TypeDefinitionUnion {
  start = ' | '
  value: TypeDefs
  union?: TypeDefinitionUnion
}

export class SimpleTypeDefinition {
  value: Token
}

export class Assing {
  to:Token
  arrow = ' = '
  value:ExpressionType
}

export class ArrowFnType {
  async? = 'async'
  params:ParameterList
  arrow = ' => '
  typdef:TypeDefs
}

export class ExtendsKeyword {
  kw = ' extends '
  typename?: TypeDefs
}

export class TypeDefinition {
  start = ' : '
  value: TypeDefs
  union?: TypeDefinitionUnion
}

export class NextGenericsDefinition {
  comma = ' , '
  value: Token
  next?: NextGenericsDefinition
}

export class GenericsDefinition {
  value: Token
  extends?: ExtendsKeyword
  next?: NextGenericsDefinition
}

export class Generics {
  start = ' < '
  value: GenericsDefinition
  end = ' > '
}

export class ParamInitializer {
  start = ' = '
  value: ExpressionType
  precedence = 3
}

export class ParameterListItemTail {
  start = ' , '
  head: Token
  typedef?:TypeDefinition
  initializer?:ParamInitializer
  tail?:ParameterListItemTail
}

export class ParameterList {
  start = ' ( '
  head?:Token
  typedef?:TypeDefinition
  initializer?:ParamInitializer
  tail?:ParameterListItemTail
  end = ' )'
  precedence = 20
}

export class CallParameterListTail {
  start = ' , '
  head: ExpressionType
  tail?:CallParameterListTail
}

export class CallParameterList {
  start = ' ( '
  head?:ExpressionType
  tail?:CallParameterListTail
  end = ' )'
  precedence = 20
}

export class NewExpressionWithArgs {
  start = ' new '
  className: Token
  params:CallParameterList
  precedence = 19
}

export class ClassMethodDeclaration {
  name:Token
  generics?: Generics
  params:ParameterList
  returnType?:TypeDefinition
  body: StatementBlock
}

export class ClassPropertyDeclaration {
  name: Token
  init?: ParamInitializer
}

export type ClassBodyType = ClassMethodDeclaration | ClassPropertyDeclaration

export class ClassBodyStatement {
  begins = ' ; '
  head: ClassBodyType
  tail?: ClassBodyStatement
}

export class ClassDeclaration {
  start = ' class '
  className: Token
  extends?: ExtendsKeyword
  begin = ' { '
  // property?: ClassPropertyDeclaration
  head?: ClassBodyType
  tail?: ClassBodyStatement
  end = ' } '
}

export class CallExpressionWithArgs {
  obj: ExpressionType
  params:CallParameterList
  precedence = 19
}


export class FnCallWithArgs {
  name: Token
  params:CallParameterList
  precedence = 19
}

export class NewExpressionWithoutArgs {
  start = ' new '
  className: Token
  precedence = 18
}

export class FunctionExpression {
  start = ' function '
  name:Token
  generics?: Generics
  params:ParameterList
  returnType?:TypeDefinition
  body: StatementBlock
}

export class SimpleArrowFunctionExpression {
  param:Token
  arrow = ' => '
  expression: ExpressionType
}

export class ArrowFunctionExpression {
  async? = 'async'
  params:ParameterList
  spaceBefore? = ' '
  arrow = '=>'
  spaceAfter? = ' '
  expression: ExpressionType
  spaceAfter2? = ' '
}

export class ObjectLiteral {
  begin = '{'
  spaceBefore? = ' '
  head?: ObjectLiteralEntry
  tail?: ObjectLiteralTail
  spaceAfter? = ' '
  end = '}'
}

export class ObjectLiteralEntry {
  spaceFill? = ' '
  key:Token
  spaceBefore? = ' '
  separator = ':'
  spaceAfter? = ' '
  value: ExpressionType
}

export class ObjectLiteralTail {
  spaceFill? = ' '
  start = ','
  head:ObjectLiteralEntry
  tail?:ObjectLiteralTail
}

export class ArrayLiteral {
  begin = '['
  spaceFill? = ' '
  head?: ExpressionType
  tail?: ArrayLiteralTail
  end = ']'
}

export class ArrayLiteralTail {
  spaceFill? = ' '
  start = ','  
  spaceFillBeforeValue? = ' '
  value: ExpressionType
  tail?: ArrayLiteralTail
}


export class ConstDeclaration {
  constKeyword = ' const '
  name:Token
  typedef?: TypeDefinition
  assignOp = ' = '
  value: ExpressionType
}


export class ReturnStatement {
  returnKeyword = ' return '
  value?: ExpressionType
}

export class ElseBlock {
  elseKeyword = ' else '
  elseBlock: StatementBlock
}

export class IfStatement {
  ifKeyword = ' if '
  leftParen = ' ( '
  condition:ExpressionType  
  rightParen = ' ) '
  thenBlock: StatementBlock
  elseBlock?: ElseBlock
}

export type Statement = ConstDeclaration | IfStatement | ReturnStatement | Assing | FunctionExpression | ClassDeclaration

export class NextStatement {
  space = ' ; '
  statement?: Statement
  next?: Next
}
export class NextStatementNl {
  space? = ' \n '
  statement?: Statement
  next?: Next
}

export type Next = NextStatement | NextStatementNl

export class StatementBlock {
  start = ' { '    
  statement?: Statement
  next?: Next  
  end = ' }'
}

export class StatementBlock2 {
  start = ' { '    
  statement?: Statement
  next?: Next  
  end = ' } '
}



export class TrueLiteral  {
  tag = ' true '  
}

export class FalseLiteral  {
  tag = ' false '  
}




export class TNumber  {
  spaceBefore? = ' '
  value:number  
  spaceAfter? = ' '
}

export class Token  {
  name:string 
  questionmark? = '?'
}

export class TNumberToken  {
  prefix? = '-'
  value:number  
}

export class StringLiteral  {
  start = '"'
  value:string  
  end = '"'
}

export class MemberAccessOperator {
  spaceBefore? = ' '
  left: Token
  op = '.'
  right: Token  
  spaceAfter? = ' '
  precedence = 19
}

export class PlusExpression {
  left: BinaryExpressionPart
  op = ' + '
  right: BinaryExpressionPart  
  precedence = 13
}

export class MultiplyExpression {
  left: BinaryExpressionPart
  op = ' * '
  right: BinaryExpressionPart  
  precedence = 14
}

export class ConditionalExpression {
  left: BinaryExpressionPart
  op = ' < '
  right: BinaryExpressionPart  
  precedence = 11
}

export class ParenExpression {
  leftParen = ' ( '
  expr:ExpressionType  
  rightParen = ' ) '
}

export class TernaryOperator {
  condition:ExpressionType
  start = ' ? '
  whentrue?: ExpressionType
  separator = ' : '
  whenfalse?: ExpressionType
  precedence = 4
}

