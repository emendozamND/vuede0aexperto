let data = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Jane", age: 21 },
    { id: 3, name: "Joe", age: 22 },
];

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const ok = true; // cambia a false para probar el error
            if (ok) resolve(data);
            else reject("Error: Something went wrong");
        }, 2000);
    });
}

/* async function fetchData() {
    let response = await getData();
    console.log(response);
} */

/* getData()
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
     */

async function fetchData() {
    try {
        let response = await getData();
        console.log(response)
    } catch (err) {
        console.log(err)
    }
}

fetchData();


console.log("continua el programa");
