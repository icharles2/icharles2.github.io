/**
 * Loops
 * 
 * Loops allow us to repeat a specific piece of code as many times as we like.
 * They help us iterate through collections by pulling out each value one by one.
 */
 
 // for loop //
 /**
  * for loops are good for looping over arrays
  * to create a for loop you use the keyword for 
  * for loops have three statements
  * 1.starting condition.. let i = 0;
  * 2.stopping condition.. i <= 100;
  * 3.conditon in which to increment.. i += 2
  * All these conditions will go into parenthesis seperated by a ;
  */
  //looping through numbers forward
  for(let i = 1; i <= 100; i++){
   console.log(i); //=> prints numbers 1 to 100
  }
  //looping through numbers backwards
  for(let i = 100; i >= 1; i--){
   console.log(i);//=>prints numbers 100 to 1
  }
  //looping through array
  var petNames = ['roofus', 'kiko', 'prince', 'jon jon'];
  
  for(let i = 0; i < petNames.length; i++){
      console.log(petNames[i]); //prints all the names in the petNames array
  }
  
  // we can also loop backwards through an array
  for(let i = petNames.length - 1; i > -1; i--){
      console.log(petNames[i]);//prints all the names in reverse
  }
  
  // for in loop //
  /**
   * // for in loops are good for looping over objects //
   * there are 2 steps to defining a for in loop:
   * 1. How will you refer to your keys?
   * 2. Which Object do you want to loop over?
   */
   
   var athletes = {
       kobe: 'Kobe Bryant #24',
       shaq: 'Shaquille O\'neal #34',
       lebron: 'Lebron James #23',
       jordan: 'Michael Jordan #23'
   };
   
   for(let player in athletes){
       console.log(player);//prints all the keys
   }
   /**
    * Although you can access an object using both bracket and dot notation
    * you have to use bracket when accessing an object dynamically. The player
    * variable is constantly updated with the keys
    */
for(let player in athletes){
       console.log(athletes[player]);//prints all the values
   }
   /**
    * Note: if you were to use .player it will look for an actual property called
    * player.
    */
    
    // while loop //
    /**
     * to create a while loop you use the keyword while
     * you then create a conditon that while being true will continue to execute
     * the code block inside of the while loop
     */
     var printNumbers = 0;
     while(printNumbers < 100){
         printNumbers += 2;
         console.log(printNumbers); //prints all even numbers
     }
     
     /**
      * Note: dont forget to break out of your while loop. not doing so can cause
      * you to run an infinite loop.
      */
      
      /**
       * // for loop vs while loop //
       * You would use a for loop when you know exactly how many times you want
       * to loop through.
       * 
       * You would use a while loop when you're not sure how many times you want
       * to loop through.
       */