// object destructuring

const band = {
    bandName: "led zeppelin",
    famousSong: "stairway to heaven",
    year: 1996,
    anotherFamousSong: "kasmir"
};

// normal way 
// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);

// destructuring way
// const {bandName, famousSong} = band;
// console.log(bandName, famousSong); 

// if we want to change variable name then use colon and that name 
const {bandName:var1, famousSong:var2} = band;
console.log(var1, var2);

// if i want to store rest variables like year and anotherFamousSong
const {bandName, famousSong, ...restElement} = band;
console.log(restElement);
console.log(bandName, famousSong, restElement);



