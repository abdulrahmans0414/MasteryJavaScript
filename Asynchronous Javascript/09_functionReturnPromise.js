// function returning promise

const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

function ricePromise() {
    return new Promise((resolve, reject) => {
        if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
            resolve({ value: "friedrice" });
        }
        else {
            reject("Could not find")
        }
    })
}

ricePromise().then((myFriedRice) => {
    console.log("Received", myFriedRice);
}).catch((error) => {
    console.log(error);
})