// getter and setter

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // method

    // getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    // setter
    setName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set fullName(fullName) {
        // Abdul Salam
        // after that store in a varible

        const [firstName, lastName] = fullName.split(" ")
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("Abdul", "Rahman", 22);
console.log(person1);
// console.log(person1.fullName());

// as property used get
console.log(person1.fullName); // property

// if i want change firstName and lastName for that use setter
person1.setName("Mohammad", "Rehan");
console.log(person1.fullName);

// for example 
person1.fullName = "Abdul Salam";
console.log(person1);
console.log(person1.fullName);