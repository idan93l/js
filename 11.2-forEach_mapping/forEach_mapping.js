// 1.
const doubleValues = arr => {
  const double = arr.map(function (n) {
    return n * 2;
  });
  console.log(double);
}

doubleValues([1, 6, 49, 3, 64, 28]);

// 2.
const onlyEvenValues = arr => {
  let newArr = [];
  arr.forEach(function (n) {
    if (n % 2 === 0) {
      newArr.push(n);
    }
  });
  console.log(newArr);
}

onlyEvenValues([2, 3, 1, 4, 100, 55, 54]);

// 3.
const showFirstAndLast = arr => {
  let newArr = [];
  arr.forEach(function (n) {
    if (typeof n === `string`) {
      if (n.length === 1) {
        newArr.push(n);
      } else {
        newArr.push(n[0] + n[n.length - 1]);
      }
    }
  });
  console.log(newArr);
}

showFirstAndLast([`I`, `am`, `iron`, `man`]);

// 4.
const vowelCount = str => {
  str = str.toLowerCase();
  arr = str.split(``);
  let vowels = [`a`, `i`, `e`, `y`, `o`, `u`];
  let obj = {};
  arr.forEach(function (letter) {
    vowels.forEach(function (vowel) {
      if (vowel === letter) {
        if (obj[vowel]) {
          obj[vowel]++;
        } else {
          obj[vowel] = 1;
        }
      }
    });
  });
  console.log(obj);
}

vowelCount(`aaaiiiiiiiuuuyybvck`);

// 5.
const capitalize = str => {
  arr = str.split(``);
  const toUpper = arr.map(function (letter) {
    return letter.toUpperCase();
  });
  return toUpper.join(``);
}

console.log(capitalize(`idan`));

// 6.
const shiftLetter = str => {
  arr = str.split(``);
  const shifted = arr.map(function (letter) {
    let newLetter = letter.charCodeAt() - 1;
    if (letter === ` `) {
      return letter;
    }
    if(letter === `a`) {
      return `z`;
    }
    return String.fromCharCode(newLetter);
  });
  return shifted.join(` `);
}

console.log(shiftLetter(`hello worldaaa`));

// 7.
const swapCase = str => {
  arr = str.split(` `);
  const swapped = arr.map(function (word, idx) {
    if (idx % 2 !== 0) {
      word = capitalize(word);
    }
    return word;
  })
  return swapped.join(` `)
}

console.log(swapCase(`hello i am iron man`));