// // Block 1
function funcA() {
  var a = 1;
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();

// funcA() is being called
// "a" was declared in line 4, therefore it wont be logged in line to (console.log a)
// console.log(foo()) will eventually return 2
// in order to make funcA() work, all we need to is move up "var a = 1" to be
// before "console.log(a)" (line 2)

// Block 2
var fullName = 'John Doe';
var obj = {
  fullName: 'Colin Ihrig',
  prop: {
    fullName: 'Aurelio De Rosa',
    getFullName: function () {
      return this.fullName;
    }
  }
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

var test = obj.prop.getFullName();
console.log(test);

// line 29 - "Aurelio De Rosa" will be returned 
// line 31 - test() is undefined because it's being logged as a function
// Because test is actually a variable, it should be logged without "()"
// Also, in line 30, "getFullName" should have "()", because it is an object method function

// Block 3
let a = b = 0;
function funcB() {
  let a = b = 0;
  a++;
  return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);

// in order to get type of `a` and `b` properly, "let a = b = 0" (line 45)
// should be outside of funcB()

// blok 4
function funcC() {
  console.log("1");
}
funcC();
// function funcC1
function funcC() {
  console.log("2");
}
// funcC1()
funcC();

// funcC() is being called twice and will log '2' twice because only the second 
// creation of funcC() counts.
// simply another function (funcC1()) will fix the problem.

// Block 5
function funcD1() {
  d = 1;
}
funcD1();
console.log(d);
function funcD2() {
  var e = 1;
}
funcD2();
console.log(e);

// function funcD1() {
//   let d = 1;
//   console.log(d);
// }
// funcD1();
// function funcD2() {
//   let e = 1;
//   console.log(e);
// }
// funcD2();

// "d" will be logged, but "e" wont be logged because its being declared as "var".
// Simply declaring "e" without "var" will fix the problem, but it's methodicly wrong.
// Both "e" and "d" should be declared as const/let and the loggings should be
// inside the functions (funcD1(), funcD2)

// Block 6
function funcE() {
  console.log("Value of f in local scope: ", f);
}
// var f = 1;
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();

// The value of global scope wil be undefined, and the value of local scope will equal 1.
// in order to make global scope to equal 1, we simply need move the declaring of "f" above the log.