// use const for creating array

const pi = 3.14
console.log(pi);

// heap memory ["apple ","mango"];  0x11 supposed address
const fruits =["apple ","mango"]; //0x11 supposed adress 

// fruits =[];  // here we try to change then it caught errors because of const
fruits.push("banana");
console.log(fruits);