const person = { name: 'Filip', age: 29, city: 'Kraków', id: 2549 };

const { id, ...personInfo } = person;
console.log(id);
console.log(personInfo);
