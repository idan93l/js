const countryToLiveIn = (language, isIsland, population, country) => {
  if (language === 'English' && isIsland === true && population < 50) {
    return `You should live in ${country}`
  } else {
    return `${country} does not meet your criteria`;
  }
}

console.log(countryToLiveIn(`English`, true, 49, `Finland`));
console.log(countryToLiveIn(`Hebrew`, true, 49, `Romania`));
console.log(countryToLiveIn(`English`, false, 49, `France`));
console.log(countryToLiveIn(`English`, true, 50, `England`));