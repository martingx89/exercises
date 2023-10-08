const person = {
  name: 'Filip',
  age: 29,
  city: {
    name: 'Kraków',
    population: 800_000,
  },
  id: 2549,
};

const {
  city: { population, name },
  name: personName,
  ...personInfo
} = person;

console.log(population);
console.log(name);
console.log(personName);
console.log(personInfo);
