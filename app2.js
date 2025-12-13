/* fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        response.json()
            .then((data) => {
                console.log(data);
            })
    }); */


/* fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    })
 */

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error(error));