// xhr -> XMLHttpRequest

const URL = "http://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr); // xhr is a object

// step 1: use open method
// console.log(xhr.readyState);
xhr.open('GET', URL);
// console.log(xhr.readyState);


// for example we create a function onreadystatechange

// xhr.onreadystatechange = function () {
//     console.log(xhr.readyState);
//     if (xhr.readyState === 4) {
//         console.log(xhr);
//         console.log(xhr.response);
//         console.log(typeof xhr.response);

//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(data);
//         console.log(typeof data);
//     }
// };


// same above example, but 
// when readstate 4 then onload is called
xhr.onload = function () {
    // console.log(xhr.readyState);

    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}


xhr.send();