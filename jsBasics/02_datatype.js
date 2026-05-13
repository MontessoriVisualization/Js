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
console.log(shopinglist);
console.log(shopinglist[0]);
let multiValues = [1, "hello", true, null, undefined];
console.log(multiValues);
console.log(multiValues[0]);

//type checking
console.log(typeof name);
console.log(typeof multiValues);
console.log(typeof shopinglist);
