// filter method
// filter method take as input a callback function

// for example create a array 
const numbers = [1, 2, 3, 4, 5];

// create isEven function 
const isEven = function (number) {
    return number % 2 === 0;
}

// use filter method 
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);


// same thing for oddNumber using arrow functions
const oddNumbers = numbers.filter((number) => {
    return number % 2 !== 0;
});
console.log(oddNumbers);