export type ExpressionType = 
  | Token 
  | Number
  | ObjectLiteral
  | ArrayLiteral
  | TrueLiteral
  | FalseLiteral
  | StringLiteral

export class TrueLiteral  { 
  tag = ' true ' 
}
export class FalseLiteral  { 
  tag = ' false ' 
}

export class Token  {
  name:string 
}

export class Number  {
  spaceBefore? = ' '
  value:number  
  spaceAfter? = ' '
}

export class StringLiteral  {
  start = '"'
  value:string  
  end = '"'
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
