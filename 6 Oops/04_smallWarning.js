// small warning 

// for example 
const user1 = {
    firstName: "Abdul",
    age: 22,
    about: function () {
        console.log(this.firstName, this.age);
    }
}

// don't do this mistake 
user1.about(); // do

const myFunc = user1.about;
myFunc(); // don't do this mistake

const myFunc2 = user1.about.bind(user1);
myFunc2(); // now its working