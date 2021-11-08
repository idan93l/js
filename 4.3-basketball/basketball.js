const john = [89, 120, 103];
const mike = [116, 94, 123];
const mary = [97, 134, 105]
const avg = a => ((a[0] + a[1] + a[2])/a.length);
const johnAvg = avg(john);
const mikeAvg = avg(mike);
const maryAvg = avg(mary);

if (johnAvg === mikeAvg && johnAvg === maryAvg) {
  console.log(`It's a draw!`)
}

else if (johnAvg > mikeAvg && johnAvg > maryAvg) {
  console.log(`John is the winner with the score of ${johnAvg}!`)
}

else if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
  console.log(`Mike is the winner with the score of ${mikeAvg}!`)
}

else {
  console.log(`Mary is the winner with the score of ${maryAvg}!`)
}