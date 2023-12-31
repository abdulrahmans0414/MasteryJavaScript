// lexical scope
// function check 1st on that function variable declared if not its checked lexical envorment 

function myApp() {
    const myVar = "value1";
    function myFunc() {
        // const myVar = "value37";
        console.log("inside myFunc", myVar);
    };

}