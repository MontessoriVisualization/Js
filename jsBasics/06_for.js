// for (let index = 0; index < array.length; index++) {

// }

for (let i = 0; i < 10; i = i + 2) {
  console.log("index", i);
}
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
const array = [1, "two", true, 4, 5, 6];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

let i = 0;
while (i < array.length) {
  console.log(array[i]);
  i++;
}

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
