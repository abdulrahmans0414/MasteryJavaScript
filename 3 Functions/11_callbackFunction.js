// callback functions

// for example passing a parameter in function as array
function myFunc(a) {
    console.log("hello world!");
    console.log(a);
}
myFunc([1, 2, 3, 4]);

// for example passing a parameter in function as string
function myFunc(a) {
    console.log("hello world!");
    console.log(a);
}
myFunc("abc");

// for example passing a parameter in function as object
function myFunc(a) {
    console.log("hello world!");
    console.log(a);
}
myFunc({ name: "Abdul Rahman", gender: "male" });

// for example passing a parameter in function as function
function myFunc2() {
    console.log("inside myFunc2");
}

function myFunc(a) {
    console.log(a);
}
myFunc(myFunc2);

// callback function
function myFunc2() {
    console.log("inside myFunc2");
}

function myFunc(callback) {
    console.log("hello there I am a func1 and I can ...");
    callback();
}
myFunc(myFunc2);

// another example of callback function
function myFunc2(name) {
    console.log("inside myFunc2");
    console.log(`your name is ${name}`);
}

function myFunc(callback) {
    console.log("hello there I am a func1 and I can ...");
    callback("Abdul Rahman");
}
myFunc(myFunc2);