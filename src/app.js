const fs = require('fs');

const genders = ['male','female','nobinary'];
const maleNames = ['Frank', 'Edward', 'Bob', 'Joe', 'John'];
const femaleNames = ['Alice', 'Ann', 'Sophia', 'Reachel', 'Jo', 'Rose'];
const lastNames = ['Random', 'Juicy', 'Frankenstain', 'Texas', 'Washington', 'Rose'];

const people = [];

const randChoice = (arr) => arr[Math.floor(Math.random()*arr.length)];


for (let i = 0; i < 20; i++) {
  const person = {};

  person.gender = randChoice(genders);
  if (person.gender === 'male') {
    person.name = randChoice(maleNames);
  } else if (person.gender === 'female') {
    person.name = randChoice(femaleNames);
  } else {
    person.name = randChoice([...maleNames, ...femaleNames]);
  }
  person.lastName = randChoice(lastNames);
  person.email = `${person.name}.${person.lastName}@gmail.com`

  people.push(person);
}

const parsedData = JSON.stringify(people);

fs.writeFile('people.json', parsedData, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});