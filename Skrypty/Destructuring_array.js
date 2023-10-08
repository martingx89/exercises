const FILIP = ['Filip', 29, 'Kraków'];

const getPersonInfo = ([name, age, city]) => {
  //kolejność ma znaczenie!
  return `Imię: ${name}, wiek: ${age} miasto: ${city}`;
};

console.log(getPersonInfo(FILIP));
