
export type BinaryExpressionPart = Token | ParenExpression | TNumber | MemberAccessOperator
export type ArgType = Token | TNumberToken | StringLiteral
export type NTypes = TNumberToken | StringLiteral
export type ExpressionType =  SimpleArrowFunctionExpression 
  | ArrowFunctionExpression 
  | NewExpressionWithArgs 
  | NewExpressionWithoutArgs 
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

  
// SimpleArrowFunctionExpression |

export class TypeDefinition {
  start = ' : '
  value: Token
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
  end = ' ) '
  precedence = 20
}

export class CallParameterListTail {
  start = ','
  head: ExpressionType
  tail?:CallParameterListTail
}

export class CallParameterList {
  start = ' ( '
  head?:ExpressionType
  tail?:CallParameterListTail
  end = ' ) '
  precedence = 20
}

export class NewExpressionWithArgs {
  start = ' new '
  className: Token
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
  params:ParameterList
  body: StatementBlock
}

export class SimpleArrowFunctionExpression {
  param:Token
  spaceBefore? = ' '
  arrow = '=>'
  spaceAfter? = ' '
  expression: ExpressionType
  spaceAfter2? = ' '
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

export type Statement = ConstDeclaration | IfStatement | ReturnStatement

export class NextStatement {
  space = ' ; '
  statement?: Statement
  next?: NextStatement
}

export class StatementBlock {
  start = '{ '    
  statement?: Statement
  next?: NextStatement  
  end = ' }'
}


/*
export class TrueLiteral  {
  spaceBefore? = ' '
  tag = 'true'  
  spaceAfter? = ' '
}
*/
/*
export class FalseLiteral  {
  spaceBefore? = ' '
  tag = 'false'  
  spaceAfter? = ' '
}
*/



export class TNumber  {
  spaceBefore? = ' '
  value:number  
  spaceAfter? = ' '
}

export class Token  {
  name:string  
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
  spaceBefore? = ' '
  op = '+'
  spaceAfter? = ' '
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

