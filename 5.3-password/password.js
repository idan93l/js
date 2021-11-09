const passValid1 = password => {
  if (password.length >= 7) {
    return `Strong`;
  } else {
    return `Weak`
  }
}

const passValid2 = password => {
  return password.length >= 7 ? `Strong` : `Weak`;
}

const passValid3 = password => {
  return passValid2(password) === `Strong` && /[A-Z]/.test(password) ? `Very Strong`
  : passValid2(password) === `Strong` ? `Strong` : `Weak`;
}

console.log(passValid1(`1234567`));
console.log(passValid1(`123456`));
console.log(passValid2(`1234567`));
console.log(passValid2(`123456`));
console.log(passValid3(`1`));
console.log(passValid3(`123FAS`));
console.log(passValid3(`123FAS2`));
console.log(passValid3(`123acs2`));