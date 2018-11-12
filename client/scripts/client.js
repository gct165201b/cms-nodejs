// Select the container
var container = document.querySelector('#post-container');


// select the navbar-nav
var navbarNav = document.querySelector('#navigation');


// select sidebar categories portion

var sidebarCat = document.querySelector('#sidebar-cat');
// console.log(sidebarCat);
// console.log(navbarNav);

// comment container


var commentContainer = document.querySelector('#comment-container');




// Make a Get Request for posts against this URL

const URL = 'http://localhost:5000';



// list all the categories inside the navbar


listAllCategories();





// Function that will list all posts in page
// And will display a comment section when this is called with localhost/post/:post_id URL
// The server will return a comment section as an object which will be appended at the end of the json array returned from server.
listAllPosts(URL);








// Create List Element for the navigation menu.
// <li><a href='category.html?category=$cat_id'></a></li>



// function addEventsToPostTitles(a) {
//     a.addEventListener('click', (event) => {
//         event.preventDefault(); // prevent the default action.

//         // make a get request and then display the post.
//         listAllPosts(a.href);
//     });
// }
