const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  const sumOfArrayItems = arr.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0)
  return sumOfArrayItems;
};

const multiply = function(arr) {
  const productOfArrayItems = arr.reduce((total, currentItem) => {
    return total * currentItem;
  })
  return productOfArrayItems;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(num) {
  if (num < 2) return 1;
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
