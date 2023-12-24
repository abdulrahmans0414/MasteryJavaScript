// trim()
// toUapperCase()
// toLowerCase()
// slice()


let firstName = "    Abdul    ";
console.log(firstName.length);

// trim() use to remove spaces
// string is immutable and its give new string

firstName= firstName.trim(); //abdul
console.log(firstName.length);

// toUpperCase
firstName = firstName.toUpperCase();
console.log(firstName);

firstName = firstName.toLowerCase()
console.log(firstName);


// slice() for example particular string values
// start index
// end index
let newString = firstName.slice(0,3) //abd
console.log(newString);