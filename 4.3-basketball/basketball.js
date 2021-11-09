const john = [89, 120, 103];
const mike = [116, 94, 123];
const mary = [97, 134, 105]
const avg = a => ((a[0] + a[1] + a[2]) / a.length);
const johnAvg = avg(john);
const mikeAvg = avg(mike);
const maryAvg = avg(mary);

const printResults = (johnAvg, mikeAvg, maryAvg) => {
  if (johnAvg > mikeAvg && johnAvg > maryAvg) {
    return `John is the winner with the score of ${johnAvg}!`;
  }

  else if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
    return `Mike is the winner with the score of ${mikeAvg}!`
  }

  else {
    return `Mary is the winner with the score of ${maryAvg}!`
  }
}

const printDraw = (johnAvg, mikeAvg, maryAvg) => {
  if (johnAvg === mikeAvg && johnAvg === maryAvg) {
    return `It's a draw between everyone!`;
  }
  else if (johnAvg === mikeAvg) {
    return `It's a draw between John and Mike`;
  }
  else if (johnAvg === maryAvg) {
    return `It's a draw between John and Mary`;
  }
  else if (mikeAvg === maryAvg) {
    return `It's a draw between Mike and Mary`;
  }
}

console.log(printResults(johnAvg, mikeAvg, maryAvg));
console.log(printDraw(johnAvg, mikeAvg, maryAvg));
