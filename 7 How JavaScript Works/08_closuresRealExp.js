// realistic example of closure

// for example
function myFunction(power) {
    return function (number) {
        return number ** power
    }
}
const squre = myFunction(2)
const ans = squre(3)
console.log(ans);

const cube = myFunction(3)
const ans2 = cube(3)
console.log(ans2);


// minimize code 
// const myFunction = (power) =>  (number) => number ** power;
// const myFunction = power => number => number ** power;



// example -> 2
function func() {
    let counter = 0;
    return function () {
        if (counter < 1) {
            console.log("Hi You Called me");
            counter++;
        } else {
            console.log("Mai already ek bar call ho chuka hoon!");
        }
    }
}

const myFunc = func();
myFunc();
myFunc();