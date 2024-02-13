// Are let and const are hoisting

// In case of let variable
// hoisting

// Uncaught ReferenceError: 
// Cannot access 'firstName' before initialization

// Uncaught ReferenceError: 
// firstName is not defined

// console.log(firstName);  // unintialization / if not create varible and called then give not define
let firstName = "Abdul";  // initialize firstName 
console.log(firstName); // assigned undefine to Abdul


// In case  of const variable
// hoisting

// console.log(lastName); 
const lastName = "Rahman";
console.log(lastName);