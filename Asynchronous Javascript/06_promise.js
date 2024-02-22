// Promise 

const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

// for example ->
// promise
// I said I will make fried rice for you

// status -> pending -> (I haven't fulfilled the promise yet)
// value -> undefined -> (don't know what the value is)

// What things are needed to make fried rice?
// So, I checked the bucket - vegetables, salt, and rice are present
// -> fried rice will be made from these

// status -> fulfilled
// value -> fried rice

// in case salt is not present in the bucket then
// status -> rejected
// value -> message(error) -> salt is not present in the bucket




// How to create a promise =>> produce promise
// executer function
const friedRice = new Promise((resolve, reject) => {
    if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve("fried Rice")
    } else {
        reject(new Error ("something missing from bucket"))
    }
})


// How to consume a promise
// consume promise =>>
friedRice.then(
    // jab promice resolve hoga
    (myFriedRice) => {
        console.log("Received", myFriedRice);
    },
    // jab promice reject hoga
    (error) => {
        console.log(error);
    })


