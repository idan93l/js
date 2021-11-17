function getSum(arr1, arr2) {
  const sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
}
getSum([1, 2, 3][5, 66, 23]);

// 1. Line 6, 10 - "Cannot read property 'length' of undefined"
// 2. Quokka.
// 3. The function cannot get the 2 arrays properly, and beacause `sum`
// being set as const variable, it cannot be changed.