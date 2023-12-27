// spread operator 


// spread operator in case of array
const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

const newArray = [...array1, ...array2];
console.log(newArray);

// for example a array have a string || string also iterable
const newArray2 = [..."abc"] // but we can spread it
console.log(newArray2);


// spread operator in case of object
const obj1 = {
    key1: 'value1',
    key2: 'value2',
    // key1: 'value11' // key1  overwrites latest value 
};
console.log(obj1);

const obj2 = {
    // key1: 'valueUnique', // key1 overwrites
    key3: 'value3',
    key4: 'value4',
};
console.log(obj2);

const newObject = { ...obj1, ...obj2 };
console.log(newObject);

// string in object 
const newStringObject = { ..."abc" }; // key value pairs
console.log(newStringObject);

// array in object
const newArrayObject = { ...["item1", "item2"] }; // key value pairs
console.log(newArrayObject);