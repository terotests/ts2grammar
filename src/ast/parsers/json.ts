// beginning of the file

// class TrueLiteral
// consume tag trim left 

// class FalseLiteral
// consume tag trim left 

// class NullLiteral
// consume tag trim left 

// class Token
// *** consume Type Node string

// class Number
// *** consume Type Node number

// class StringLiteral
// consume start trim left 
// *** consume Type Node string
// consume end trim left 

// class ObjectLiteralEntry
// *** consume Type Node StringLiteral
// consume separator trim left 
// consume value
// --> Having Token, Number, ObjectLiteral, ArrayLiteral, TrueLiteral, FalseLiteral, StringLiteral, NullLiteral

// class ObjectLiteralTail
// consume start trim left 
// *** consume Type Node ObjectLiteralEntry
// *** consume Type Node ObjectLiteralTail

// class ObjectLiteral
// consume begin trim left 
// *** consume Type Node ObjectLiteralEntry
// *** consume Type Node ObjectLiteralTail
// consume end trim left 

// class ArrayLiteral
// consume begin trim left 
// consume head
// --> Having Token, Number, ObjectLiteral, ArrayLiteral, TrueLiteral, FalseLiteral, StringLiteral, NullLiteral
// *** consume Type Node ArrayLiteralTail
// consume end trim left 

// class ArrayLiteralTail
// consume start trim left 
// consume value
// --> Having Token, Number, ObjectLiteral, ArrayLiteral, TrueLiteral, FalseLiteral, StringLiteral, NullLiteral
// *** consume Type Node ArrayLiteralTail

// class Root
// consume value
// --> Having Token, Number, ObjectLiteral, ArrayLiteral, TrueLiteral, FalseLiteral, StringLiteral, NullLiteral
const complexities = {
  "TrueLiteral": 111,
  "FalseLiteral": 111,
  "NullLiteral": 111,
  "Token": 2,
  "Number": 2,
  "StringLiteral": 122,
  "ObjectLiteralEntry": 136,
  "ObjectLiteral": 742,
  "ObjectLiteralTail": 488,
  "ArrayLiteral": 352,
  "ExpressionType": 1,
  "ArrayLiteralTail": 228,
  "Root": 4
}
