// if else
// if (condition) {
//     // code to run if condition is true
// }
// else{
//     // code to run if condition is false
// }

//condiional operators
// ==, ===, !=, !==, >, <, >=, <=
console.log("== checks only the values:", 5 == "5");
console.log("=== checks both the values and the types:", 5 === "5");
console.log("!= checks if values are not equal:", 5 != "5");
console.log("!== checks if values and types are not equal:", 5 !== "5");
console.log("> checks if left is greater than right:", 5 > 3);
console.log("< checks if left is less than right:", 5 < 10);
console.log(">= checks if left is greater than or equal to right:", 5 >= 5);
console.log("<= checks if left is less than or equal to right:");
//not operator

//logical operators
// &&, ||, !
console.log("! negates the condition:", !(5 <= 10));

console.log("&& checks if both conditions are true:", 5 > 3 && 10 < 5);
console.log("&& checks if both conditions are true:", !(5 > 3 && 10 < 5));
console.log("|| checks if at least one condition is true:", 5 > 3 || 10 < 5);

// if else example
let age = 20;
if (age >= 18) {
  console.log("You are an adult. You are eligible to vote.");
} else {
  console.log("You are a minor. You are not eligible to vote.");
}

if (age < 13) {
  console.log("You are a child.");
} else if (age >= 13 && age < 18) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}

function add(a, b) {
  console.log("The sum is: ", a + b);
}

num1 = 10;
num2 = 20;
operatpr = "+";
if (operatpr == "+") {
  add(num1, num2);
}
