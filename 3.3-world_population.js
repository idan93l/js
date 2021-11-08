function precentageOfWorld1 (population) {
  return (population/7900)*100;
}

const china = precentageOfWorld1(1441);
const israel = precentageOfWorld1(9.2);
const newz = precentageOfWorld1(5.1);

console.log(`China has ${china.toFixed(2)}% of world population`);
console.log(`Israel has ${israel.toFixed(2)}% of world population`);
console.log(`New Zealand has ${newz.toFixed(2)}% of world population`);

const precentageOfWorld2 = population => (population/7900)*100;

console.log(`USA has ${precentageOfWorld2(329.5).toFixed(2)}% of world population`)
console.log(`Hungary has ${precentageOfWorld2(9.75).toFixed(2)}% of world population`)
console.log(`Russia has ${precentageOfWorld2(144.1).toFixed(2)}% of world population`)