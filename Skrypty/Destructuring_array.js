const FILIP = ['Filip', 29];

const getPersonInfo = ([name, age, city = 'Warszawa']) => {
  //kolejność ma znaczenie!
  return `Imię: ${name}, wiek: ${age} miasto: ${city}`;
};

console.log(getPersonInfo(FILIP));
