const FILIP = { name: 'Filip', age: '29', city: 'Kraków' };

const getPersonalInfo = (person) => {
  const [name, age, city] = person;

  return `Imię: ${name}, wiek: ${age}, miasto: ${city}`;
};

console.log(getPersonalInfo(FILIP));
