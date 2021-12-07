// block 1 - The result will be 5. When otherFunction() returning
// 'b', it refers to the the outer scope when b = 5.
var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);


// block 2 - The result will be 1. when a() is declared, it's basicly
// "deletes" - (a = 10), so b2 reffering to a = 1.
var a = 1;
function b2() {
  a = 10;
  function a() { };
  return;
}
b2();
console.log(a);

// block 3 - The result will be 3, 3, 3. Because i is declared out of the
// the for, and there is the setTimeout() function, 'i' keeps being changed til it equals '3'
// and then it's being printed 3 times.
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  }
  setTimeout(log, 100);
}