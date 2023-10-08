const FILIP = ['Filip', 29, 'Kraków'];

const getPersonInfo = (person) => {
  return `Imię: ${person[0]}, wiek: ${person[1]}, miasto: ${person[2]}`;
};

console.log(getPersonInfo(FILIP));
