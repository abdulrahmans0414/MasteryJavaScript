// difference between dot and bracket notation

const key =  "email";
const person = {
    name: 'Abdul Rahman',
    age: 22,
    "person hobbies": ["coding", "Writing", "Reading"]
}
console.log(person["person hobbies"]);
person.key = "abdulrahmans0414@gmail.com";
person[key] = "abdulrahmans0414@gmail.com"; //assign value of key
console.log(person);