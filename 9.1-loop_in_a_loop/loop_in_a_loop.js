const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  let neighbour = listOfNeighbours[i];
  for (let j = 0; j < neighbour.length; j++) {
    console.log(`Neighbour: ${neighbour[j]}`);
  }
}