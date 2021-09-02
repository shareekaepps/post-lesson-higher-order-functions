//THESE ARE NOT HIGHER ORDER FUNCTIONS. THE PURPOSE OF THIS FILE IS TO DEMONSTRATE
//THAT FUNCTIONS CAN BE ASSIGNED AND REASSIGNED TO VARIABLES JUST LIKE ANY OTHER VALUE.

//A SIMPLE FUNCTION:

function hello(str) {
  console.log(str);
}

// hello("world 🌎");

//ANOTHER SIMPLE FUNCTION:
function double(number) {
  return number * 2;
}

// console.log(double(5));

//IN JAVASCRIPT, FUNCTIONS ARE VALUES JUST LIKE ANY OTHER VALUE

let half = (number) => {
  return number / 2;
};

console.log("half(8) -> ", half(8));

let cookie = half;

console.log("cookie(8) -> ", cookie(8));
