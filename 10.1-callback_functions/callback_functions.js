// 1.
function print(str) {
  console.log(str);
}

function isString(str, func) {
  if (typeof str === `string`) {
    func(str);
  }
}

isString(`sdrg`,print);

// 2. , 3.
const toUpperCaseStr = (str, func) => {
  const arr = str.split(` `);
  arr[0] = arr[0].toUpperCase();
  let newStr = arr.join(` `);
  newStr = func(newStr);
  console.log(newStr);
}

const dash = (str) => {
  return str.replaceAll(` `, `-`);
}

const dollar = (str) => {
  return str.replaceAll(` `, `$`);
}

toUpperCaseStr(`hello world I am iron man`, dash);
toUpperCaseStr(`hello world I am iron man`, dollar);

// 4.
const calculate = (num, num1, func) => {
  return func(num, num1);
}

const sum = (num, num1) => num + num1;
const sub = (num, num1) => num - num1;
const mult = (num, num1) => num * num1;
const dvd = (num, num1) => num / num1;

console.log(calculate(8, 4, sum));
console.log(calculate(8, 4, sub));
console.log(calculate(8, 4, mult));
console.log(calculate(8, 4, dvd));