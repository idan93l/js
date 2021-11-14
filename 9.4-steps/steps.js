const steps = (n) => {
  let arg = `$`;
  let j = n - 1;
  for (let i = 0; i < n; i++) {
    console.log(`'${arg.repeat(i + 1)}${` `.repeat(j)}'`);
    j--;
  }
}

steps(4);

const steps2 = (n) => {
  let arg = Array(n);
  arg.fill(` `);
  for (let i = 0; i < n; i++) {
    arg[i] = `$`;
    console.log(`'${arg.join(``)}'`);
  }
}

steps2(4);