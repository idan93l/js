const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

// a.1
console.log(foods.sort());

// a.2
console.log(foods.sort().reverse());

// b.1
const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

const foodsAscend = foodsWithUpperCase.sort((a, b) => {
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  } else {
  return -1
}
});

console.log(foodsAscend);

// b.2
const foodsDecend = foodsWithUpperCase.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) {
    return 1;
  } else {
    return -1
  }
});

console.log(foodsAscend);

// C.
const words = ["apple", "supercalifragilisticexpialidocious",
"hi", "zoo"];

const fromLtoS = words.sort((a,b) => {
  if (a.length < b.length) {
    return 1;
  } else {
    return -1
  }
});

console.log(fromLtoS);