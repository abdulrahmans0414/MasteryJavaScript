// Set (it is itrebles)
// store data
// set also have own method
// No index-based access
// Oder is not granteed
// unique items only (no duplicates allowed)


// how to create set 
// const varibaleName = new Set();

// for example
const numbers = new Set([1, 2, 5, 7]);
const items = ["item1", "item2"];
console.log(numbers);
console.log(numbers[2]); // index-based not accessible
numbers.add(1); // no duplicates allowed
numbers.add(items);
console.log(numbers);

// another example with strings
const strings = new Set("abc");
console.log(strings);
strings.add("d");
console.log(strings);


// check set number are availble are not by use has method 
if (numbers.has(1)) {
    console.log("number 1 is present");
} else {
    console.log("number  1 is not present");
};

// set is iterable thatwhy we can apply for of loop
for (let string of strings) {
    console.log(string);
}

// for example -> found of unique numbers and length
const myArray = [1, 2, 4, 4, 5, 5, 6];
const uniqueElement = new Set(myArray);
console.log(uniqueElement);
console.log(myArray);

let length = 0;
for (let element of uniqueElement) {
    length++;
}
console.log(length);