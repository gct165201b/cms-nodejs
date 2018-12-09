

function create(tag, className = '' , href = '', text = '') {
    var comp = document.createElement(tag);

    if(className != '') {
        comp.classList.add(className);
    }
    


    comp.textContent = text;

    if(href != '') {
        comp.href = href;
        comp.text = text;
    }

    return comp;
}


function createListElement(cat) {

    var li = create('li', 'nav-item');
    var a = create('a', 'nav-link', URL + '/nav/' + cat.cat_id , cat.cat_title);
    addEventsLinks(a);
    li.appendChild(a);
    navbarNav.appendChild(li);
}





function createSideBarListElement(cat) {
    
    var li = create('li');

    var a = create('a', '', URL + '/nav/' + cat.cat_id, cat.cat_title);
    
    addEventsLinks(a);
    
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
    var postTitle = create('h2');
    var titleLink = create('a', '', URL + '/post/' + rec.post_id, rec.post_title);

    addEventsLinks(titleLink);

    postTitle.appendChild(titleLink);

    return postTitle;
}


function createPostAuthor(rec) {
    var authorPElement = create('p', 'lead', '' , 'by ');

    var authorLink = create('a', '', URL , rec.post_author);

    authorPElement.appendChild(authorLink);

    return authorPElement;
}


function createPostDate(rec) {
    var datePElement = create('p', '', '', , new Date(rec.post_date));
    var dateSpanElement = create('span', 'glyphicon');
    dateSpanElement.classList.add('glyphicon-time');

    datePElement.appendChild(dateSpanElement);
    

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



// comment section


function showCommentSection() {
    commentContainer.style.display = '';
}






// create HTML elements for posted comments.



/*


                STRUCTURE FOR POSTED COMMENT

                <div class="media">
                    <a class="pull-left" href="#">
                        <img class="media-object" src="http://placehold.it/64x64" alt="">
                    </a>
                    <div class="media-body">
                        <h4 class="media-heading"><?php echo $comment_author; ?>
                            <small><?php echo $comment_date; ?></small>
                        </h4>
                        
                        
                        <?php echo $comment_content; ?>
                        
                        
                    </div>
                </div>


*/







function createCommentArea() {
    
}



// ADD EVENTS TO ELEMENTS


function addEventsLinks(a) {
    a.addEventListener('click' , (event) => {
        event.preventDefault(); // prevent the default action.

        // make a  get request.
        listAllPosts(a.href);
    });
}