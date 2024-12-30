import chalk from 'chalk';

const newStudent = {
    newFirstName: "John",
    newLastName: "Doe",
    newAge: 30,
    newCourses: ["Math", "Programming", "History"]
};

console.log(newStudent)
console.log(chalk.blue("\nPer each Property:"))
console.log(newStudent.newFirstName)
console.log(newStudent.newLastName)
console.log(newStudent.newAge)
console.log(newStudent.newCourses)


const newBook = {
    newTitle: "Garry Potter",
    newAuthor: "Joanne Rowling",
    newYear: 1997,
};

const { newTitle, newAuthor } = newBook;

console.log(newTitle);
console.log(newAuthor);


const newCar_1 = {
    newBrand: "Chevrolet",
    newModel: "Tacuma",
    newYear: 2005,
};

const newCar_2 = {
    newBrand: "Toyota",
    newModel: "Rav-4",
    newOwner: "Mykhailo",
};

const newCar_3 = {
    ...newCar_1,
    ...newCar_2,
};

console.log(newCar_3)


const newPerson = {
    newFirstName: "Mike",
    newLastName: "Devidson",
    newAge: 30,
};

Object.assign(newPerson, { newEmail : "testgmail.com"});
delete newPerson.newAge

console.log(newPerson)


const newUsers = [
    { newName: "Mike", newEmail: "mike@gmail.com", newAge: 40 },
    { newName: "Katy", newEmail: "katy@gmail.com", newAge: 18 },
    { newName: "Ron", newEmail: "ron@gmail.com", newAge: 25 }
  ];
  
for (const { newName, newEmail, newAge } of newUsers) {
    console.log(`Name: ${newName}, Email: ${newEmail}, Age: ${newAge}`);
}
