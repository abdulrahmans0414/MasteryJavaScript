// synchronous programming vs asynchronous programming

// synchronous programming -->
// javascript synchronous programming single threaded

console.log("script start");
// block code for futher code because of loading
for (let i = 0; i < 1000; i++) {
    console.log("inside for loop");
}

console.log("script end");

// asynchronous programming -->
// setTimeout -> provide by browser
console.log("script start");

// setTimeout given a id
const id = setTimeout(() => {
    console.log("inside setTimeout");
}, 1000)

for (let i = 0; i < 100; i++) {
    console.log("inside for loop");
}

console.log("setTimeout id is", id);

// function cannot run if i clearTimeout
console.log("clearing time out");
clearTimeout(id);

console.log("script end");