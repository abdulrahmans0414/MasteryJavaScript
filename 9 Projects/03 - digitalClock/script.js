// select clock
const clock = document.getElementById("clock")

// Event control 
setInterval(() =>{
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
