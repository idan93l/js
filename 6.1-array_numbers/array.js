const arr = [1, 7, 3, 0, -5, 7, 3, 9];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

const arrayLength = arr => {
  let counter = 0;
  for (let j = 0; arr[j] !== undefined; j++) {
    counter++;
  }
  return counter;
}

const arraySum = arr => {
  let sum = 0;
  for (let k = 0; k < arr.length; k++) {
    sum += arr[k];
  }
  return sum;

}
const arrayMulti = arr => {
  let multi = 0;
  for (let k = 0; k < arr.length; k++) {
    multi *= arr[k];
  }
  return multi;
}

console.log(arrayLength(arr));
console.log(arraySum(arr));
console.log(arrayMulti(arr));