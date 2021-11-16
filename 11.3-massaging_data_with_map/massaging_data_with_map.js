const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

// 1.
const names = data => {
  const namesArr = data.map(name => {
    return name.name;
  });
  return namesArr.join(` `);
}

console.log(names(data))

// 2.
const bornBefore = data => {
  let arr = [];
  const born = data.forEach(birth => {
    b = birth.birthday;
    b = b.slice(b.length - 4);
    if (b < 1990) {
      arr.push(b);
    }
  });
  return arr.join(` `);
}

console.log(bornBefore(data))

// 3.
const favoriteFoods = data => {
  let obj = {}
  let foods = [];
  data.forEach(person => {
    let meats = person.favoriteFoods.meats;
    let fish = person.favoriteFoods.fish;
    let mAndF = meats.concat(fish);
    foods = foods.concat(mAndF);
  });
  foods.forEach(food => {
    if (obj[food]) {
      obj[food]++;
    } else {
      obj[food] = 1;
    }
  });
  return obj
}

console.log(favoriteFoods(data));