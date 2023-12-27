// how to iterate objects

const person = {
    name: "Abdul Rahman",
    age: "22",
    "person hobbies": ["coding", "writing", "reading"]
}

// for in loop
for (let key in person) {
    // console.log(person.key); // in case of dot give undefine
    console.log(person[key]);
    console.log(`${key} : ${person[key]}`);
}

// object.keys
console.log(Object.keys(person)); // typeof object and give a array
const val = Array.isArray(Object.keys(person));
console.log(val);

// we can use for of loop
for (let key of Object.keys(person)) {
    console.log(`${key} : ${person[key]}`);
}