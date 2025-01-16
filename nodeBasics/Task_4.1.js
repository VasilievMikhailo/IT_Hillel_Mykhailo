let newNull = null;
let newUndefined;
let newString = 9;
let newNumber = 'TEST';
let newBoolean = Boolean('newBoolean');

console.log(newNull);
console.log(newUndefined);
console.log(newString);
console.log(newNumber);
console.log(newBoolean);

const newName_1 = 'Mykhailo';
const newName_2 = 'Kostia';
let newGreeting_Concatenation = newName_1 + ' and ' + newName_2 + ' Hello';
let newGreeting_Template = `Hello, dear ${newName_1.toUpperCase()} and dear ${newName_2.toUpperCase()} !`;

console.log(newGreeting_Concatenation);
console.log(newGreeting_Template);

let newAge = 17;
let newAge_Check = Boolean(newAge >= 18);

console.log(newAge_Check);

let newRadius_Of_Circle = 5;
let newCircle_Radius = Math.pow(newRadius_Of_Circle, 2) * Math.PI;

console.log(newCircle_Radius.toFixed(2));

let newLength_Of_Rectangle = 3;
let newWidth_Of_Rectangle = 4;
let newSquare_Of_Rectangle = newLength_Of_Rectangle * newWidth_Of_Rectangle;

console.log(newSquare_Of_Rectangle.toFixed(2));

let newRadius_Of_Cylinder = 7;
let newHeight_Of_Cylinder = 2;
let newVolume_of_Cylinder = Math.PI * Math.pow(newRadius_Of_Circle, 2) * newHeight_Of_Cylinder;

console.log(newVolume_of_Cylinder.toFixed(2));
