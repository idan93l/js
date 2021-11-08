const numSiblings = prompt(`How many siblings do you have?`);
const numSiblings1 = parseInt(numSiblings)
if (numSiblings1 === 1) {
  console.log(`${numSiblings1} sibling`);
}

else if (numSiblings1 > 1) {
  console.log(`More than 1 sibling`);
}

else if (numSiblings1 < 1) {
  console.log(`No siblings`)
}