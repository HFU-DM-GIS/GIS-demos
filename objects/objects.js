const p = { name: 'Anna', age: 23 };
console.log(p);

const people = [
  p,
  { name: 'Oliver', age: 22 },
  { name: 'Peter', age: 21 },
];

// print the names of all people
for (let m of people) {
  console.log(m.name);
}

// add another person

// stringify with JSON

// parse string to JSON