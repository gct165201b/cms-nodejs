// Select the container
var container = document.querySelector('#post-container');


// select the navbar-nav
var navbarNav = document.querySelector('#navbar');

// console.log(navbarNav);

// Make a Get Request for posts against this URL

const URL = 'http://localhost:5000';



// list all the categories inside the navbar


listAllCategories();


function listAllCategories() {
    fetch(URL + '/nav')
    .then(response => response.json())
    .then(result => {
        result.forEach(cat => {
            // console.log(cat);s
            createListElement(cat);
        });
    });
}


// Function that will list all posts in page
listAllPosts();
function listAllPosts() {

    // make a get request

    fetch(URL)
    .then(response => response.json())
    .then(result => {
        result.forEach(rec => {
            createPostElement(rec);
        });
    });


}



// Create List Element for the navigation menu.
// <li><a href='category.html?category=$cat_id'></a></li>

function createListElement(cat) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = URL;
    a.text = cat.cat_title;


    li.appendChild(a);

    navbarNav.appendChild(li);


}


// createPostElement(record) will create and append the post data


function createPostElement(rec) {
    var postCat = document.createElement('a');
    postCat.href = "index.html?cat_id=" + rec.cat_id;

    var postElement = document.createElement('div');
    var title = document.createElement('h3');
    var dateElement = document.createElement('small');
    var authorElement = document.createElement('h5');
    var contentElement = document.createElement('p');
    var postImageElement = document.createElement('img');
    

    var postCommentCountElement = document.createElement('small');


    postCat.text = rec.cat_title;
    title.textContent = rec.post_title;
    authorElement.textContent = rec.post_author;
    dateElement.textContent = new Date(rec.post_date);
    postImageElement.classList.add('img-fluid');
    postImageElement.src = 'imgs/' + rec.post_image;
    

    contentElement.textContent = rec.post_content;
    postCommentCountElement.textContent = rec.post_comment_count;

    postElement.appendChild(postCat);
    postElement.appendChild(title);
    postElement.appendChild(authorElement);
    postElement.appendChild(dateElement);
    postElement.appendChild(postImageElement);
    postElement.appendChild(postCommentCountElement);
    postElement.appendChild(contentElement);

    container.appendChild(postElement);
    container.appendChild(document.createElement('hr'));
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