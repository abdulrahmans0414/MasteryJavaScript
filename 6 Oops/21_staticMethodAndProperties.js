// static methods and properties

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // for example -> class | static method
    static classInfo() {
        return 'this is info class';
    }

    // for example -> class | static property
    static desc = "static property"

    // method
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    };
    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(" ")
        this.firstName = firstName;
        this.lastName = lastName;
    };
    eat() {
        return `${this.firstName} is eating`
    };
    isSuperCute() {
        return this.age <= 1;
    };
    isCute() {
        return true;
    };
}

// intance / object -> 
const person1 = new Person("Abdul", "Rahman", 22);
console.log(person1.eat());
// person1.classInfo(); // can't called , error not a function
// console.log(person1.desc); // undefined


// class | static methods called
const info = Person.classInfo(); //
console.log(info);


// class | static properties called
console.log(Person.desc);