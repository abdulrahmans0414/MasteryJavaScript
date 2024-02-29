// fetch

const URL = "http://jsonplaceholder.typicode.com/posts"

// POST metod (create)
fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => {
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
