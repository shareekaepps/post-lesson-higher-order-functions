//AN EXAMPLE OF A HIGHER ORDER FUNCTIONS THAT returns A FUNCTION.
//HOW CAN WE ACCESS THE PEARL IN THE CONSOLE?
function giantClam() {
  function pearl() {
    return "⚪️";
  }
  return pearl;
}

//HERE'S HOW YOU CAN ACCESS "⚪️" AND LOG IT TO THE CONSOLE.

let access = giantClam(); //access gets set to giantClam(), so access is now equal to giantClam's return value, which is another function. (formerly known as 'pearl', now reassigned to the variable 'access').

console.log(access()); //this is the same as 'console.log(giantClam()())

console.log(giantClam()()); //this is the same as 'console.log(access())'
/*
  

  THIS FILE WAS ESPECIALLY TRICKY, SO I ADDED ANOTHER, EASIER TO DIGEST EXAMPLE BELOW.
  JUST REMEMBER, WHEN YOU INVOKE() A FUNCTION, THAT EXPRESSION
  EVALUATES TO BE THE FUNCTION'S RETURN VALUE
  
  
  */
//CONSIDER THIS FUNCTION:
function iAmTwo() {
  return 2;
}

console.log("iAmTwo: ", iAmTwo); //WHAT DOES THIS LOG TO THE CONSOLE?
console.log("iAmTwo(): ", iAmTwo()); //WHAT DOES THIS LOG TO THE CONSOLE?
//WHAT'S THE DIFFERENCE?

//WHEN YOU INVOKE A FUNCTION, (aka put parentheses after it) IT GETS EVALUATED TO BE ITS RETURN VALUE.
//THAT'S WHY iAmTwo IS [Function: iAmTwo] , AND iAmTwo() IS 2
//                ^no parentheses, not invoked         ^parentheses are there! it's being invoked
