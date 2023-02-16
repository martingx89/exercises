function addToArray(item, array) {
	const newArray = array;
	newArray.concat(item);

	return newArray;
}

const fruits = ["apple", "orange"];
const favFruits = addToArray("banana", fruits);

console.log({ fruits, favFruits });
