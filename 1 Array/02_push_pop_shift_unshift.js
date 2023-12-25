//  array push pop
// array shift unshift

let fruit = ["apple", "Banana", "orange"];
console.log(fruit);

// Push --> add an element in last
// array is mutable so pop mehtoh changes orignal array
fruit.push("mango");
console.log(fruit);

// pop --> remove an element in last
fruit.pop()
console.log(fruit);
console.log(fruit.pop());

// its also give removed elements in return
let poppedFruit = fruit.pop();
console.log(fruit);
console.log("popped fruit is", poppedFruit);

// unshift --> add element in starting of array
fruit.unshift("watermalen");
console.log(fruit);

// shift --> remove element from staring of array
let removedFruit = fruit.shift();
console.log(fruit);
console.log("remove fruits is", removedFruit);