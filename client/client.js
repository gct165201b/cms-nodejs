// Select the container
var container = document.querySelector('.container');



// Make a Get Request for posts against this URL

const URL = 'http://localhost:5000';


// Function that will list all posts in page
listAllPosts();
function listAllPosts() {

    // make a get request

    fetch(URL)
    .then(response => response.json())
    .then(result => {
        console.log(result);
    });


}



// for(var i = 0 ; i < posts.length ; i++) {
//     var postElement = document.createElement('div');
//     var header = document.createElement('h3');
//     var authorElement = document.createElement('small');
//     var contentElement = document.createElement('p');

//     header.textContent = posts[i].title;
//     authorElement.textContent = posts[i].author;
//     contentElement.textContent = posts[i].content;

//     postElement.appendChild(header);
//     postElement.appendChild(authorElement);
//     postElement.appendChild(contentElement);

//     container.appendChild(postElement);
//     container.appendChild(document.createElement('hr'));
// }