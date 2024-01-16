// Create function to create multiple object


// function (that function creates a object)
// 2.) add key value pair
// 3.) return that object

// for example -> 
// function createUser(firstName, lastName, email, age, address) {
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;

//     // function inside object call method
//     user.about = function () {
//         return `${this.firstName} ${this.lastName} is ${this.age} years old.`
//     }
//     user.is18 = function () {
//         return this.age >= 18;
//     }
//     return user;
// }

// howmany time user create that time method will be occupied memory storage
// if 1M user are then 1M time method will be created and taken memory storage
// Its work proper but it's bad practice - 
// const user1 = createUser('Abdul', 'Rahman', 'iamarsiddiqui@gmail.com', 22, 'lucknow');
// const user2 = createUser('Abdul', 'Salam', 'absalam429@gmail.com', 25, 'lucknow');
// const user3 = createUser('Mohammad', 'Rehan', 'rehan@gmail.com', 17, 'lucknow');
// console.log(user1); // there are to method in user1
// console.log(user2);  // there are to method in user2
// console.log(user3);  // there are to method in user3




// implemented  upper code -> 
// so that i create a object that name userMethos
// so here i can store there references -> memory addresses
// for example -> 
const userMethos = {
    about: function () {
        return `${this.firstName} ${this.lastName} is ${this.age} years old.`
    },
    is18: function () {
        return this.age >= 18;
    },
}

function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethos.about;
    user.is18 = userMethos.is18;

    return user;
}

const user01 = createUser('Abdul', 'Rahman', 'iamarsiddiqui@gmail.com', 22, 'lucknow');
const user02 = createUser('Abdul', 'Salam', 'absalam429@gmail.com', 25, 'lucknow');
const user03 = createUser('Mohammad', 'Rehan', 'rehan@gmail.com', 17, 'lucknow');
console.log(user01);
console.log(user02);
console.log(user03);

console.log(user01.about());
console.log(user01.is18());

console.log(user03.about());
console.log(user03.is18());

