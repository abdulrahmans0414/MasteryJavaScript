// optional chaining

const user = {
    firstName: "Abdul",
    // address: { houseNumber: '000' }
}
console.log(user.firstName);
console.log(user.address);
console.log(user.address.houseNumber);

// example optional chaining 
// if user address exist then give address if not its ( ?.) give undefined
console.log(user?.firstName)
console.log(user?.address) // undefined
console.log(user?.address?.houseNumber)