const lang = language => {
  switch (language) {
    case `mandarin`:
      return `MOST number of native speakers!`;
    case `spanish`:
      return `2nd place in number of native speakers`;
    case `english`:
      return `3rd place`;
    case `hindi`:
      return `Number 4`;
    case `arabic`:
      return `5th spoken language`;
    default:
      return `Not in the top 5`;
  }
}

console.log(lang(`mandarin`));
console.log(lang(`spanish`));
console.log(lang(`english`));
console.log(lang(`hindi`));
console.log(lang(`arabic`));
console.log(lang(`hebrew`));