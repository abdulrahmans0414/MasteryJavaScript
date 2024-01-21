// more about prototype
// prototype --> function


// let numbers = [1, 2, 3, 4]; // but its not function

// then where function involve
// internally javascript arrays created as ->
// use Array constructor
let numbers = new Array(1, 2, 3, 4);
console.log(Array.prototype); // array
console.log(numbers);


// how to know what is prototype
console.log(Object.getPrototypeOf(numbers));