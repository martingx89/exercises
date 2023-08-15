let firstName = new String('Brendan');
let lastName = String('Eich');
let user = { id: 1, admin: true };
let numbers = [1, 2, 3];
let nothing;
let empty = null;
let greet = function () {
  return 'Hi!';
};
let greeting = new greet();

console.log('object' === typeof firstName); //true
console.log('object' === typeof lastName); //false
console.log('object' === typeof user); //true
console.log('object' === typeof numbers); //true
console.log('object' === typeof empty); //true
console.log('object' === typeof nothing); //false
console.log('object' === typeof greet); //false
console.log('object' === typeof greeting); //true

// Które z powyższych porównań zwrócą prawdę, a które fałsz?
// Dla jakiej wartości działanie typeof zwróci błędną informację?
// (oficjalny bug JavaScript)
