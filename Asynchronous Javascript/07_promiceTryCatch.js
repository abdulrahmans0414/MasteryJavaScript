// Promise 

const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

// How to create a promise 
// produce promise =>> 
const friedRice = new Promise((resolve, reject) => {
    if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve("fried Rice")
    } else {
        reject(new Error("something missing from bucket"))
    }
})

// How to consume a promise
// consume promise =>>
friedRice.then((myFriedRice) => {
    console.log("Received", myFriedRice);
}).catch((error) => {
    console.log(error);
})