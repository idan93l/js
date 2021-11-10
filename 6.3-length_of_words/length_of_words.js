let newArr = [];
const arr = [`boo`, `doooo`, `hoo`,`ro`];

const wordLength = arr => {
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].length);
  }
  return newArr;
}

console.log(wordLength(arr));