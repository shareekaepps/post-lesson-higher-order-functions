//FUNCTIONS ARE VALUES LIKE ANY OTHER VALUES!!
//THIS MEANS THAT THEY CAN BE PASSED AS ARGUMENTS TO OTHER FUNCTIONS.
//OUTER() IS A HIGHER ORDER FUNCTION THAT TAKES IN A FUNCTION AS AN ARGUMENT

function outer(func) {
  const fnText = "hello world 🌎 from outer() 👽";
  func(fnText);
}

function logger(text) {
  console.log("LOGGING:", text);
}

// outer(logger);

function allCapsLogger(text) {
  console.log("LOGGING: ", text.toUpperCase());
}

// outer(allCapsLogger);

function arrayLogger(text) {
  console.log("LOGGING: ", text.split(" "));
}

outer(arrayLogger);
