// forEach method

// for example ->
// create a array of numbers
const numbers = [1, 2, 3, 4, 5];

// create a function that returns array of numbers multiplied by 2
function multiplyBy2(number, index) {
    console.log("index is ", index);
    console.log(`${number}*2 = ${number * 2}`);
}
multiplyBy2(numbers[0], 0) // its multiply only 1 index but i want multiplication every index by 2

// so we can use for loop
for (let i = 0; i < numbers.length; i++) {
    multiplyBy2(numbers[i], i);
}

// for each method take callback function
// same work like for for loops but it callback only that function 
numbers.forEach(multiplyBy2);

// another example of forEach method
// we can callbacke in same function 
// anomonous function can define which does not have a name
numbers.forEach(function (number) {
    console.log(`${number}*5 = ${number * 2}`);
})


// mostly use of forEach method
const users = [
    { firstName: "Abdul", Age: 22 },
    { firstName: "Sajju", Age: 12 },
    { firstName: "Rehan", Age: 23 },
    { firstName: "Ajju", Age: 24 }
]

// forEach method using anonymous function
users.forEach(function (user) {
    console.log(user.firstName);
})

//  forEach method using arrow functions
users.forEach((user, index) => {
    console.log(user.firstName, index);
})

// work same like for of loop
for (let user of users) {
    console.log(user.firstName);
}