// computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// how to create like this 
// const obj = {
//     objkey1: "myvalue1",
//     objkey2: "myvalue2"
// }

// how it work like that 
const obj = {
    [key1]: "value1",
    [key2]: "value2"
}
console.log(obj);

// another way to create
const object = {}
object[key1] = value1;
object[key2] = value2;
console.log(object)