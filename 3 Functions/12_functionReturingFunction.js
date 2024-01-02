// function returing function


// example
function myFunc() {
    return "a";
}
const ans = myFunc();
console.log(ans);

// function returing function
function myFunc2() {
    function hello() {
        console.log("hello");
    }
    return hello;
}
const ans2 = myFunc2();
// console.log(ans2);
ans2();