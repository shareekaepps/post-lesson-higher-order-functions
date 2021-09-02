function cakeMaker(fruitString) {
  return `${fruitString} cake`;
}

function pieMaker(fruitString) {
  return `${fruitString} pie`;
}

function sodaMaker(fruitString) {
  return `${fruitString} soda`;
}

function upperCase(fruitString) {
  return fruitString.toUpperCase();
}

//WE MODIFIED FACTORY SO THAT IT TAKES IN TWO CALLBACK FUNCTIONS, func1 and func2
function factory(fruits, func1, func2) {
  let products = [];
  let finalProducts = [];
  for (let fruit of fruits) {
    products.push(func1(fruit));
  }
  for (let product of products) {
    finalProducts.push(func2(product));
  }
  return finalProducts;
}

let array = ["banana", "coconut", "kiwi"];
console.log(factory(array, pieMaker, cakeMaker));
