// promise.resolve

const myPromise = Promise.resolve(5);
myPromise.then((valuve) => {
    console.log(valuve);
})


// then()
// then method hamesa promise return karta hain


// promise chaining
function myNewPromise() {
    return new Promise((resolve, reject) => {
        resolve("foo");
    });
};
myNewPromise()
    .then((value) => {
        console.log(value);
        value = value + "bar";
        return value; 
        // if i not write return value will undefined
        // and internal work like Promise.resolve(undefined)
    }).then((value) => {
        console.log(value);
        value += "baaz";
        return value;
    }).then((value) => {
        console.log(value);
    });