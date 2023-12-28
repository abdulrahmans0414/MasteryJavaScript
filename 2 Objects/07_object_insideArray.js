// object inside array
// very useful in real world applications


const users = [
    { userId: 1, firstName: "Abdul Rahman", gender: "male" },
    { userId: 2, firstName: "Abdul Salam", gender: "male" },
    { userId: 3, firstName: "Mohd rehan", gender: "male" }
]
// console.log(users);

for ( let user of users ) {
    console.log(user);
    console.log(user.firstName);
}