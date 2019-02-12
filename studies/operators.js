/**
 * Operators
 * 
 * In JavaScript operators act on our datatypes like assigning them to a variable
 * or comparing them, or include them in arithmetic operations. Operators are 
 * classed by what they can do and how many operands they requrie. Operands are
 * the values that operators act on.
 * Unary - one value
 * Binary - two values
 * Ternary - three values
 */
 
 // Assignment Operators //
 // Assigns a value to its left operand based on the value of its right operand
let x = 3;
let y = 4;
// Assignment //
 x = y;	
//Addition assignment //	
 x += y;

//Subtraction assignment //	
 x -= y;	

// Multiplication assignment //	
 x *= y;	

// Division assignment //	
 x /= y;	

// Remainder assignment //	
 x %= y;	

// Arithmetic Operators //
// Take number values as its operands and return a number value
// Addition //
x + y;

// Subtraction //
x - y;

// Multiplication //
x * y;

// Division //
x / y;

// Remainder //
x % y;

// Comparison Operators //
// compares two values and returns a boolean

// Greater than //
x > y;

// Less than //
x < y;

// Greater than or equal to //
x >= y;

// Less than or equal to //
x <= y;

// Loosely equal //
//converts the operands if they are not the same type
x == y;

// Strictly equal //
//no type conversion
x === y;

// Inequality //
//returns true if operands are not equal, does type  conversion
x != y;

// Strict Inequality //
//returns true if operands are strictly not equal with no type conversion
x !== y;

// Logical Operators //

// logical And Operator //
//Both condtions must be true
(1 === 3 && 4 < 5);

// logical Or Operator //
//one or the other must be true
(2 < 6 || 7 > 4);

// bang operator //
//flips the truthiness of a value
console.log(!true); // => prints false

// double bang operator //
//if a value is falsey it will return false other wise true
console.log(!!0); // => prints false
console.log(!!1); // => prints true

// Unary Operators //
// bang operator //
//flips the truthiness of a value
console.log(!true); // => prints false

// typeof operator //
//returns the type of value as a string
console.log(typeof 6); //=> prinst 'number'
console.log(typeof 'ian');//=> 'string'

// ternary operator //
//the only operator that takes 3 operands
//shortcut for if else statement
9 < 10? true: false;