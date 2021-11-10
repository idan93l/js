const pop = [9.2, 5.1, 9.75, 329.5];

const precentageOfWorld = population => (population/7900)*100;

const precentagePop = population => {
  let newPop = [];
  for (let i = 0; i < population.length; i++) {
    newPop.push(precentageOfWorld(population[i]).toFixed(2));
  }
  return newPop;
}

console.log(precentagePop(pop));