// fetch

const URL = "http://jsonplaceholder.typicode.com/posts"

// const whatIsThis = fetch(URL)
// console.log(whatIsThis);  // promise


// GET Request (Read)
fetch(URL)
    .then((response) => {
        // console.log(response.json()); // return promise
        if (response.ok) {
            return response.json()
        } else {
            throw new Error("Something went wrong");
        }
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("inside catch block");
        console.log(error);
    });

