const FILIP = { name: 'Filip', age: '29', city: 'Kraków' };

const getPersonalInfo = ({ name, age, city }) => {
  return `Imię: ${name}, wiek: ${age}, miasto: ${city}`;
};

console.log(getPersonalInfo(FILIP));
