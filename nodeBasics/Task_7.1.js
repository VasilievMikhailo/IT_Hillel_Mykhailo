function newHandleNum(number, double_number, unpaired_number) {
	if (number % 2 === 0) {
		return double_number();
	} else {
		return unpaired_number();
	}
}

function newHandleEven() {
	return 'Number is even';
}

function newHandleOdd() {
	return 'Number is odd';
}

console.log(newHandleNum(9, newHandleEven, newHandleOdd));
console.log(newHandleNum(16, newHandleEven, newHandleOdd));

console.log('IF Recursive = n - 1:');
function newRecursive_1(num) {
	if (num <= 0) {
		return 'Number = 0 or less then 0';
	}
	console.log(num);
	return newRecursive_1(num - 1);
}

console.log(newRecursive_1(5));

console.log('\nIF Recursive = n - 2:');
function newRecursive_2(num) {
	if (num <= 0) {
		return 'Number = 0 or less then 0';
	}
	console.log(num);
	return newRecursive_2(num - 2);
}

console.log(newRecursive_2(5));

function newDivide(numerator, denominator) {
	let newDivision = numerator / denominator;
	if (denominator === 0) {
		return (massage = "You can't divide by 0!");
	}
	if (typeof numerator !== 'number' || typeof denominator !== 'number') {
		return (massage = 'You can use only numbers!');
	}
	return newDivision;
}

try {
	console.log(newDivide(10, 2));
	console.log(newDivide(0, 10));
	console.log(newDivide(10, 0));
	console.log(newDivide(10, 'String'));
	console.log(newDivide('String', 10));
	console.log(newDivide('String', 'String'));
} catch (massage) {
	console.log(massage);
} finally {
	console.log('Work is done!');
}
