
// this function will make a get request for categories against  URL.
// Then it will create DOM Elements for Display.

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
// And will display a comment section when this is called with localhost/post/:post_id URL
// The server will return a comment section as an object which will be appended at the end of the json array returned from server.

function listAllPosts(URL) {


    // clear the element before bringing in new posts

    container.innerHTML = '';


    // hide the comment container by default.

    commentContainer.style.display = 'none';

    // make a get request

    fetch(URL)
    .then(response => response.json())
    .then(result => {
        // console.log(result);


        // show the comment field if the json result has only single post in it.
        result.forEach(rec => {
            
            createPostElement(rec);
        });

        if(result.length === 1) {
            showCommentSection(); // create a comment section if only a single post is found inside the json array.
        }
    });


}