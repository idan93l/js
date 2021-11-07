function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

let isr = describeCountry(`Israel`, 9.2, `Jerusalem`);
let hr = describeCountry(`Hungary`, 9.75, `Budapest`);
let nz = describeCountry(`New Zealand`, 5.1, `Wellington`);

console.log(isr);
console.log(hr);
console.log(nz);