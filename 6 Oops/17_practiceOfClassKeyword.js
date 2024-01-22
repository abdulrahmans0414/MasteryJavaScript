// practice of class keywords and extand keywords

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating`
    }

    isSuperCute() {
        return this.age <= 1;
    }

    isCute() {
        return true;
    }
}

const animal = new Animal("tom", 1);
console.log(animal);
console.log(animal.eat());
console.log(animal.isSuperCute());


// example  
// cat class
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating`
    }

    isSuperCute() {
        return this.age <= 1;
    }

    isCute() {
        return true;
    }
}

const bilki = new Cat("bilki", 3);
console.log(bilki);
console.log(bilki.eat());


// i think i can use animal class in cat class or any other
// so i can extand form parent class
// Animal is parent class and dog is subclass

// for example 
class Dog extends Animal {

}
const rock = new Dog("rock", 3);
console.log(rock);