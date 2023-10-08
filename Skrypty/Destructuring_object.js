const FILIP = { name: 'Filip', age: 29 };

const getPersonalInfo = ({ name, age, city = 'Warszawa' }) => {
  return `Imię: ${name}, wiek: ${age}, miasto: ${city}`;
};

console.log(getPersonalInfo(FILIP));
