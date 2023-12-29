// function inside function

const app = () => {

    // myFunc function inside app function
    const myFunc = () => {
        console.log("function inside function")
    }

    // addTwoNumber functions inside app function
    const addTwoNumber = (num1, num2) => {
        return num1 + num2;
    }

    // multiply two numbers function inside app function
    const mulTwoNumber = (num1, num2) => num1 * num2;

    console.log("inside app")
    myFunc(); // called myFunc function
    console.log(addTwoNumber(2, 5)); //called addTwoNumber function 
    console.log(mulTwoNumber(2, 5)); // called mulTwoNumber function 
}
app(); // called app function