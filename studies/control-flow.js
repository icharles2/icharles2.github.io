/**
 * Control Flow
 * 
 * Conditional statements allow us to control the flow of our code. We can make
 * decisions in our conde by asking true or false questions, and based on the 
 * answer we can decide what piece of our code to run wheter its true or false.
 * In order to do this we create if, else if, and else statements. We can also 
 * use switch statements if we want to make our code a bit cleaner.
 * 
 */
 
 // if-else if-else //
 /**
  * to create a conditonal statement you use the keyword if, and you can chain
  * any number of else if to the first if and end it with an else statement
  * Each conditonal statement has :
  * () for the test condition
  * {} for the code block that is to be ran if conditon is true
  */
  
  
 if('condition passes 1 test'){
    //Body that is excuted if conditon is true 
 }
 else if('condition passes 2 test '){
    //Body that is excuted if conditon is true
 }
 else{
     //Body that is excuted if conditon is true
 }
  
 // switch statement //
 /**
  * switch statements evaluates an input expression and matches that expression
  * value to a case clause. It excutes the statement matched with the clause.
  * A break statement ends each case. If a break statement isn't added it will 
  * cause the next block to execute unintentionally.
  */
  
  const shoes = 'Nike';
  
  switch (shoes){
      case 'Adidas':
          console.log('yeezy boost');
          break;
      case 'Reebok':
          console.log('soldiers');
          break;
      case 'Nike':
          console.log('air force 1');
          break;
      case 'New Balance':
          console.log('595');
          break;
      default:
          console.log('Must have left that shoe back home');
  }