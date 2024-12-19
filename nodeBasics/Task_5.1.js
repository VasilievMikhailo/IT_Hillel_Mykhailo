const averageGrade = 101

if (averageGrade < 60) {
    console.log('Незадовільно');
} else if (averageGrade >= 60 && averageGrade <= 70){
    console.log('Задовільно');
} else if (averageGrade >= 71 && averageGrade <= 80){
    console.log('Добре');
} else if (averageGrade >= 81 && averageGrade <= 90){
    console.log('Дуже добре');
} else if (averageGrade >= 91 && averageGrade <= 100){
    console.log('Відмінно');
} else {
    console.log ('Оцінка не може бути вище 100 балів')
}



switch (true) {
    case averageGrade < 60:
        console.log('Незадовільно');
        break;
    case averageGrade >= 60 && averageGrade <= 70:
        console.log('Задовільно');
        break;
    case averageGrade >= 71 && averageGrade <= 80:
        console.log('Добре');
        break;
    case averageGrade >= 81 && averageGrade <= 90:
        console.log('Дуже добре');
        break;
    case averageGrade >= 91 && averageGrade <= 100:
        console.log('Відмінно');
        break;
    default:
        console.log('Оцінка не може бути вище 100 балів')
}

console.log('Таблица умножения для цикла For')
const number = 5

for(let i = 1; i <= 10 ; i++) {
    console.log(`${number} * ${i} = ${number * i}`)
}

console.log('Таблица умножения для цикла While')
let i = 1
while(i <= 10) {
    console.log(`${number} * ${i} = ${number * i}`)
    i++
}