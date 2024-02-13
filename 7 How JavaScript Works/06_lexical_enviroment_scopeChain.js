// lexical environment , scope chain

const lastName = "Rahman";

const printName = function () {
    const firstName = "Abdul";
    function myFunction() {
        console.log(firstName);
        console.log(lastName);
    }
    myFunction();
}
printName();