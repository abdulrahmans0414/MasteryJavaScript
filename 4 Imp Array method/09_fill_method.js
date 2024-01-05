// fill method
// value , start, end

// for example
// create a array in which value -1 fill 10 times element.
const myArray = new Array(10).fill(-1);
console.log(myArray);


// for example 
// already have array -> myNumber 
const myNumber = [1, 2, 3, 4, 5, 6, 7, 8];

// if i want 3-5 number replace with zero for that
// (value , start index, end index  )
myNumber.fill(0, 2, 5);
console.log(myNumber);