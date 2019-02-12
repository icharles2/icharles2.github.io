// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //to iterate through an array use a for loop
  //start from the beginning of array
  //print all the values
  for(let i = 0; i < array.length; i++){
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //to iterate through an array use a for loop
  //start from the end of array
  //to get last element in array use .length - 1
  //.length starts counting from 1 while array index start at 0
  //print all the values in reverse
  for(let i = array.length - 1; i > -1; i--){
    console.log(array[i]);
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //to iterate through an object we use a for in loop
  //for in loop pulls out all the keys and values
  //create an empty array to store the object keys
  let arrKeys = [];
  for(let key in object){
    //console.log(key);
    arrKeys.push(key);
  }
  
  return arrKeys;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //to iterate through an object we use a for in loop
  //for in loop pulls out all the  keys and values
  //print all the keys in the object
  for(let key in object){
    console.log(key);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //to iterate through an object we use a for in loop
  //for in loop pulls out all the keys and values
  //create an empty array to store the object values
  let arrValues = [];
  for(let key in object){
    //console.log(key);
    arrValues.push(object[key]);
  }
  
  return arrValues;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
   //to iterate through an object we use a for in loop
  //for in loop pulls out all the  keys and values
  //print all the values in the object
  for(let key in object){
    console.log(object[key]);
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
   //to iterate through an object we use a for in loop
  //for in loop pulls out all the  keys and values
  //create an empty array to store object properties
  //arrays have a length property
  let myArr = [];
  for(let key in object){
    myArr.push(object[key]);
  }
  
  return myArr.length;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //to iterate through an object we use a for in loop
  //for in loop pulls out all the  keys and values
  //create an empty array to store object properties
  //you can loop bakcwards through an array to get the object values in reverse
  let arr1 = [];
  for(let key in object){
    arr1.push(object[key]);
  }
  for(let i = arr1.length - 1; i > -1; i--){
    console.log(arr1[i]);
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
    module.exports.getObjectValues = getObjectValues;
}
