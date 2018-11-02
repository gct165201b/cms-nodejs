const express = require('express');
const cors = require('cors');
const mysql = require('mysql');


// invoke express

const app = express(); // invoked express.

// create a database connection


const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'gct165201b',
    database: 'cms'
});

// add headers to requests

app.use(cors());

// use a json parser
app.use(express.json());


// connect to database

// listen for get request for posts

app.get('/', (req, res) => {
    
    // Query the database.

    var sql = "SELECT * FROM posts JOIN categories ON posts.post_category_id = cat_id";

    database.query(sql, (err, result) => {
        if(err) throw err;


        // console.log(result);
        res.json(result);
    });


    

});



// listen for get request on /nav route.

app.get('/nav', (req, res) => {
    var sql = "SELECT * FROM categories";
    database.query(sql, (err, result) => {
        if(err) throw err;
        
        console.log(result);
        res.json(result);
    });
});





// listen for requests at port 5000

app.listen(5000, (req, res) => {
    console.log('Server Started http://localhost:5000');
});