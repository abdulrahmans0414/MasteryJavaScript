// clone using Object.assign

// heap -> memory

const obj1 = {
    key1: "value1",
    key2: "value2",
};

const obj2 = obj1;
obj1.key3 = "value3";
console.log(obj1);
console.log(obj2);

// clone using spread operator
const obj3 = { ...obj1 };
obj1.key3 = "value3";
console.log(obj3);

// clone using Object.assign
const obj4 = Object.assign({}, obj1)
console.log(obj4);