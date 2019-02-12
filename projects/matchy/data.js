/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'dog';
animal['name'] = 'roofus';
animal.noises = [];
//console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
noises[1] = 'roof';
noises[0] = 'hmph';
noises.push('bark');
noises.unshift('arrgh');
noises[noises.length] = 'haa';
//console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
//console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
//console.log(animals);
var duck = {
    species: 'duck',
    name: 'mike',
    noises: ['quack', 'honk', 'sneeze', 'whoosh']
};

animals.push(duck);
//console.log(animals);

var cat = {
    species: 'cat',
    name: 'nick',
    noises: ['meow', 'prrr', 'mmnn', 'claa']
};

animals.push(cat);
//console.log(animals);

var lizard = {
    species: 'lizard',
    name: 'sam',
    noises: ['clik', 'tik', 'sik', 'pik']
};

animals.push(lizard);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//i chose to use an array because i can store my list in order
var friends = [];
//create a function that takes our animals array
//and returns an index of a random element
function getRandom(array){
    return Math.floor(Math.random() * array.length);
}

//push a random name into the friends array
friends.push(animals[getRandom(animals)].name);
console.log(friends);

//add friends as a property named friends to a animal
duck.friends = friends;
console.log(duck);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
