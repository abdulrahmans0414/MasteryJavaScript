// class keyword
// 2015 / ES6
// In javascript class is fake but internally works what we lerant before manullay !!


// example of manually work
// function CreateUser(firstName, lastName, email, age, address) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// }

// CreateUser.prototype.about = function () {
//     return `${this.firstName} ${this.lastName} is ${this.age} years old`;
// };
// CreateUser.prototype.is18 = function () {
//     return this.age >= 18;
// };
// CreateUser.prototype.sing = function () {
//     return "sing a song "
// };

// const user01 = new CreateUser('Abdul', 'Rahman', 'iamarsiddiqui@gmail.com', 22, 'lucknow');
// const user02 = new CreateUser('Abdul', 'Salam', 'absalam429@gmail.com', 25, 'lucknow');
// const user03 = new CreateUser('Mohammad', 'Rehan', 'rehan@gmail.com', 17, 'lucknow');



// example of using class keyword
class CreateUser {
    constructor(firstName, lastName, email, age, address) {
        console.log("Constructor called");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old`;
    }
    is18() {
        return this.age >= 18;
    }
    sing() {
        return "sing a song ";
    }
}

// without new keyword constructor cant called
const user01 = new CreateUser('Abdul', 'Rahman', 'iamarsiddiqui@gmail.com', 22, 'lucknow');
const user02 = new CreateUser('Abdul', 'Salam', 'absalam429@gmail.com', 25, 'lucknow');
const user03 = new CreateUser('Mohammad', 'Rehan', 'rehan@gmail.com', 17, 'lucknow');

console.log(user01.firstName);
console.log(user03.is18());

// what is prototype of user01
console.log(Object.getPrototypeOf(user01));
