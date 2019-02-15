//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
//create a new array to hold object values
let objValues = [];
//loop through object to get values
for(let key in object){
    //push values into empty array
    objValues.push(object[key]);
}
return objValues;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
//create a variable to store keys
let strValues = [];
//loop through object to get the keys
for(let key in object){
    //push keys into empty array
    strValues.push(key);
}
//turn array to string
//join them with a space to seperate each key name
return strValues.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
 //create a variable to store values
 let myValues = [];
 //loop through object to get values
 for(let key in object){
     //only if the value is a string we want to push it into empty array
     //typeof returns the type of value as a string
     if(typeof object[key] === 'string'){
         //push values into empty array
         myValues.push(object[key]);
     }
 }
 //console.log(myValues);
 //turn array into string using join
 return myValues.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
//determine if the collection is an object or an array
//to see if a collection is an array we can use Array.isArray
if(Array.isArray(collection)){
    return 'array';
}
//typeof returns the type of value as a string
else if(typeof collection === 'object'){
    return 'object';
}
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
//take a word and capitalize it
//only capitalize the first letter
//console.log(string);
return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //console.log(string);
    //turn string into array of words
    let myArray = string.split(' ');
    //console.log(myArray);
    //loop through array of strings to get access to each one
    for(let i = 0; i < myArray.length; i++){
        //console.log(myArray[i]);
        //capitalize the first letter of each word
        myArray[i] = myArray[i][0].toUpperCase() + myArray[i].slice(1);
        //console.log(myArray[i]);
    }
    //console.log(myArray.join(' '));
    return myArray.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//console.log(object);
//Should take an object with a name property and return 'Welcome <Name>!' 
return `Welcome ${object.name[0].toUpperCase() + object.name.slice(1)}!`;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
//console.log(object);
//Should take an object with a name an a species and return '<Name> is a <Species>' 
let name = object.name[0].toUpperCase() + object.name.slice(1);
let species = object.species[0].toUpperCase() + object.species.slice(1);
return `${name} is a ${species}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
//check to see if objects has a noises property
//if it does return them as a string seperated by a space
//if no noises return there are no noises
//console.log(object);
//if it doesnt have a noises property return there are no noises
if(object.hasOwnProperty('noises') === false){
    return 'there are no noises';
}
//if it has a noises property and nothing is inside return there are no noises
else if(object.noises.length === 0){
    return 'there are no noises';
}
//if the length of the noises property is greater than 0 then it's not empty
//we want to return whatever noises in that array as a string
else if(object.noises.length > 0){
    return object.noises.join(' ');
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
//check if the given word is in the given string
//the includes method checks if one string is within another
//includes evaluates to a boolean
// if (string.includes(word)){
//     return true;
// }
//     return false;
   return string.includes(word)? true: false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
// console.log(object);
// console.log(name);
// console.log(object.friends);
//push the name into the friends array 
object.friends.push(name);
//return the object
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
// console.log(name);
// console.log(object);
//check if the object has a name property
//if it doesnt then return false
if(object.hasOwnProperty('friends') === false){
  return false;  
}
//check if the friends array is empty or not
//if the friends array has a length greater than 0 it means something is inside
//if it's not empty compare the the name parameter to names in friends array
//return true if they match
else if(object.friends.length > 0){
    for(let i = 0; i < object['friends'].length; i++){
        if(object['friends'][i] === name){
            return true;
        }
    }
    //if names dont match return false
    //if no names are in the friends array return false
    return false;
}
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
// console.log(name);
 console.log(array);
// let nameList = [];
// let myFriend = [];
// let notMyFriend = [];
// //loop through the array of objects
// for (let i = 0; i < array.length; i++){
// //push the names from each object into nameList array
//     nameList.push(array[i].name);
// //console.log(nameList);
// //check each object friends array to see if it includes our name parameter
// //console.log(array[i].friends);
//     if(array[i].friends.includes(name)){
// //if the friends array has our name parameter we want to add it to our myFriend array
//         myFriend.unshift(nameList[i]);
//         //console.log(myFriend);
//     }
// //if the myFriend array doesn't include any of the names from our nameList
// //and the names in the nameList doesnt match our name parameter then we add the
// //name to our notMyFriend array
//     else if(!myFriend.includes(nameList[i]) && nameList[i] !== name){
//         notMyFriend.push(nameList[i]);
//         //console.log(notMyFriend);
//     }
// }
//     return notMyFriend;

let notFriends = [];
    array.forEach(person =>{
    //console.log(person.name);
    if(person.friends.includes(name) === false && person.name !== name){
        notFriends.push(person.name);
    }
});
return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
//console.log(object, key, value);
//update the property key in object with new value
//if key does not exist create it
object[key] = value;
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//console.log(object, array);
//loop through array to get each element
for(let i = 0; i < array.length; i++){
    //loop through object to get each property
    for(let key in object){
    //compare if the key in object matches the array element
    if(key === array[i]){
        //delete the object key if it matches array element
        delete object[key];
    }
}
}
}



//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
//console.log(array);
// for(let i = 0; i < array.length; i++){
//             //console.log(array[i], 'AA');
//     for(let a = i + 1; a < array.length; a++){
//             //console.log(array[a], 'BB');
//         if(array[i] === array[a]){
//             array.splice(a, 1);
//             console.log(array);
//             i--;
//             console.log(array);
//         }
//     }
// }
//   return array; 
//create an empty array to store elements
let newArray = [];
//loop through our array parameter
for(let i = 0; i < array.length; i++){
    //if the index of our empty array equals -1 that means its not present
    if(newArray.indexOf(array[i]) === -1){
        //if its not present in array then push it into our newArray
        newArray.push(array[i]);
    }
}
return newArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}