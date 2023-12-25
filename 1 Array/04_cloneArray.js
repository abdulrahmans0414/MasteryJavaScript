// how to clone array
// how to concanate two array

// array1 and array2 are the same but there are 2 pointer address same memory location
// let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log(array1 === array2);

// clone array 
let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"]; // bad practice clone this method
// let array2 = array1.slice(0); // clone using slice method
// let array2 = [].concat(array1);  // clone using concat method
// new way to clone
let array2 = [...array1]; // clone using spread operator

array1.push("item3");

console.log(array1 === array2);
console.log(array1);
console.log(array2);

// concanate two array
let array01 = ["item1", "item2"];
let oneMoreArray =["item5", "item6"];
// let array02 = ["item1", "item2"];
// let array02 = array01.slice(0).concat(["item3", "item4"]);
// let array02 = [].concat(array01, ["item3", "item4"]);
let array02 = [...array01, ...oneMoreArray, "item3", "item4"];

array1.push("item3");

console.log(array01 === array02);
console.log(array01);
console.log(array02);
