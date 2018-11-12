// Allowed types for the binary expression...
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
  

// SimpleArrowFunctionExpression |

export class TypeDefinition {
  spaceBefore? = ' '
  start = ':'
  spaceAfter? = ' '
  value: Token
}

export class ParamInitializer {
  spaceBefore? = ' '
  start = '='
  spaceAfter? = ' '
  value: ExpressionType
  precedence = 3
}

export class ParameterListItemTail {
  start = ','
  head: Token
  typedef?:TypeDefinition
  initializer?:ParamInitializer
  tail?:ParameterListItemTail
}

export class ParameterList {
  spaceBefore? = ' '
  start = '('
  head?:Token
  typedef?:TypeDefinition
  initializer?:ParamInitializer
  tail?:ParameterListItemTail
  end = ')'
  spaceAfter? = ' '
  precedence = 20
}

export class CallParameterListTail {
  start = ','
  head: ExpressionType
  tail?:CallParameterListTail
}

export class CallParameterList {
  start = '('
  head?:ExpressionType
  tail?:CallParameterListTail
  end = ')'
  precedence = 20
}

export class NewExpressionWithArgs {
  spaceBeforeNew? = ' '
  start = 'new'
  spaceBefore? = ' '
  className: Token
  params:CallParameterList
  precedence = 19
}

export class NewExpressionWithoutArgs {
  spaceBeforeNew? = ' '
  start = 'new'
  spaceBefore? = ' '
  className: Token
  precedence = 18
}

export class FunctionExpression {
  start = 'function'
  name:Token
  params:ParameterList
  startBlock = '{'
  endBlock = '}'
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

export class ArrayLiteralEntry {
  spaceFill? = ' '
  value: ExpressionType
}

export class ArrayLiteralTail {
  spaceFill? = ' '
  start = ','  
  head: ArrayLiteralEntry
  tail?: ArrayLiteralTail
}

export class ArrayLiteral {
  begin = '['
  head?: ArrayLiteralEntry
  tail?: ArrayLiteralTail
  end = ']'
}

export class ConstDeclaration {
  constKeyword = 'const'
  spaceBefore? = ' '
  name:Token
  typedef?: TypeDefinition
  spaceAfter? = ' '
  assignOp = '='
  spaceBeforeExpr? = ' '
  value: ExpressionType
  statementEnd? = ';'
}

export class TNumber  {
  spaceBefore? = ' '
  value:number  
  spaceAfter? = ' '
}

export class Token  {
  spaceBefore? = ' '
  name:string  
  spaceAfter? = ' '
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
  spaceBefore? = ' '
  op = '*'
  spaceAfter? = ' '
  right: BinaryExpressionPart  
  precedence = 14
}

export class ParenExpression {
  leftParen = '('
  expr:ExpressionType  
  rightParen = ')'
}
