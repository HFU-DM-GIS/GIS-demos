const p = { name: 'Anna', age: 23 };
// console.log(p);

let people = [
  p,
  { name: 'Oliver', age: 22 },
  { name: 'Peter', age: 21 },
];

// print the names of all people
// for (let m of people) {
//   console.log(m.name);
// }

// add another person
let p2 = { name: 'Horst', age: 31 };
let more_people = people.concat(p2);

// console.log(people);
// console.log(more_people);

// stringify with JSON
let peopleAsString = JSON.stringify(people)
console.log(peopleAsString);

// parse string to JSON
let peopleASJSONagain = JSON.parse(peopleAsString);
console.log(peopleASJSONagain);
