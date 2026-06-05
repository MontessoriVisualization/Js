// string in js
//"",'',``

const name = "sauga";
//  s   a   u   g   a
//  0   1   2   3   4
// -5  -4  -3  -2  -1
//string indexing
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
console.log(name.length); // length of the string
console.log(name[name.length - 1]); // last character of the string

// string concatenation
const firstName = "saugat";
const lastName = "shrestha ";
const fullName = firstName + lastName;
const properFullName = firstName + " " + lastName; // adding space between first and last name
const usingComma = (firstName, lastName); // this will not concatenate the strings, it will just declare two variables
const backticksFullName = `${firstName} ${lastName}`; // using backticks and template literals to concatenate strings

console.log(fullName);
console.log(properFullName);
console.log(usingComma);
console.log(backticksFullName);

let introction =
  "hi my name is " + firstName + " " + lastName + " and i am learning js";

const introctionUsingBackticks = `hi my name is ${firstName} ${lastName} and i am learning js      `;

// slicing strings

console.log(introction.slice(0, 2)); // slicing from index 0 to index 2 (not including index 2)
console.log(introction);
const slicedIntroction = introction.slice(0, 2);
console.log(slicedIntroction);
introction = introction.slice(0, 2); // reassigning the sliced string to the original variableq
console.log(introction);
console.log(name.slice(0)); // slicing from index 0 to the end of the string
console.log(name.slice(0, name.length));

//USING NEGATIVE INDEXING in slice method
console.log(name.slice(-5)); // slicing the last 5 characters of the string
console.log(name.slice(-5, -3)); // slicing the last 2 characters of the string

// string methods
const str = "hellO wOrld";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);
console.log(str.length);

const trimmedStr = "   hello world   ";
console.log(trimmedStr.trim()); // removes the whitespace from both ends of the string

const splitStr = "tshirt, pant, shoes";
console.log(splitStr.split(", ")); // splits the string into an array of substrings based on the separator ", "

// // string immutability
// let immutableStr = "hello";
// immutableStr[0] = "H";
// console.log(immutableStr); // Output: "hello" (unchanged)


// const a = "John said "i like pizza" "; // This will cause an error because of the double quotes inside the string
const a = 'John said "i like pizza" '; // This is correct because we are using single quotes to define the string
const b = "John said 'i like pizza' "; // This is also correct because we are using double quotes to define the string
const c = `John said "i like pizza" `; // This is also correct because we are using backticks to define the string
const scapedStr = "John said \"i like pizza\" "; // This is also correct because we are using escape characters to include double quotes inside the string
console.log(a);
console.log(b);
console.log(c);
console.log(scapedStr);





