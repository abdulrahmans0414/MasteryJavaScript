// Nested Destructuring

const users = [
    { userId: 1, firstName: "Abdul Rahman", gender: "male" },
    { userId: 2, firstName: "Abdul Salam", gender: "male" },
    { userId: 3, firstName: "Mohd rehan", gender: "male" }
]

// where from destructuring for example in array 
const [user1, user2, user3] = users;
console.log(user1, user2, user3);

// but for example we need user1 of fistName and user3 of gender
// so here destructuring from object
const [{ firstName: user1firstName, userId }, , { gender: user3Gender }] = users;
console.log(user1firstName, userId, user3Gender);
