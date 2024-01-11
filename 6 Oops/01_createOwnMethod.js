// Method 
// function inside object

// example:
const person = {
    firstName: 'Abdul',
    age: 22,
    about: function () {
        // this is object that call function
        console.log(this);
        console.log(`person name is ${this.firstName} and person age is ${this.age}`);
    }
}
console.log(person.about);
person.about();

// another example
function userInfo() {
    // this is object that call function
    console.log(this);
    console.log(`person name is ${this.firstName} and person age is ${this.age}`);
}

const user1 = {
    firstName: 'Abdul',
    age: 22,
    about: userInfo
}

const user2 = {
    firstName: 'Rehan',
    age: 17,
    about: userInfo
}

const user3 = {
    firstName: 'Samar',
    age: 16,
    about: userInfo
}
console.log(userInfo);
userInfo();
user1.about();
user2.about();
user3.about();