// arrow functions
// in arrow functions this taken by its sorrounding

const user1 = {
    firstName: 'Abdul',
    age: 22,
    about: () => {
        console.log(this); // window
        console.log(this.firstName, this.age);
    }
}
user1.about();

// sort syntax
const user2 = {
    firstName: 'Rehan',
    age: 17,
    about() {
        console.log(this.firstName, this.age);
    }
}
user2.about();