// use of prototype
// prototype is empty object and __proto__ is a reference chain get

function createUser(firstName, lastName, email, age, address) {
    const user = Object.create(createUser.prototype); // give empty object {} and chain get
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    return user;
}
createUser.prototype.about = function () {
    return `${this.firstName} ${this.lastName} is ${this.age} years old`;
};
createUser.prototype.is18 = function () {
    return this.age >= 18;
};
createUser.prototype.sing = function () {
    return "sing a song "
};

const user01 = createUser('Abdul', 'Rahman', 'iamarsiddiqui@gmail.com', 22, 'lucknow');
const user02 = createUser('Abdul', 'Salam', 'absalam429@gmail.com', 25, 'lucknow');
const user03 = createUser('Mohammad', 'Rehan', 'rehan@gmail.com', 17, 'lucknow');
console.log(user01);
console.log(user01.is18());
console.log(user01.about());
console.log(user01.sing());
