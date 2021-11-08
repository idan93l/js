const days = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`]
const months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`,
  `August`, `September`, `October`, `November`, `December`];
const d = new Date();
const dayName = days[d.getDay()];
const dateName = d.getDate();
const monthName = months[d.getMonth()];
const yearName = d.getFullYear();

function fullDate() {
  return `Today is ${dayName} the ${dateName}th of ${monthName}, ${yearName}`;
}

console.log(fullDate());