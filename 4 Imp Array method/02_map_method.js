// map method
// map mehtod take as input a callback function
// in map function if we not use return then it will be undefine

// for example create a array
const numbers = [3, 4, 5, 6];

// create a function square
const square = function (number) {
    return number * number;
}
const squareNumber = numbers.map(square); // map function also create new array
console.log(squareNumber);

// example with arrow functions
const squareNumberWithIndex = numbers.map((number, index) => {
    return `index : ${index}, ${number * number}`;
})
console.log(squareNumberWithIndex);


// realistic example use of map methods
const users = [
    { firstName: "Abdul", Age: 22 },
    { firstName: "Sajju", Age: 12 },
    { firstName: "Rehan", Age: 23 },
    { firstName: "Ajju", Age: 24 }
];
const userNames = users.map((user) => {
    return user.firstName;
})
console.log(userNames);