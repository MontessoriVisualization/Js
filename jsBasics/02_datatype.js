// datatypes

// 1.string
let name = "saugat";
let city = "Kathmandu";
let country = "Nepal";
let userName = "saugat123";
let num = "10";
let num2 = "20";
console.log("concatenated: ", num + num2);
// 2.number
let age = 25;
let price = 100.5;
// 3.boolean
let isStudent = true;
let isEmployed = false;

// 4.undefined
let x;
console.log(x); // Output: undefined

// 5.null
let y = null;
console.log(y); // Output: null

// 6.array
// let shoppingList = ["milk", "bread", "eggs"];
let shopinglist = "milk, bread, eggs";
shopinglist = ["milk", "bread", "eggs"];

//key value pair 0:milk, 1:bread, 2:eggs
students = ["saugat", "ram", "shyam"];
students = ["saugat", "11", true];
console.log(shopinglist);
console.log(shopinglist[0]);
console.log(shopinglist[2]);
let multiValues = [1, "hello", true, null, undefined];

console.log(multiValues);
console.log(multiValues[0]);

//type checking
console.log(typeof name);
console.log(typeof multiValues);
console.log(typeof shopinglist);

// 7.object
let student = {
  name: "saugat",
  age: 25,
  isStudent: true,
  "is Employed": false,
  presentDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
};
console.log(student["name"]);
console.log(student.name);
console.log(student["age"]);
console.log(student["isStudent"]);
console.log(student["is Employed"]);
// console.log(student.is Employed); // This will cause an error due to the space in the key

student.name = "ram";
student.presentDays[0] = "sunday";

console.log(student);

//function

const a = 10;
const b = 20;
const c = 23;
const d = 45;
function add(x, y) {
  //   console.log(x + y);
  return avg(x + y, 2);
}

function avg(sum, count) {
  return sum / count;
}

console.log(add(a, b));
