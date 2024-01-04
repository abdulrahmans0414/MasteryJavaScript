// sort method 
// sort method -> muted original array 

// ASCII TABLE 
// char : ascii value


// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90


// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96


// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125


// sort method -> changed original array
// for example some numbers are given in the following
// 5, 9, 1200, 400, 3000
// 5, 9, 400, 1200, 3000 (expected) sort in ascending order

// create array of numbers
const numbers = [5, 9, 1200, 400, 3000];
// store as string :  ["5", "9", "1210", "410", "3000"] 
// ascii value     :  [53,   57,  49,     52,    51]

numbers.sort(); // sort numbers as strings order
console.log(numbers);

// sort numbers in ascending order
numbers.sort((a, b) => {
    return b - a;
});

// how it works
// 1200,410 
// a-b ---> 790
// a-b ---> postive (greater than 0) ---> b, a
// 410 , 1200

// a-b ---> negative ----> a,b
// 5, 9 ---> -4 

// optimal code for descending order
numbers.sort((a, b) => b - a);
console.log(numbers);

// create array of strings 
const usernames = ["Abdul", "Rehan", "Salam", "Rahman"];
usernames.sort(); // sort usernames strings increasing order
console.log(usernames);


// realistic example --> price lowToHigh HighToLow 
// create a array of product objects
const products = [
    { productId: 1, produceName: "p1", price: 300 },
    { productId: 2, produceName: "p2", price: 3000 },
    { productId: 3, produceName: "p3", price: 200 },
    { productId: 4, produceName: "p4", price: 8000 },
    { productId: 5, produceName: "p5", price: 500 },
];
console.log(products);

// create lowToHigh function
// sort method change all original products but i don't want that
// so we create a clone usinge .slice(0)
const lowToHigh = products.slice(0).sort((a, b) => {
    return a.price - b.price;
});
console.log(lowToHigh);

// create highToLow function
const highToLow = products.slice(0).sort((a, b) => {
    return b.price - a.price;
});
console.log(highToLow);