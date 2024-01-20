// javascript function ====> function + object

function hello() {
    console.log("hello");
}
hello();

// const hello = ["value1"]; // if hello is not function then it have not prototype properties!

// name property ---> tell function name;
console.log(hello.name); //name of function

// we can add our own properties
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);


// function provides more usefull properties.

// when ever we create a function then ->
// that function give us free space | there is empty object 
// {} and that empty object is called prototype


// for example
hello.prototype; // {}
console.log(hello.prototype); // {} object

// only function provide prototype property

if (hello.prototype) {
    console.log("prototype is present ");
} else {
    console.log("prototype is not present ");
}

// how to use prototype
// we can add and remove in prototype 

// for example
hello.prototype.abc = "abc";
hello.prototype.sing = function () {
    return "sing a song";
};
console.log(hello.prototype); // object
console.log(hello.prototype.sing);