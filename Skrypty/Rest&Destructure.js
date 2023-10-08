const person = {
  name: 'Filip',
  age: 29,
  city: {
    name: 'Kraków',
    population: 800_000,
  },
  id: 2549,
};

const { id, ...personInfo } = person; //rest operator musi być na końcu
const {
  city: { population },
} = person;

console.log(population);
