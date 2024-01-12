// this | window object -> global object in javascript

console.log(this);
console.log(window);

"use strict"

function myFunc() {
    console.log("hello world");
    console.log(this);
}
myFunc()