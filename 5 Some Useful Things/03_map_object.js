// Map 

// map is an iterable object
// store data in ordered fashion
// Strore key value pairs (like objects)
// duplicate keys are not allowed like objects
// different between maps and objects
// objects can have string or symbol
// as key
// in maps you can use anything as key
// like array, number, string


// for example -> create a object name of person
// object literal -> key always in string || symbol
const person = {
    firstName: 'Abdul',
    age: 22,
    1: "one"
}
console.log(person.firstName);
console.log(person["firstName"]);
console.log(person["1"]); //string

// in objects i can use for in loop
for (let key in person) {
    console.log(typeof key);
}


// how to working map 
// for example -> create a object name of user using map 
// map -> store key value pair and key will anytype in map

const user = new Map(); // create empty map
console.log(user);

// add key vlaue pair
user.set("firstName", "Abdul");
user.set("age", "22");
user.set(1, "one");
user.set([1, 2, 3], "onetwothree");
// console.log(user.firstName); // cant access user.firstName in map | undefined
// console.log(user["firstName"]); // cant access user["firstName"] in map | undefined

// thatwhy i need to use get method to access user in map
console.log(user.get("firstName"));
console.log(user.get(1));
console.log(user.keys());

// map itrable
// so that i can use for of loop 
for (let key of user.keys()) {
    console.log(key, typeof key);
}

// another example for of loop
for (let key of user) {
    // console.log(typeof key, key);
    console.log(Array.isArray(key));
}

// destructuring for of loop
for (let [key, value] of user) {
    console.log(key, value);
}

// add key value pair directly to map 
const employee = new Map([["firstName", "Abdul"], ["age", 22]]);
console.log(employee);



// realistic example of map
const person1 = {
    id: 1,
    firstName: "Abdul",
}
const person2 = {
    id: 2,
    firstName: "Rehan",
}

// add as key person1 object to map
const extraInfo = new Map();
extraInfo.set(person1, { age: 22, gender: 'male' });
extraInfo.set(person2, { age: 17, gender: 'male' });
console.log(extraInfo);
console.log(person1.id);
console.log(extraInfo.get(person1));
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).age);