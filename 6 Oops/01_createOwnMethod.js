// Method 
// function inside object


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