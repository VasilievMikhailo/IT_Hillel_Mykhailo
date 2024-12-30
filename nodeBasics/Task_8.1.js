const numbers = [2, -5, 0, 7, -3, 0, 10, -8]

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (const num of numbers){
    if (num > 0) {
        positiveCount++;
    } else if (num == 0){
        zeroCount++;
    } else{
        negativeCount++;
    }
}

console.log('Кількість позитивних чисел:', positiveCount);
console.log('Кількість негативних чисел:', negativeCount);
console.log('Кількість нульових чисел:', zeroCount);



const numbers_1 = [1, 2, 3, 4, 5]

function doubleNumberByIndex(nums){
    return nums.map((num, index) => num * index);
}

const doubledNumberByIndex = doubleNumberByIndex(numbers_1);
console.log(doubledNumberByIndex);


const numbers_2 = [10, 20, 30, 40, 50]

sum = numbers_2.reduce((currentValue, initialValue) => initialValue + currentValue, 0)

console.log(sum);


const numbers_3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

newArray = numbers_3.filter((number) => number % 2 === 0);

console.log(newArray);


const firstArray = [1, 3, 5];
const secondArray = [2, 4, 6];

const sumArrays_1 = firstArray.concat(secondArray);
const sumArrays_2 = secondArray.concat(firstArray);

console.log(sumArrays_1);
console.log(sumArrays_2);


const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

const newCopyOfNumberList_1 = [...numbersList].sort((a, b) => a - b);
const newCopyOfNumberList_2 = [...numbersList].sort((a, b) => b - a);

console.log("Original:", numbersList);
console.log("Sorted_1:", newCopyOfNumberList_1);
console.log("Sorted_2:", newCopyOfNumberList_2);