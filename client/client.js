// Select the container
var container = document.querySelector('.container');

// console.log(container);

// Create Post list.

var post1 = {
    author: 'Umar',
    title: 'C++',
    content: 'C++ is a good language to understand the basics of programming!'
}

var post2 = {
    author: 'Usman',
    title: 'CMD',
    content: 'CMS makes it easy to use the OS'
}

var post3 = {
    author: 'Furqan',
    title: 'Math',
    content: 'Math is very important'
}

var posts =  [post1, post2, post3];
// console.log(posts);


for(var i = 0 ; i < posts.length ; i++) {
    var postElement = document.createElement('div');
    var header = document.createElement('h3');
    var authorElement = document.createElement('small');
    var contentElement = document.createElement('p');

    header.textContent = posts[i].title;
    authorElement.textContent = posts[i].author;
    contentElement.textContent = posts[i].content;

    postElement.appendChild(header);
    postElement.appendChild(authorElement);
    postElement.appendChild(contentElement);

    container.appendChild(postElement);
    container.appendChild(document.createElement('hr'));
}