// and or operator

let firstName = "Abdul";
let age = 16;

// if (firstName[0] === "A") {
//     console.log("your name starts with A")
// }

// if (age > 18) {
//     console.log("you are above 18");
// }


// and operator
if (firstName[0] === "A" && age >= 18) {
    console.log(" Both comdition satisify then true");
} else {
    console.log("if any of condition not satsify then over all false");
}

// or operator
if (firstName[0] === "A" || age >= 18) {
    console.log("inside If");
} else {
    console.log("inside else");
}