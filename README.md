# CMS Using Node JS

# Steps by Step Guide:

## Categories In Navigation Menu
- [x] Make a get Request to node server.
- [x] Handle the request for All Categories on server.js
- [x] Create a Database connection.
- [x] Query Database to get all the categories from database.
- [x] Manipulate the bootstrap navbar.
- [x] Display the categories from database in navbar.

## Sidebar Categories Area
- [x] Add Side bar to the home page.
- [x] Display a login form inside the sidebar.
- [x] Use the same result from the navigation categories to populate the sidebar.
- [x] Create some elements.
- [x] Display Categoris in sidebar.

## Posts
- [x] Make a get request to the node server while loading page.
- [x] Handle the get request for post on server.js.
- [x] Create Database connection.
- [x] Query the database to get all the published posts.
- [x] Create Some DOM Elements on the page using JS.
- [x] Fill in the commponents using post data returned from server
- [x] Show Latest Posts First
- [x] Apply Styling to the posts.

## Posts for Specific Category
- [x] Add Event Listeners to all the navigation category links and sidebar category links.
- [x] Prevent the link from its default action.
- [x] Then make a get request and pass in the id of category inside the URL as request parameter.
- [x] Handle the request on server side.
- [x] Get all the posts for the category whose id was passed into URL as Request Parameter.
- [x] Clear the page before bringing new posts to the page in the listAllPost(URL) function.

## Get A Specific Post
- [x] Go To a Specific Post when user clicks on its title.
- [x] Add Event Listener to the title of every post.
- [x] Prevent the default action.
- [x] Make a Get request to a url that contains the id of the post.
- [x] Handle the request on server side.
- [x] Quesry database.
- [x] Get the post.
- [x] Return the result in JSON Format as response to the request.
- [x] Create Post Elements On Client side.
- [x] Populate these components using post data.

## Comment Section on a Post
- [x] Create Comment Section.
- [x] Create Some fields.


## Function to Create HTML Components
- [ ] Create Function to create div,anchors, h1 etc with corresponding attributes passed as parameters. 

## Show Comments on a posts
- [ ] Make a  get request to the server for comments on a post.
- [ ] Handle the request on server side.
- [ ] Return all comments on that specific post.
- [ ] Create some Elements on Client side.
- [ ] Populate these fields using Comments.

## Create Search Engin for Blog.
- [ ] Add Event Listener to the search button.
- [ ] Prevent the default action.
- [ ] Make a get request to node server.
- [ ] Handle the request on server side.
- [ ] Query the database.
- [ ] Return the post data in JSON format.
- [ ] Display the posts.
