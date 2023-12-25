//  for loop in array

// for loop 
// for (let i = 0; i <= 9; i++) {
//     console.log(i);
// }

let fruits = ["apple", "mango", "banana"];

console.log(fruits.length);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

let fruits2 = [];

for (let i = 0; i <= fruits.length - 1; i++) {
    // console.log(i);
    // console.log(fruits[i].toUpperCase());
    fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);