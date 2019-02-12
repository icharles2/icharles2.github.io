/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name){
    //look through animals array
    //return animal object if animal name matches name given
    //return null if the no animal name matches
    //create a for loop to iterate through animals array
    for(var i = 0; i < animals.length; i++){
        var names = animals[i].name;
        //if any name in the array equals the name given return the object
        if(names === name){
            //return the animal object
            return animals[i];
        }
    }
    //otherwise return null
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
    //create a for loop to go through animals array
    for (var i = 0; i < animals.length; i++){
        //store the animal names into a new variable
        var animalName = animals[i].name;
        //console.log(animalName, 'aa');
        //if the animal name and name give match replace it with replacement
        if (animalName === name){
            //using spice to remove the object while replacing it with a new one
            animals.splice(i, 1, replacement);
            //console.log(animals, 'bb');
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    //create a for loop to go through animals array
    //if the animal name matches the name paramter remove it
    for(var i = 0; i < animals.length; i++){
        //storing my animal names into a new variable
        var names = animals[i].name;
        //if the names match remove the name
        if(names === name){
            //using splice to remove the object at the index it matches
            animals.splice(i, 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add (animals, animal){
    //check if the animal object has properties lenght greater than 0
    if(animal['name'].length > 0 && animal['species'].length > 0){
        //create a for loop to iterate through animals array
        for (var i = 0; i < animals.length; i++){
            //store animal names into new variable
            var name1 = animals[i].name;
            //if the names in the array dont match the object push it into the array
            if(animal['name'] !== name1){
                animals.push(animal);
            }
            else if(animal['name'] === name1){
                return animals;
            }
        }
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
