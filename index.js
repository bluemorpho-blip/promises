/*
fetch(url)  // call the fetch function passing the url of the
               api as a param
.then(function() {
    // Your code for handling the data you get from the API
})
.catch(function() {
    // This is where you run code if the server returns any errors
});
 */

const ul = document.getElementById('authors'); // get a list where we will place our authors
const url = 'https://randomuser.me/api/?results=10'; // get 10 random users
const postUrl = 'https://randomuser.me/api';

function createNode(element) {
    return document.createElement(element);
    // Create the type of element you
    // pass in the parameters
}

function append(parent, el) {
    return parent.appendChild(el)
    // Append the second parameter(element)
    // to the first one
}

fetch(url)
    .then((resp) => resp.json())
        // transform the data into json
    .then(function(data) {
        // Create and append the li's to the ul
        console.log(data)

        let authors = data.results; // Get the results
        return authors.map(function(author) {
            // Map through the results and for each,
            // run the code below:

            // create the elements we need
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');
            img.src = author.picture.medium;
                // add the source of the image to be the src of the img element
            span.innerHTML = `${author.name.first} ${author.name.last}`;
                // make the HTML of our span to be the first and last name
                // of the author
            append(li, img); // Append all elements
            append(li, span);
            append(ul, li);
        })
    })
.catch(function(error) {
    console.log(error);
});

// Post

// the data we are going to send in our request
let data = {
    name: 'Guy'
}
// the parameters we are going to pass to the fetch function
let fetchData = {
    method: 'POST',
    body: data,
    headers: new Headers()
}
fetch(postUrl, fetchData)
    .then(function() {
        // Handle response you get from the server
});