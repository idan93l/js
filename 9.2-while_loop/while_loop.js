const pop = [9.2, 5.1, 9.75, 329.5];

const precentageOfWorld = population => (population / 7900) * 100;

let i = 0;

let newPop = [];

while (i < pop.length) {
  newPop.push(precentageOfWorld(pop[i]).toFixed(2));
  i++;
}

console.log(newPop);