// reduce method 
// reduce method take as input a callback function

// create a array of numbers
// aim : sum of all the numbers in array
const numbers = [1, 2, 3, 4, 5];

// use reduce method
// in reduce method 1st parameter name accumulator and 2nd name is currentValue

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

// how its working
//  accumulator , currentValue , return
//  1           ,    2         , 1 + 2 = 3
//  3 will be returned as accumulator next called
//  3           ,    3         , 6
//  6 will be accumulated values 
//  6           ,    4         , 10
//  10 will be returned as accumulator value
//  10          ,    5         , 15

console.log(sum);

// realistic example of reduce method
const userCart = [
    { productId: 1, productName: "mobile", price: 12000 },
    { productId: 2, productName: "laptop", price: 42000 },
    { productId: 3, productName: "tv", price: 15000 }
];
const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price;
}, 0);

// how its working
// total price      currentValue         return
// 0                { .price}12000       12000
// 12000            22000                34000
// 34000            15000                49000

console.log(totalAmount);