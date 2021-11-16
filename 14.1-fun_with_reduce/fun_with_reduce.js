const arr = [2, 3, 1, 3];

// 1.
const max = arr.reduce((max, currentVal) => {
return Math.max(max, currentVal);
});

console.log(max);

// 2.
const sumOfEven = arr.reduce((sum, currentVal) => {
  return currentVal % 2 === 0 ? sum + currentVal : sum;
}, 0);

console.log(sumOfEven);

// 3.
const avg = arr.reduce((sum, currentVal) => {
return sum + currentVal;
}) / arr.length;

console.log(avg);