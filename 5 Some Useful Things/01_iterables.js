// iterables
// jispe hum for loop laga sakten hain
// string , array are iterable

// example for of loop in string
const firstName = "Abdul";
for (let char of firstName) {
    console.log(char);
}

// for of loop in array
const items = ["item1", "item2", "item3", "item4"]
for (let item of items) {
    console.log(item)
}


// object are not itreble
const users = { key1: "value1", key2: "value2", key3: "value3" }

// for of loop in object
// for (let user of users) {
//     console.log(user)
// }

// array like object
// jinke pas length property hoti hain
// aur jisko hum index se access kar sakte hian
// example : -string
const lastName = "Rahman"
console.log(lastName)
console.log(lastName.length)
console.log(lastName[2])

