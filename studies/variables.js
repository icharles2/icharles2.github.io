/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// let //
/**
 * We can also use the keyword let to declare a variable
 * let variablesare are block scoped.
 * meaning you cant access them outside of their scope
 * we can assign and re-assign variables with let just like var
 */
 
 //1.declaration//
 let num1;
 /**
  * at the declaration phase num1 is undefined until we initialize or assign it.
  */
  console.log(num1); // prints undefined
 
 //2.initialization//
 num1 = 1;
 /**
  * now num1 is assigned a value of 1
  */
  console.log(num1); // prints 1
  
  //3.re-assignment//
  num1 = 2;
  /**
   * now the num1 variable is re assigned to the value of 2.
   */
   console.log(num1); // prints 2
   
  /**
   * Constants
   * 
   * we can also declare a variable with the keyword const.
   * just like let const is block scoped meaning you cant access it 
   * outside of its scope.
   * unlike let and var const cannot be re-assigned.
   * const also have to be initialized once its declared
   * you cannot leave const undefined
   */
   
   //1.declaration//
   const numbers = [1,2,3,4,5,6,7,8,9,10];
   /**
    * const numbers will always point to this array, it cannot be assigned another
    * value.
    */
    
    // Hoisting //
/**
 * hoisting refers to what goes on in the backgroud of javascript. variable
 * declarations and function declarations get hoisted to the top of the scope
 * they are defined. Only variable names get hoisted. function names and body
 * get hoisted. function expressions dont get hoisted. so basically the 
 * javascript compiler goes through the code twice. first hoisting all variable
 * and function declarations into memory. then the second time it goes through 
 * executing the code.
 */
 
 // function hoisting //
 function greeting(name) {
  console.log("Hello World my name is " + name);
}

greeting('I.C');  //returns => 'Hello World my name is I.C'
// this is how we would expect to write the code for this to work. //
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
favoriteSnack("mangoes"); //returns => 'My favorite snack to eat is mangoes'

function favoriteSnack(snack) {
  console.log("My favorite snack to eat is " + snack);
}
/** 
 * even though i call the function before it's written, it still works because of
 * hoisting and the execution context.
 */
 //////////////////////////////////////////////////////////////////////////////
 //////////////////////////////////////////////////////////////////////////////
 
 // variable hoisting //
console.log(dog); // returns => undefined 
var dog;
dog = 'Kiko';
//Because the variable is declared and initialized after it is used it returns undefinend
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
cat = 'morocco';
console.log(cat); // returns => 'morocco'
var cat;
//Becaue the variable is declared before we used it we still get the value although
//we dont initialize it until after.