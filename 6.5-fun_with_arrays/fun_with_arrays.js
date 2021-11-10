let arr = Array(100);

let bass = {
  company: `fender`,
  type: `active`,
  numOfStrings: 4
};

// 1.
arr.fill(bass);
console.log(arr);

// 2.
let newArr = Array.from({length: 101}, (v, i) => i)
console.log(newArr);

// 3.
let arrValues = Object.values(bass);
console.log(arrValues);

// 4.
let arr2 = [2, 7, `f`, `wow`, 453];
const obj = Object.assign({}, arr2);
console.log(obj);

// 5.
console.log(Array.isArray(arr2));
console.log(Array.isArray(bass));

// 6.1
let arr3 = [...arr2];
console.log(arr3);
arr3.push(`hello`);
console.log(arr3);
console.log(arr2);

// 6.2
let arr4 = arr2;
console.log(arr4);
arr4.push(`hello`);
console.log(arr4);
console.log(arr2);