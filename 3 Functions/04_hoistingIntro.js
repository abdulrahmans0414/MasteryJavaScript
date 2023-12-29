// hoisting 

// called hello function befor declarations and its behaviour called hoisting
hello(); // It's work only case of function declaration

function hello() {
    console.log("Hello World !");
}

// if i want to access before create var variable 
console.log(firstName); // undefined
var firstName = "Abdul";

// but if i want to access before create let and const variable
console.log(firstName); // ReferenceError :cant access before initialization
let firstName = "Abdul";
