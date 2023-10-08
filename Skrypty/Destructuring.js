const FILIP = { name: 'Filip', age: '29', city: 'Kraków' };

const getPersonalInfo = (person) => {
  return `Imię: ${person.name}, wiek: ${person.age}, miasto: ${person.city}`;
};

console.log(getPersonalInfo(FILIP));
