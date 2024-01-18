// for example
// if we need 1k methods then
const userMethos = {
    about: function () {
        return `${this.firstName} ${this.lastName} is ${this.age} years old.`
    },
    is18: function () {
        return this.age >= 18;
    },
    sing: function () {
        return ' toon na na na na la la '
    }
}

function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    // here also write 1k method
    user.about = userMethos.about;
    user.is18 = userMethos.is18;
    user.sing = userMethos.sing;

    return user;
}

const user01 = createUser('Abdul', 'Rahman', 'iamarsiddiqui@gmail.com', 22, 'lucknow');
const user02 = createUser('Abdul', 'Salam', 'absalam429@gmail.com', 25, 'lucknow');
const user03 = createUser('Mohammad', 'Rehan', 'rehan@gmail.com', 17, 'lucknow');
console.log(user01);
console.log(user02);
console.log(user03);

console.log(user01.about());
console.log(user01.sing());

