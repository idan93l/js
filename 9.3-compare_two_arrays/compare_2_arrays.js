const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
  "Cucumber", "Olives"];

const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
  "Hamburgers"];

const compare = (arr, arr1) => {
  let equalWords = [];
  let bool = false;
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    for (let j = 0; j < arr1.length; j++) {
      let word1 = arr1[j];
      if (word === word1) {
        bool = true;
        equalWords.push(word);
      }
    }
  }
  return bool === true ? equalWords : bool;
}

console.log(compare(food, food1));
console.log(compare([`Nirvana`, `Franz Ferdinand`], [`Foo fighter`, `The Pixies`]));