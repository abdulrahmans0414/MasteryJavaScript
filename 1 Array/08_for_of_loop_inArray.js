// for of loop in arraay

const fruits = ["apple", "mango", "banana"];
const fruits2 = [];
for (let fruit of fruits) {
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);