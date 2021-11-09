const color = color => {
  switch (color) {
    case `yellow`:
    case `pink`:
    case `orange`:
      return `Light color`;
    case `blue`:
    case `purple`:
    case `brown`:
      return `Dark color`;
    default:
      return `Unknow color`
  }
}

console.log(color(`yellow`));
console.log(color(`pink`));
console.log(color(`orange`));
console.log(color(`blue`));
console.log(color(`purple`));
console.log(color(`brown`));
console.log(color(`Shimi Tavori`));