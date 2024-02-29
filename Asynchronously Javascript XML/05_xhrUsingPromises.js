// xhr -> XMLHttpRequest using promise

const URL = "http://jsonplaceholder.typicode.com/posts";
function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(new Error("Something went wrong"));
            }
        }

        // network disconnect error
        xhr.onerror = () => {
            console.log("network error");
        };

        xhr.send();

    });
}

// const whatIsThis = sendRequest("GET", URL) 
// console.log(whatIsThis); // promise 

sendRequest("GET", URL)
    .then((response) => {
        // console.log(response);
        const data = JSON.parse(response)
        // console.log(data);
        return data;

    })
    .then((data) => {
        // console.log(data[3].id);
        const id = data[3].id;
        return id;
    })
    .then((id) => {
        const url = `${URL}/${id}`;
        return sendRequest("GET", url);
    })
    .then((newResponse) => {
        // console.log(newResponse);
        const newData = JSON.parse(newResponse);
        console.log(newData);
    })
    .catch((reject) => {
        console.log(reject);
    });