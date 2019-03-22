
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
//console.log(num);
//create a variable to store a empty string
let myTriangle = '';
//loop through the num parameter
for(let i = 0; i < num; i++){
  //console.log(i);
  //add # to myTriangle each iteration
 myTriangle += '#';
 //print # at each iteration
 console.log(myTriangle);
}

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  //create a loop to print numbers
  for(let i = 1; i <= 15; i++){
    //console.log(i);
    //if number is divisible by 3 and 15 print fizzbuzz
    if(i % 3 === 0 && i % 5 === 0){
      console.log('fizzbuzz');
    }
    //if number is only divisible by 3 print fizz
    else if(i % 3 === 0){
      console.log('fizz');
    }
    //if number is only divisible by 5 print buzz
    else if(i % 5 === 0){
      console.log('buzz');
    }
    //otherwise just print the number
    else{
      console.log(i);
    }
  }
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {
// console.log(param);
//create a variable to store an empty string
var board = '';
//loop through parameter
//this first loop is for every new line
for(var i = 0; i < number; i++){
  //console.log(i);
  //this second loop is for the characters on the line
  for(var a = 0; a < number; a++){
    //console.log(a);
    //add a empty space if both conditions are true otherwise add a #
    board += (a % 2 === 0) === (i % 2 === 0)? ' ': '#';
  }
      board += '\n';
}
  console.log(board);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
