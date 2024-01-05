// some method
// there are any elements of array that satisfy the condition or true

const numbers = [1, 3, 4, 5];

// there are any elements in array that are even number. || true
const ans = numbers.some((number) => number % 2 === 0);
console.log(ans);

// realistic example --> some method
const userCart = [
    { productId: 1, productName: "mobile", price: 12000 },
    { productId: 2, productName: "laptop", price: 2000 },
    { productId: 3, productName: "tv", price: 15000 },
    { productId: 4, productName: "macbook", price: 150000 },
];

const answer = userCart.some((cartItem) => cartItem.price > 100000);
console.log(answer);