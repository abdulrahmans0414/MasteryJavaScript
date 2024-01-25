// compilation
// code execution

// why compilation


// how javascript code execution


// what is global execution context ?
// what is local execution context  ?

// closures


// for example 1
// hoisting
console.log(this);
console.log(window);
console.log(firstName);

var firstName = "Abdul";
console.log(firstName);


// example 2
// hoisting
console.log(this);
console.log(window);
console.log(myFunc);
console.log(fullName);

// function declarations
function myFunc() {
    console.log("This is my function");
}

var firstName = "Abdul";
var lastName = "Rahman";
var fullName = firstName + " " + lastName;
console.log(fullName);