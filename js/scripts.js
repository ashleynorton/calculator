// Addition
var add = function(number1, number2) {
  return number1 + number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);

alert(result);

// Subtraction
var subtract = function(number1, number2) {
  return number2 - number1;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = subtract(number1, number2);

alert(result);

// Multiplication
var multiply = function(number1, number2) {
  return number1 * number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = multiply(number1, number2);

alert(result);

// Division
var divide = function(number1, number2) {
  return number2 / number1;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = divide(number1, number2);

alert(result);