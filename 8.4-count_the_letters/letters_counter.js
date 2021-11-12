const array = ["Hello", "Good Day", "Your Welcome", "hotdog",
  "hamburgers"];

const newArr = array.join('').toLowerCase().split(' ').join('');

let obj = {};

let commonLetter = {letter: ``, count: 0}

const arrLetters = arr => {
  for(let i=0; i < arr.length; i++) {
    obj[arr[i]] = 0;
    for(let j=0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        obj[arr[i]]++;
      }
      if (obj[arr[i]] > commonLetter.count) {
        commonLetter.letter = arr[i];
        commonLetter.count ++;
      }
    }
  }
  return obj;
}

console.log(newArr);
console.log(arrLetters(newArr));
console.log(commonLetter);