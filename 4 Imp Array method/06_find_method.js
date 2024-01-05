// find method 
// as input take callback function
// find method check only first accurence

const myArray = ["Hello ", "catt", "dog", "lion"];

function isLength3(string) {
    return string.length === 3;
}
const ans = myArray.find(isLength3);
console.log(ans);

// same thing with arrow functions
const answer = myArray.find((string) => string.length === 3);
console.log(answer);

// realistic example -->
const users = [
    { userId: 1, usernames: "Abdul" },
    { userId: 2, usernames: "Rehan" },
    { userId: 3, usernames: "Salam" },
    { userId: 4, usernames: "Owais" },
];

const myUser = users.find((user) => user.userId === 3);
console.log(myUser);