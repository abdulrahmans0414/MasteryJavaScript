// every method 
// check every element of array ara conditionally satisfies and return answer in boolean

// callback function return ---> true / false (boolean)
// every method also return ---> true / false (boolean)

const numbers = [2, 4, 6, 8, 10, 12];
const isEveryNumberEven = numbers.every((number) => number % 2 === 0);
console.log(isEveryNumberEven);


// realistic example of --> every method
const userCart = [
    { productId: 1, productName: "mobile", price: 12000 },
    { productId: 2, productName: "laptop", price: 22000 },
    { productId: 3, productName: "tv", price: 15000 }
];
const isPriceLessThan30K = userCart.every((cartItem) => cartItem.price < 30000);
console.log(isPriceLessThan30K);