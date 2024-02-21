// understand callback in synchronous programming

// normal 2 functions individually called
function myFunc1() {
    console.log("function is doing 1 task");
}
function myFunc2() {
    console.log("function is doing 2 task");
}
myFunc1();
myFunc2();


// callback function
function myFunc3(callback) {
    console.log("function is doing 3 task");
    callback();
};
function myFunc4() {
    console.log("function is doing 4 task");
};
myFunc3(myFunc4);


// another way to callback function
function myFunc5(callback) {
    console.log("function is doing 5 task");
    callback();
};

myFunc5(() => {
    console.log("function is doing 6 task");

})


// example of callback function
function getTwoNumbersAndADD(number1, number2, callback) {
    if (typeof number1 === "number" && typeof number2 === "number") {
        callback(number1, number2);
    } else {
        console.log("Wrong Data Type");
    }
}

getTwoNumbersAndADD(4, 5, (num1, num2) => {
    console.log(num1 + num2);
})


// same example in different ways 
function getTwoNumbersAndADD(number1, number2, onSuccess, onFailure) {
    if (typeof number1 === "number" && typeof number2 === "number") {
        onSuccess(number1, number2);
    } else {
        onFailure();
    }
}

getTwoNumbersAndADD("4", 5, (num1, num2) => {
    console.log(num1 + num2);
},

    () => {
        console.log("Wrong Data Type");
        console.log("Please pass numbers only");
    })

// same example in different simple ways
function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure) {
    if (typeof number1 === "number" && typeof number2 === "number") {
        onSuccess(number1, number2);
    } else {
        onFailure();
    }
}

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

function onFail() {
    console.log("Wrong data type");
    console.log("please pass numbers only")
}
getTwoNumbersAndAdd(4, 4, addTwoNumbers, onFail);
