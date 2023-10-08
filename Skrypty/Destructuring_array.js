const FILIP = ['Filip', 29, 'Kraków'];

const getPersonInfo = (person) => {
  // const name = person[0];
  // const age = person[1];
  // const city = person[2];

  const [name, , city] = person; //kolejność ma znaczenie!

  return `Imię: ${name}, miasto: ${city}`;
};

console.log(getPersonInfo(FILIP));
