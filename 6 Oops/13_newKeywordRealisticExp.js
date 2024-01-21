// new keyword 
// 1.) this = {}
// 2.) return this
// 3.) Object.create (CreateUser.prototype);


// constructor function
// use fist letter capital 

function CreateUser(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}

CreateUser.prototype.about = function () {
    return `${this.firstName} ${this.lastName} is ${this.age} years old`;
};
CreateUser.prototype.is18 = function () {
    return this.age >= 18;
};
CreateUser.prototype.sing = function () {
    return "sing a song "
};

const user01 = new CreateUser('Abdul', 'Rahman', 'iamarsiddiqui@gmail.com', 22, 'lucknow');
const user02 = new CreateUser('Abdul', 'Salam', 'absalam429@gmail.com', 25, 'lucknow');
const user03 = new CreateUser('Mohammad', 'Rehan', 'rehan@gmail.com', 17, 'lucknow');
console.log(user01);
console.log(user01.is18());
console.log(user01.about());
console.log(user01.sing());