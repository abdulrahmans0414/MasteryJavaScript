// splice method
// start, delete, insert
// splice method changes the original arrays

const myArray = ["item1", "item2", "item3"];

// delete --> item2 
const deletedItem = myArray.splice(1, 1);
console.log(deletedItem);
console.log(myArray);

// insert --> instertedItem
myArray.splice(1, 0, "instertedItem");
console.log(myArray);

// insert and delete --> 
myArray.splice(1, 2, "instertedItem1", "instertedItem2");
console.log(myArray);