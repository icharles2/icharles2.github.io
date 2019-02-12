/**
 * Datatypes 
 * 
 * a datatype is a type of value in javascript. There are two kinds of datatypes,
 * simple/primitive and complex.
 */
 
 /** 
  * Primitive datatypes: 
  * 
  * simple datatypes are immutable. they do not hold, collect or aggregate other
  * values. Operations on simple datatypes return new simple datatypes, they do
  * not alter the original value.
  * 
  * Copy by value:
  * simple datatypes are copied by value, meaning that if you copy that value,
  * you're making an exact copy of that value without altering the original 
  * value.
  */
  
  // Simple datatypes //
  
  //1. Number //
  //numeric datatype
  //the largest primitive type, taking up all 8 bytes of memory.
  var num1 = 3;
  
  //Infinity// 
  //the largest positive number
  //any number multiplied by Infinity equals Infinity.
  //any number divided by Infinity equals 0
  console.log(55 * Infinity);//=> Infinity
  console.log(55 / Infinity);//=> 0
  
  //-Infinity//
  /**
   * any positive number multiplied by -Infinity is -Infinity
   * any negative number multiplied by -Infinity is positive Infinity
   * 0 multiplied by -Infinity is NaN
   * NaN multiplied by -Infinity is NaN
  */
  console.log(Infinity * -Infinity);//=> -Infinity
  console.log(0 * -Infinity)// => NaN
  
  //2. String //
  //character datatype
  var str = 'What it do';
  
  //3. Boolean //
  //true or false
  var myAnswer = true;
  
  //4. NaN //
  //not a number
  typeof NaN ;// => 'number'
  //Note: NaN is unequal to itself //
  
  //5. undefined //
  //no-value, uninitialized
  var count; // => undefined
  
  //6. Null //
  //no-value, nullififed by programmer
  var noVal = null;
  //Note: the difference between null and undefined is that null is intentionally
  //      set by the programmer.
  
  // copy by value // 
  var name1 = 'ian';
  var name2 = name1; //the value stored in name1 is copied into name2
  
  name2 = 'I.C'; //changing the value in name2 doesnt effect name1
  console.log(name1); // prints => ian
  
  /**
   * Complex datatypes
   * 
   * complex datatypes do not have a fixed size, which means it can't be stored
   * directly into the 8 bytes of memory associated with a variable.
   * 
   * Copy by refrence:
   * when a complex datatype is stored it creates a reference to that dataype,
   * which means it points to a memory address instead of the data value itself.
   * when it is copied instead of making a copy of the datatype it just 
   * points to that same reference.
   */
   
   // Complex datatypes //
   
   //1. Object //
   //objects are collections of key/value pairs
   //objects can store any data type including other objects
   //to access objects we can use bracket or dot notation
   //each key is a string and should relate to its value in someway
   var theAlley = {
       City: 'New Orleans',
       Address: '8128 1/2 Oak St',
       Gear: ['hats', 'hoodies', 't-shirts']
   };
   console.log(theAlley.City);// prints => New Orleans
   console.log(theAlley['Address']);
   
   //adding a key value pair to an object
   //javascript allows us to add properites on the fly
   theAlley.Brand = 'The Wandering Aura';//adds the Brand key to the object
   theAlley['Brand'] = 'The Wandering Aura';//adds the new key/value pair to the object
   
   //delete property //
   //to delete a property you use the keyword delete
   delete theAlley.City;
   console.log(theAlley.City)//=> undefined
   
   //2. Array //
   //Arrays are 0 indexed lists.
   //each index is the position of the value in the array
   //arrays start indexing/ordering at 0 instead of 1
   //arrays can store any datatype including other arrays
   //we access arrays using bracket notation
   //every array has length property which tells you how many elements are inside
   var myArray = ['yoo', true, [1,2,3,4,5]];
   console.log(myArray[0]);// => yoo
   //to get the last index of an array we use .length - 1
   console.log(myArray[myArray.length - 1]);//=> [1,2,3,4,5]
   
   //3. Function //
   //functions are a block of code that we can use whenever we want and however
   //many times we want.
   //functions are created with the keyword function and can be named or 
   //anonymous. inside each {} of a function goes the body to be executed
   //functions also take parameters which acts as place holders.
   //functions can return other datatypes. if nothing is returned the function
   // returns undefined
   function add(num1, num2){
       return num1 + num2;
   }