const express = require('express');
var mysql = require('mysql');
const app = express();

var con = mysql.createConnection({
    host: "geektxt.cchy5aeo11qe.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "12345678",
    database: "geektxt"
});

app.get("/", (req, res) => {
    console.log("responding to root route")
    res.send("Local Book Details")
})



app.get("/bookdetails", (req,res) => {
    var book1 = {ISBN: "123-3-16-148410-0", 
                bookName: "Harry's Adventure", 
                bookDescription: "once upon a time two trolls ran to Harry and offered something special",
                price: "$10",
                author: "Greg Dander",
                genre: "Fiction",
                publisher: "Sony",
                year: "2002",
                copiesSold: "100"};
    
    var book2 = {ISBN: "123-3-16-148410-0", 
                bookName: "Harry's Adventure", 
                bookDescription: "once upon a time two trolls ran to Harry and offered something special",
                price: "$10",
                author: "Greg Dander",
                genre: "Fiction",
                publisher: "Sony",
                year: "2002",
                copiesSold: "100"};
                res.json([book1, book2])
})

const port = process.env.PORT || 3001;
app.listen(port, ()=> console.log('listening on port ${port}'));