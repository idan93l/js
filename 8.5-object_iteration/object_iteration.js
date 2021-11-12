const obj1 = {
  song: `Come Back`,
  band: `Foo Fighters`,
  album: `One by One`,
  year: 2002
};

let obj2 = {};

Object.entries(obj1).forEach(([key, value]) => {
  obj2[value] = key;
});

console.log(obj1);
console.log(obj2);