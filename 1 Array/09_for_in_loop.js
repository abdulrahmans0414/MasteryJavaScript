// For in loop in array

const fruits = ["apple", "mango", "banana"];
const fruits2 = [];
for (let index in fruits) {
    fruits2.push(fruits[index]);
}
console.log(fruits2);