// Select the container
var container = document.querySelector('#post-container');


// select the navbar-nav
var navbarNav = document.querySelector('#navigation');


// select sidebar categories portion

var sidebarCat = document.querySelector('#sidebar-cat');
console.log(sidebarCat);
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
            createSideBarListElement(cat);
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
    

    // create the link
    var a = document.createElement('a');
    a.classList.add('nav-link');
    a.text = cat.cat_title;
    a.href = URL + '/nav/' + cat.cat_id;


    li.appendChild(a);


    

    li.classList.add('nav-item');
    navbarNav.appendChild(li);

    // li.classList.remove('nav-item');

    // sidebarCat.appendChild(li);

}





function createSideBarListElement(cat) {
    var li = document.createElement('li');
    

    // create the link
    var a = document.createElement('a');
    
    a.text = cat.cat_title;
    a.href = URL + '/nav/' + cat.cat_id;


    li.appendChild(a);


    sidebarCat.appendChild(li);


    
}


// createPostElement(record) will create and append the post data


function createPostElement(rec) {
    // create a post by calling functions.

    var postTitle = createPostTitle(rec);
    var postAuthor = createPostAuthor(rec);
    var postDate = createPostDate(rec);
    var postImg = createPostImage(rec);
    var postContent = createPostContent(rec);


    // append these to a post container div
    container.appendChild(postTitle);
    container.appendChild(postAuthor);
    container.appendChild(postDate);

    // add an hr
    container.appendChild(createHR());

    // add Image

    container.appendChild(postImg);

    container.appendChild(createHR());

    container.appendChild(postContent);

}





// functions to create a post
function createPostTitle(rec) {
    var postTitle = document.createElement('h2');
    var titleLink = document.createElement('a');
    titleLink.text = rec.post_title;
    titleLink.href = URL + '/post/' + rec.post_id;
    postTitle.appendChild(titleLink);

    return postTitle;
}


function createPostAuthor(rec) {
    var authorPElement = document.createElement('p');
    authorPElement.classList.add('lead');
    authorPElement.textContent = 'by ';

    var authorLink = document.createElement('a');
    authorLink.text = rec.post_author;
    authorLink.href = URL;

    authorPElement.appendChild(authorLink);

    return authorPElement;
}


function createPostDate(rec) {
    var datePElement = document.createElement('p');
    var dateSpanElement = document.createElement('span');
    dateSpanElement.classList.add('glyphicon');
    dateSpanElement.classList.add('glyphicon-time');

    datePElement.appendChild(dateSpanElement);
    datePElement.textContent = new Date(rec.post_date);

    return datePElement;
}


function createPostImage(rec) {
    // Add an hr
    var postImage = document.createElement('img');
    postImage.classList.add('img-fluid');
    postImage.src = 'imgs/' + rec.post_image;
    postImage.alt = 'POST IMAGE';

    return postImage;
}


function createPostContent(rec) {
    var postContent = document.createElement('p');

    postContent.textContent = rec.post_content;
    return postContent;
}


function createHR() {
    return document.createElement('hr');
}

/*


                <h2>
                    <a href="post.php?p_id=<?php echo $post_id; ?>"><?php echo $post_title ?></a>
                </h2>
                <p class="lead">
                    by <a href="index.php"><?php echo $post_author ?></a>
                </p>
                <p><span class="glyphicon glyphicon-time"></span> <?php echo $post_date ?></p>
                <hr>
                <img class="img-responsive" src="images/<?php echo $post_image ?>" alt="">
                <hr>
                <p><?php echo $post_content ?></p>

                <hr>



*/