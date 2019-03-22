////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  //create a empty array to store numbers between start and end
  let nums = [];
  //return an empty array if given the same number
  //since there isnt a range between the same number
  if(start === end){
    return nums;
  }
  //if no step is given increment by one
  //push the numbers into an empty array
  else if(start < end && !step){
    for(let i = start; i <= end; i++){
      nums.push(i);
    }
  }
  //if a step is given increment the index by the step each iteration
  //push the numbers between start and end into empty array
  else if(start < end && step > 0){
    for(let i = start; i <= end; i += step){
      nums.push(i);
    }
  }
  //if step is negative just print the empty array
  else if(start < end && step < 0){
      console.log(nums);
    }
  return nums;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  // //create a variable to to keep track of sum
  // let sum = 0;
  // //loop through array to get each number
  // for (let i = 0; i < array.length; i++){
  //   //add each number to sum
  //   sum += array[i];
  // }
  // return sum;
  let sum = array.reduce((acc, num) => acc + num, 0);
  return sum;
  
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  //create a empty array to store elements
  let newArray = [];
  //loop through array backwards
  for(let i = array.length -1; i > -1; i--){
    //push elements into array as we loop in reverse
    newArray.push(array[i]);
  }
  return newArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  //console.log(array, 'AA');
  //loop through half the array
  //use math floor to round down to the nearest whole number if .length is odd
 for(let i = 0; i < Math.floor(array.length / 2); i++){
   //console.log(array[i], 'BB');
   //store half of array in a variable
   var old = array[i];
   //re assign array[i] with its mirror image
   array[i] = array[array.length - 1 - i];
   //console.log(array[i], 'CC');
   //put value from variable in place where the mirror image used to be
   array[array.length - 1 - i] = old;
   //console.log(old, 'DD');
 }
  //console.log(array, 'EE');
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  //set list to null so our last rest value would be null
  let list = null;
  //loop backwards through array so the first element can contain the elements 
  //after it
  for(let i = array.length - 1; i > -1; i--){
    //reassign list to an object that contains two key value pairs 
    //value: which is the value of the index in the array
    //rest: which is whatever list is assigned at the moment
    list = {value: array[i], rest: list};
    //console.log(list);
  }
  return list;
  
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
//console.log(list, 'AA');
let myArray = [];
//loop through the list
//reassign i to rest each iteration 
for(let i = list; i; i = i.rest){
  // console.log(i);
  // console.log(i.value);
  //push the values into new array each iteration
  myArray.push(i.value);
}
//console.log(myArray);
  return myArray;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
return {value: element, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num) {
  //console.log(list);
  //if no such element return undefined
  if(!list){
    return undefined;
  }
  //if num is 0 return the first element
  else if(num === 0){
    return list.value;
  }
  else{
    return nth(list.rest, num - 1);
  }
  

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(pa1, pa2) {

  if(pa1 === pa2){
    return true;
  }
  else if(pa1 && pa2 && typeof pa1 === 'object' && typeof pa2 === 'object'
  && Object.keys(pa1).length === Object.keys(pa2).length){
    if(Array.isArray(pa1) === Array.isArray(pa2)){
    for(let key in pa1){
      if(key in pa2){
        if(!deepEqual(pa1[key], pa2[key])){
          return false;
        }
      }
      else{
        return false;
      }
    }
    return true;
    }
  }
    return false;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
