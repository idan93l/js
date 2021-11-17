function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter + 1;
    }
  }
  return counter;
}
countOccurrences("ini mini miny moe", "n");

// 1. line 5 - counter + 1
// 2. node debugger
// 3. counter remains zero because it should be equaled to itself plus 1