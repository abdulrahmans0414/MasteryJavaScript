// call, apply and bind methods


// call methods
function hello() {
    console.log("hello world")
}
hello.call();

// apply methods
function about(hobby, favMusician) {
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName: "Abdul",
    age: 22,
}
const user2 = {
    firstName: "Rehan",
    age: 17,

}
about.apply(user1, ["guitar", "bach"]);

// bind methods
const func = about.bind(user2, "guitar", "bach");
func();