let people = [`Greg`, `Mary`, `Devon`, `James`];

// 1. Using a loop, iterate through this array and console.log all of the people.
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 2. Write the command to remove "Greg" from the array
people.shift(`Greg`);

console.log(people);

// 3. Write the command to remove "James" from the array.
people.pop(`James`);

console.log(people);

// 4. Write the command to add "Matt" to the front of the array.
people.unshift(`Matt`);

console.log(people);

// 5. Write the command to add your name to the end of the array.
people.push(`Idan`);

console.log(people);

// 6. Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
for (let j = 0; people[j] !== `Mary`; j++) {
  console.log(people[j]);
}

// 7. Write the command to make a copy of the array using slice. The copy
// should NOT include "Mary" or "Matt"
const slicedPeople = people.slice(2);

console.log(slicedPeople);

// 8. Write the command that gives the indexOf where "Mary" is located.
console.log(people.indexOf(`Mary`));

// 9. Write the command that gives the indexOf where "Foo" is located.
console.log(people.indexOf(`Foo`));

// 10. Redefine the people variable with the value you started with. Using the
// splice command, remove "Devon" from the array and add "Elizabeth"
// and "Artie". Your array should look like this when you are done ["Greg",
// "Mary", "Elizabeth", "Artie", "James"].
people = [`Greg`, `Mary`, `Devon`, `James`];

people.splice(2, 1, `Elizabeth`, `Artie`);

console.log(people);

// 11. Create a new variable called withBob and set it equal to the people
//array concatenated with the string of "Bob".
const withBob = people.concat(`Bob`);

console.log(withBob);