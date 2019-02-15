/**
 * String Manipulation
 * 
 * string values work with the cocatenation operator (+). the concatenation 
 * operator takes two strings and join them together makion one new string.
 * 
 * strings are immutable meaning they can't be changed, but there are plenty
 * methods we can use to alter strings.
 */
 
 // Concatenation //
 var firstName = 'Gucci';
 var lastName = 'Monzilla';
 console.log(firstName + ' ' + lastName); // => prints Gucci Monzilla
 
 var greeting = 'Hello,';
 greeting += ' how yall doing?';
 console.log(greeting);// => Hello, how yall doing?
 
 
 // String Methods //
 
 // toUpperCase() //
 //we can force a string to print all capital letters
 firstName.toUpperCase(); // => GUCCI
 
 // toLowerCase() //
 //we can force a string to print all lower case letters
 lastName.toLowerCase(); // => monzilla
 
 // split //
 //we can split a string into an array
 firstName.split(''); //=> [G, u, c, c, i]
 
 // slice //
 /*slice cuts a portion of a string and returns a new string of that portion
 it has a start and end index. it goes up to the end index but doesnt't include
 it
 */
 firstName.slice(1, 3); //=> uc
 firstName.slice();// Gucci
 
 // indexof //
 //returns the index within the string of the first occurence of the specific value
 //returns -1 if the value is not found
 //case sensitive
 var heSaid = 'where are all the groceries i just bought ?';
 heSaid.indexOf('groceries'); // 18
 heSaid.indexOf('food'); // -1
 
 // includes //
 //determines if one string includes another returning a boolean
 //case sensitive
 var words = 'what are we doing today';
 words.includes('are');// => true
 words.includes('make');// => false
 
 // charAt //
 //returns a string of a specific character at that index
 //returns a empty string if index is out of range
 //if no index is provided, it starts at 0
 words.charAt(3); // => t
 words.charAt(99); // => ''
 
 // replace //
 //returns a new string with all or some matches replaced
 var myWords = words.replace(/doing/gi, 'making');
 console.log(myWords);//what are we making today