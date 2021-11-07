let job = [`programmer`, `musician`, `accountant`, `biologist`, `engineer`, `actor`];
let loc = [`Tel Aviv`, `Ramat Gan`, `Givatatyim`, `Rehovot`, `Modiin`, `Jerusalem`];
let par = [`Isabelle`, `Noa`, `Hilla`, `Nina`, `Irit`, `Michal`];
let Chl = [`1`, `2`, `3`, `4`, `5`, `6`];

function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
  if (jobTitle[0] == `a` ||jobTitle[0] == `i` ||jobTitle[0] == `e` ||jobTitle[0] == `y` ||jobTitle[0] == `o` ||jobTitle[0] == `u`) {
    return `You will be an ${jobTitle} in ${location} and married to
      ${partnerName} with ${numberOfChildren} children.`
  }

  else {
  return `You will be a ${jobTitle} in ${location} and married to
  ${partnerName} with ${numberOfChildren} children.`
  }
}

function random() {
  return Math.floor(Math.random() * 6);
}

let tf = tellFortune(job[random()], loc[random()], par[random()], Chl[random()]);

console.log(tf);