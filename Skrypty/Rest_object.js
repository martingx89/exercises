const person = { name: 'Filip', age: 29, city: 'Kraków', id: 2549 };

const { id, ...personInfo } = person; //rest operator musi być na końcu
console.log(id);
console.log(personInfo);
