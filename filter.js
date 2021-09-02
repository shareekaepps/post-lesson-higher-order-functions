const tryingToEnterBar = [
  32, 17, 22, 20, 21, 73, 45, 30, 16, 38, 19, 23, 21, 25,
];
//HERE'S AN EXAMPLE OF ONE OF THE MOST USEFUL HIGHER ORDER ARRAY METHODS:
//FILTER! WE'LL BE COVERING THIS MORE EXTENSIVELY SOON, SO DON'T WORRY TOO MUCH
//IF THIS DOESN'T 100% MAKE SENSE YET :)

/*
  
  */

//FOR LOOP METHOD OF FILTERING:
function allowedInBar(ages) {
  let twentyOneUp = [];
  for (let age of ages) {
    if (age >= 21) {
      twentyOneUp.push(age);
    }
  }
  return twentyOneUp;
}

/*
  
  */

function isTwentyOneOrGreater(age) {
  if (age >= 21) {
    return true;
  } else {
    return false;
  }
}

//HOW TO FILTER USING THE .FILTER HIGHER ORDER ARRAY METHOD:
function allowedInFilter(ages) {
  return ages.filter(isTwentyOneOrGreater); //isTwentyOneOrGreater is our callback function.
}

console.log(allowedInBar(tryingToEnterBar));

//THE FOLLOWING EXAMPLE IS MORE ADVANCED. AGAIN, DON'T WORRY IF IT DOESN'T MAKE SENSE YET.
// // USING THE .FILTER METHOD WITH ARROW SYNTAX FOR THE CALLBACK FUNCTION:
// function allowedInFilter(ages) {
//   return ages.filter((age) => age >= 21); // return is implied. age >= 21 will evaluate to a boolean.
// }
