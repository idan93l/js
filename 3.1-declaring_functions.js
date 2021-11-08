/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.
    Submit the file to Hive
*/

// From function declarations to function expressions

const welcome = function() {
  return `Welcome to Appleseeds Bootcamp!`;
}

console.log(welcome());

const power = function(a) {
  return Math.pow(a,2)
}

console.log(power(5))

const add = function(a, b=5) {
  return a+b;
}

console.log(add(5))

// From function expressions to function declarations

function hello() {
  console.log(`Hello!`)
}

hello()

function squareRoot(a) {
  return Math.sqrt(a);
}

console.log(squareRoot(16))

function randomNumbers(a, b) {
  return Math.random() * (a - b) +b;
}

console.log(randomNumbers(2,6));
