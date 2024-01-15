// Oops !

// create a user1 object
const user1 = {
    firstName: 'Abdul',
    lastName: 'Rahman',
    email: 'abdulrahmans0414@gmail.com',
    age: 22,
    address: 'Chinaht, Luckhnow',
    about: function () {
        return `${this.firstName} ${this.lastName} is ${this.age} years old.`
    },
    is18: function () {
        return this.age >= 18;
    },
}
console.log(user1);
const aboutUser = user1.about();
const userIs18 = user1.is18();
console.log(aboutUser);
console.log(userIs18);

// create a user2 object
const user2 = {
    firstName: 'Abdul',
    lastName: 'Salam',
    email: 'absalam4294@gmail.com',
    age: 25,
    address: 'Rudrapur, Deoria',
    about: function () {
        return `${this.firstName} ${this.lastName} is ${this.age} years old.`
    },
    is18: function () {
        return this.age >= 18;
    },
}
console.log(user2);
const aboutUser2 = user2.about();
const user2Is18 = user2.is18();
console.log(aboutUser2);
console.log(user2Is18);



