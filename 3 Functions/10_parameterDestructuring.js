//  Parameter destructuring

// use mostly in ->
// object
// React


// for example a person object 
const person = {
    firstName: "Abdul Rahman",
    gender: "Male",
    age: "22"
}

// for example a printDetail function object
function printDetails(object) {
    console.log(object.firstName);
    console.log(object.gender);
}
printDetails(person);

// parameter destructuring 
function printDetails({ firstName, gender, age }) {
    console.log(firstName);
    console.log(gender);
}
printDetails(person);