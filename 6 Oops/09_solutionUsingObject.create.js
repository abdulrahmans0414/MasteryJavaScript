// Learn about Object.create using create empty object and Learn about __proto__

// for example
const obj1 = {
    key1: "value1",
    key2: "value2"
}
// const obj2 = {
//     key3: "value3"
// }

// console.log(obj1.key1);
// console.log(obj2.key3);
// console.log(obj2.key1); // undefine but i not want it will undefine so that

// for example 
// agar obj2 ke paas key1 na mile toh woh khud jaye obj1 ke paas wahan dekhen key1 hain kya
// agar key1 hain toh use print kr de


// same as above obj2 create in different ways
// const obj2 ={};
// obj2.key3 = "value3";
// console.log(obj2.key3);


// for example 
// there is one more way to create empty object
const obj2 = Object.create(obj1); // {}  
console.log(obj2);
obj2.key3 = "value3";
// obj2.key2 = "unique"; // if its not existing then obj1 key2 value2 print
console.log(obj2.key3);

// this is happening
console.log(obj2); // __proto__ or // [[prototype]] are same 
console.log(obj2.key2);
console.log(obj2.__proto__);

// __proto__ in offical ecmascript documentation written as [[prototype]]
// and prototype is different things which i learn in feture

