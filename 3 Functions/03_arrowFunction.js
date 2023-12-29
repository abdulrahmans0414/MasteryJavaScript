// arrow functions

// example
const writeMyName = () => {
    console.log("Abdul Rahman");
}
writeMyName();

// example 
const findTarget = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    } return -1
}
const myArray = [1, 3, 5, 9, 27]
const ans = findTarget(myArray, 9)
console.log("Target value found at index :", ans);

// example
// if a function have only one parameter, then we can remove ()
const isEven = number => number % 2 === 0;
console.log(isEven(12));