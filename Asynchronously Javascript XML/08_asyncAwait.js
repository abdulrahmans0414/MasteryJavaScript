// async await

// consume data
// fetch(URL)
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data);
//     })

const URL = "http://jsonplaceholder.typicode.com/posts"


// async function getPosts() {
//     const response = await fetch(URL)
//     if (!response.ok) {
//         throw new Error("something went wrong")
//     }
//     const data = await response.json();
//     return data;

// }

// const myData = getPosts();
// console.log(myData); // promise


// arrow functions
const getPosts = async () => {
    const response = await fetch(URL)
    if (!response.ok) {
        throw new Error("something went wrong")
    }
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    return data;

}


getPosts()
    .then(myData => { console.log(myData); })
    .catch(error => { console.log(error); })

