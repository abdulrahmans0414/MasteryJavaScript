// Default Parameter

function addTwo(a, b) {
    if (typeof b === "undefined") {
        b = 0;
    }
    return a + b;
}
const ans = addTwo(4);
console.log(ans);

// example 
function addTwo(a, b = 0) {
    return a + b;
}
const answer = addTwo(4, 8);
console.log(answer);