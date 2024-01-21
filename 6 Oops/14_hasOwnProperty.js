// has own properties

// for example
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


// key in user01
for (let key in user01) {
    // console.log(key);
    // but i don't want to show prototype key
    if (user01.hasOwnProperty(key)) {
        console.log(key);
    };
}
