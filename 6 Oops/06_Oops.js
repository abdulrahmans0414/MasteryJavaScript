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


// if we need 10M users !!, then we need to better approach
// thatwhy we create a function that take as input -> firstName, lastName, email, age, address and return a object.

// function (that function creates a object)
// 2.) add key value pair
// 3.) return that object

// for example -> 
// Its work proper but it's bad practice - 
function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    // function inside object call method
    user.about = function () {
        return `${this.firstName} ${this.lastName} is ${this.age} years old.`
    }
    user.is18 = function () {
        return this.age >= 18;
    }
    return user;
}

const user3 = createUser('Abdul', 'Rahman', 'iamarsiddiqui@gmail.com', 22, 'lucknow');
console.log(user3);

// called method
const aboutUser3 = user3.about();
const is18User3 = user3.is18();
console.log(aboutUser3);
console.log(is18User3);
