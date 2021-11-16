const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4
    },
  ],
  cashRegister: 200
}

// 1.
function getCandy(candyStore, id) {
  const candyId = candyStore.candies.filter(candy => candy.id.includes(id));
  return candyId;
}

console.log(getCandy(candyStore, `5hd7y`));

// 2.
function getPrice(candyStore, id) {
  const candyId = candyStore.candies.filter(candy => candy.id.includes(id))
  return candyId[0].price;
}

console.log(getPrice(candyStore, `5hd7y`));

// 3.
function addCandy(candyStore, id, name, price) {
  const obj = {};
  obj.name = name;
  obj.id = id;
  obj.price = price;
  obj.amount = 1;
  candyStore.candies.push(obj);
}
addCandy(candyStore, `cjedr43`, `snickers`, 3);
console.log(candyStore);

// 4.
function buy(candyStore, id) {
  const candyId = candyStore.candies.filter(candy => candy.id.includes(id));
  candyStore.cashRegister += candyId[0].price;
  candyId[0].amount--;

}

buy(candyStore, `cjedr43`)
console.log(candyStore);