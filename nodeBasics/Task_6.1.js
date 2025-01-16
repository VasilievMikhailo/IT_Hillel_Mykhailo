function newSquare(width, height) {
	return width * height;
}

console.log('Square = ', newSquare(5, 10));

const newSquare_2 = function (width, height) {
	return width * height;
};

console.log('Square = ', newSquare_2(4, 10));

const newSquare_3 = (width, height) => {
	return width * height;
};

console.log('Square = ', newSquare_3(3, 10));

function newAge(age) {
	if (age >= 18) {
		return 'True';
	} else {
		return 'False';
	}
}

console.log(newAge(18));
console.log(newAge(25));
console.log(newAge(15));

function newCheckOrder(available, ordered) {
	if (available < ordered) {
		return 'Your order is too large, we don’t have enough goods.';
	} else if (ordered == 0) {
		return 'Your order is empty';
	} else {
		return 'Your order is accepted';
	}
}

console.log(newCheckOrder(5, 7));
console.log(newCheckOrder(5, 0));
console.log(newCheckOrder(5, 3));
console.log(newCheckOrder(5, 5));
