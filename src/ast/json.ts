export type ExpressionType = 
  | Token 
  | Number
  | ObjectLiteral
  | ArrayLiteral
  | TrueLiteral
  | FalseLiteral
  | StringLiteral
  | NullLiteral

export class TrueLiteral  { tag = ' true ' }
export class FalseLiteral  { tag = ' false ' }
export class NullLiteral  { tag = ' null ' }
export class Token  { name:string }

export class Number  {
  value_regexp = /^-?(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?/
  value:number  
}

export class StringLiteral  {
  start = ' "'
  value_regexp = /^(?:[^\\"]|\\(?:[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*/
  value:string 
  end = '" '
}
  
export class ObjectLiteralEntry {
  key:StringLiteral
  separator = ' : '
  value: ExpressionType
}

export class ObjectLiteralTail {
  start = ' , '
  head:ObjectLiteralEntry
  tail?:ObjectLiteralTail
}

export class ObjectLiteral {
  begin = ' { '
  head?: ObjectLiteralEntry
  tail?: ObjectLiteralTail
  end = ' } '
}

export class ArrayLiteral {
  begin = ' [ '
  head?: ExpressionType
  tail?: ArrayLiteralTail
  end = ' ] '
}

export class ArrayLiteralTail {
  start = ' , '  
  value: ExpressionType
  tail?: ArrayLiteralTail
}

export class Root {
  value: ExpressionType
}
