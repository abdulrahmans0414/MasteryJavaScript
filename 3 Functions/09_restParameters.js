// rest parameters

// for example create a function in which there are 3 parameters a, b and c.
// arguments are :
// a -> 2 
// b -> 3 
// c -> 5, 7, 9
function myFunc(a, b, ...c) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is`, c); 
}
myFunc(2, 3, 5, 7, 9)


function addAll(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total = total + number;
    }
    return total;
}
const ans = addAll(20, 25, 25, 10, 15);
console.log(ans);