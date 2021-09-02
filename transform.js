/*
WE MADE FOUR CALLBACK FUNCTIONS TO PASS INTO THE transform FUNCTION
TO GET THESE RESULTS:

 "left" -> "LEFT"
 "RiGhT" -> "right"
 "left right left" -> "left-right-left"
 "up Down left" -> "UDL"
 */

let transform = (text, fn) => {
  if (typeof fn !== "function") {
    return text;
  }

  return fn(text);
};

let upperCase = (word) => {
  return word.toUpperCase();
};

function low(text) {
  return text.toLowerCase();
}

function dashing(text) {
  return text.split(" ").join("-");
}

const getFirstLetters = (word) => {
  return word
    .split(" ")
    .map((part) => part[0].toUpperCase())
    .join("");
};

//test out each callback funtion here by passing it into transform as an argument
console.log(transform("hello hello hello", dashing));
