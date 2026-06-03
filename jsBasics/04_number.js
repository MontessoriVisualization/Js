// // number in js
// const num = 5; // integer number
// const floatNum = 5.5; // floating point number (decimal number)
// const negativeNum = -10; // negative number
// const zero = 0; // zero is also a number in js

// console.log(num);
// console.log(floatNum);
// console.log(negativeNum);
// console.log(zero);
// //type
// console.log(typeof num); // Output: "number"
// console.log(typeof floatNum);
// console.log(typeof negativeNum);
// console.log(typeof zero);

// //most important number methods
// const num1 = 5.56789;
// console.log(num1.toFixed(3)); // rounds the number to 3 decimal places and returns a string 5.56789 ==> "5.568"
// console.log(num1.toExponential(2)); // returns a string representing the number in exponential notation with 2 digits after the decimal point

// console.log(num1.toString()); // converts the number to a string 5.56789 ==> "5.56789"

// console.log(Math.min(1, 2, 4, 5));
// console.log(Math.max(1, 2, 4, 5));
// console.log(Math.abs(num1)); // returns the absolute value of the number
// console.log(Math.round(num1)); //ans will be 5 because .5 and above round u
// console.log(Math.ceil(4.01)); // ans will be 5 because ceil means round up
// console.log(Math.floor(4.99999999)); // ans will be 4 because floor means round down
// console.log(Math.round(Math.random() * 10)); //random number between 0 to 1 but not including 1

//random
console.log(Math.random()); // random number between 0 to 1 but not including 1
console.log(Math.round(Math.random() * 10)); // random number between 0 to 10
const randomWord = ["apple", "banana", "cherry", "date", "elderberry"];

const randomIndex = Math.floor(Math.random() * randomWord.length); // random number between 0 to length of the array
console.log(randomWord[randomIndex]); // log the randomly selected word
