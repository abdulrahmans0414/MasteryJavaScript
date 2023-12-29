// Function 
// A function in JavaScript is a reusable block of code that performs a specific task or calculates a value 

function writeMyName() {
    console.log("Abdul Rahman");
}
writeMyName(); // called function | run function | invoke function 

function squareOfNumber() {
    let n = +prompt("Square of a number");
    return n ** 2;
}
// console.log(squareOfNumber()); // returns number
const returnedSquareValue = squareOfNumber();
console.log("Square of input number is :", returnedSquareValue);


// how to pass a parameters and arguments in a function
function cubeOfNumber(number) {
    return number ** 3;
}
const returnedCubeValue = cubeOfNumber(4); // argument
console.log("Cube of 4 is :", returnedCubeValue);


// for example create a function for sum of two numbers
// in which pass to parameter num1 and num2 
// if we not passed any arguments then it will be NaN 
const sumTwoNumbers = function (num1, num2) {
    return num1 + num2;
}
const returnValue = sumTwoNumbers(12, 5); // argument as a input 2 number
console.log("Sum of 12 and 5 is :", returnValue);


// example 
// isEven create a function
// input : 1 number 
// output : true , false

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(0));

// another way to same write 
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    return false;
}
console.log(isEven(5));

// another way to minimize same code 
function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(12));


// for example create a function 
// input : string
// output :firstCharacter
function firstChar(anyString) {
    return anyString[0];
}
console.log(firstChar("abdul"));


// for example create a function
// input : array, target(number)
// output : index of target if target present in aarray
// [1,2,5,9,27] 9  in 3 index  

function findTarget(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    } return -1
}
const myArray = [1, 3, 5, 9, 27]
const ans = findTarget(myArray, 9)
console.log("Target value found at index :", ans);