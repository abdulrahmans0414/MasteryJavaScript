// closures 

// function can return function
// -> in return also local variables 


// example -> 1
function printFullName(firstName, lastName) {
    function printName() {
        console.log(firstName, lastName);
    }
    return printName;
}
const ans = printFullName("Abdul", "Rahman");
console.log(ans);
ans();


// example -> 2
function hello(x) {
    const a = "varA";
    const b = "varB";
    return function () {
        console.log(a, b, x);
    }
}
const ans2 = hello("arg");
ans2();
