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

let distance = 12; // in km
let time = 25; // in minutes
let isPeakHour = true;
let isPremiumUser = false;
let hasCoupon = true;
let baseFare = 50;
let totalFare = 0;

function calculateFare(distance, time, isPeakHour, isPremiumUser, hasCoupon) {
  if (distance <= 0 && time <= 0) {
    console.log("Distance and time must be greater than 0");
    return;
  }
  distanceFare(distance);
  timeFare(time);
  if (isPeakHour) {
    totalFare = totalFare + totalFare * 0.2; // 20% increase during peak hours
  }
  if (isPremiumUser) {
    totalFare = totalFare - totalFare * 0.1; // 10% discount for premium users
  }
}

function distanceFare(distance) {
  if (distance <= 2) {
    totalFare = baseFare;
  } else {
    totalFare = baseFare + (distance - 2) * 10;
  }
}
function timeFare(time) {
  if (time > 20) {
    totalFare += (time - 20) * 2;
  }
}

calculateFare(distance, time, isPeakHour, isPremiumUser, hasCoupon);
console.log("Total Fare: ", totalFare);

let distance = 12;
let time = 25;
let isPeakHour = true;
let isPremiumUser = false;
let hasCoupon = true;
let BaseFare = 50;
function totalFare(distance, BaseFare) {
  return BaseFare + distance * 10;
}

if (distance === 0 || time === 0) {
  console.log("Invalid input: distance and time must be greater than zero");
} else if (distance <= 2) {
  console.log("your total fare is 50");
} else if (distance > 2) {
  console.log("your total fare is " + " " + totalFare(distance, BaseFare));
}
