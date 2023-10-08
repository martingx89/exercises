const FILIP = ['Filip', 29, 'Kraków'];

const getPersonInfo = (person) => {
  const name = person[0];
  const age = person[1];
  const city = person[2];

  return `Imię: ${name}, wiek: ${age}, miasto: ${city}`;
};

console.log(getPersonInfo(FILIP));
