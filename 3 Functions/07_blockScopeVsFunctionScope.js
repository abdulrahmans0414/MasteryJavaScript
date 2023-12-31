// block scope vs function scope


// let and const are block scope
// for example create a block 
{
    let firstName = "Abdul";
    console.log(firstName);  //access inside of block scope
}
// so we can access let variable outside of block scope
console.log(firstName);

// for example create a block  
{
    const firstName = "Abdul";
    console.log(firstName); //access inside of block scope
}
// so we can not access const variable outside of block scope
console.log(firstName);


// var is a function scope
// for example create a block
{
    var firstName = "Abdul";
    console.log(firstName); //access inside of block scope
}
// so we can access var variable also outside of block scope 
console.log(firstName);


// for example 
function myApp() {
    if (true) {
        // let firstName="Abdul";
        var firstName = "Abdul";
        console.log(firstName);
    }
    console.log(firstName); 
}
myApp();