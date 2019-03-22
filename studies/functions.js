/**
 * Functions
 * 
 * Functions allow us to create a block of code and use it whenever and however
 * many times we want.
 * 
 * There are 2 phases to using functions:
 * 1. Declaration/Definition - creating the function
 * 2. invocation/calling/executing/applying - using the function
 * 
 * Functions are considered first class objects in javascript because we can
 * assign them to variables, pass them as arguments in other functions and return
 * return them from functions.
 * 
 * To define a function simply means to give your function something to do, a 
 * specific to code to execute.
 * 
 * To create a function you use the keyword function.
 * 
 * Every function has inputs in which we call paramaters that act like placeholders
 * for our arguments. Arguments are what we call our values being passed to a 
 * function. We can think of arguments as passengers and think of arguments as
 * carseats. These paramaters go inside of (). you should try naming
 * your parameters something that has to do with what youre working with. The 
 * code block of a function goes inside of {}. Functions return a single output.
 * By default it returns undefined. We return our data by using the return keyword,
 * followed by the value.
 * 
 * Scope
  * 
  * Scope refers to what variables are accessible and where we can access them.
  * There are 2 types of scope:
  * Global Scope - anyting outside the function scope
  * Local Scope - anything inside the function body.
  * 
  * functions enclose their variables in a scope to protect them from their 
  * parent scope. child scope can access the variables of it's parent scope
  * but the parent scope doesnt have access to the child scope
  * 
  * 
  * Closure
  * closure is a function that retains access to an outer function's variables
  * even after the outer function has returned.
 */
 
 // Named funciton // 
 function add(num1, num2){
     return num1 + num2;
 }
 
 //anonymous function//
 // has no name
 function subtract(number1, number2){
     return () => number1 - number2;
 }
 /*this function being returned is anonymous because it isn't named. it also
   is an example of closure because the anonymous function being returned still
   has access to it's outer function parameter..
 */
 
 // function expression //
 //we create a function expression by assigning a function to a variable.
 const fullName = function(firstName, lastName){
     return firstName + ' ' + lastName;
 };
 /*unlike function declarations function expressions dont get hoisted until 
   they are defined.
 */
 
//function without a parameter//
function print() {
 console.log(' what it do');
}
/*
we can optionally give our function a parameter, but it isn't requried for all 
of them. Every function doesn't have to return anything. if we call this print
function above it will still print the string because the function will still 
execute the code block. If a function takes just one parameter and you pass it 
more than one argument it will just ignore the extra arguments. But if you pass
it less arguments than parameters you have it will assign undefined to those
parameters. if you assign a value to a parameter that value will replace the 
argument if one is not given.
*/

