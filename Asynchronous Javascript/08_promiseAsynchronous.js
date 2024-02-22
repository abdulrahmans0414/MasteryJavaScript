// fist line
console.log("script started");

// second line
const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

// third line
// promise add in microtask queue

// produce promise =>> 
// How to create a promise 
const friedRice = new Promise((resolve, reject) => {
    if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve("fried Rice")
    } else {
        reject(new Error("something missing from bucket"))
    }
})

// 4th line 
// work by browsers in microtask queue

// consume promise =>>
// How to consume a promise
friedRice.then((myFriedRice) => {
    console.log("Received", myFriedRice);
}).catch((error) => {
    console.log(error);
})

// fifth line
// callback queue
setTimeout(() => {
    console.log("Inside setTimeout");
}, 1000)

// sixth line 
for (let i = 0; i < 4; i++) {
    console.log(Math.floor(Math.random() * 50));
}

// seventh line
console.log("script completed");