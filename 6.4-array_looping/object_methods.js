const myCountry = {
  country: `Israel`,
  capital: `Jerusalem`,
  language: `Hebrew`,
  population: `9.2`,
  neighbours: [`Syria`, `Lebanon`, `Jordan`, `Egypt`],
  describe() {
    return `${this.country} has ${this.population} million people, their mother tongue is 
    ${this.language}, they have ${this.neighbours.length} neighbouring countries and a
    captial called ${this.capital}.`
  },
  checkIsland() {
    this.neighbours.length > 0 ? this.isIsland = false : this.isIsland = true;
  }
}

myCountry.checkIsland();
console.log(myCountry.describe());
console.log(myCountry);
