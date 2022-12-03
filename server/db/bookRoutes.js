/**
Retrieve List of Books by Genre
Retrieve List of Top Sellers (Top 10 books that have sold the most copies)
Retrieve List of Books for a particular rating and higher
Retrieve List of X Books at a time where X is an integer from a given position
in the overall recordset.
 **/
/* creating connection to bookstoredb database */
const express = require('express');
var mysql = require('mysql');
const app = express();
 
var con = mysql.createConnection({
 host: "geektxt.cchy5aeo11qe.us-east-1.rds.amazonaws.com",
 user: "admin",
 password: "12345678",
 database : "geektxt"
});

/*selects all data from BOOK table and displays it in console */
con.connect(function(err) {
 if (err) throw err;
 console.log("Connected!!");
    con.query("SELECT * FROM AUTHOR", function (err, result, fields) {
       if (err) throw err;
       console.log(result);
     });
});

app.get("/", (req,res) =>{
   res.send("hewoo");
});

app.get("/api/books", (req,res) =>{
   con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!!");
         con1.query("SELECT * FROM BOOK", function (err, rows, fields) {
            if (err) throw err;
            console.log(rows);
            res.json(rows);
          });
     });
});

app.get("/api/books/bygenre/:genre", (req,res) =>{
   console.log("Book by genre:" + req.params.genre)
  
   const queryStringGenre = "Select * from BOOKGENRE where genre = ?";
   const genre = req.params.genre;
   con.query(queryStringGenre,[genre],(err,rows,fields) => {
      console.log("fetched books by genre" + rows);
      res.json(rows);
   });
});

app.get("/api/books/topsellers", (req,res) =>{
   const queryStringTopSellers = "SELECT * FROM BOOK ORDER BY copies_sold DESC limit 10";
   const topSellers = req.params.copies_sold;
   con.query(queryStringTopSellers,[topSellers],(err,rows,fields) => {
      console.log("fetched books by top 10 sellers" + rows);
      res.json(rows); 
   });
});

app.get("/api/books/rating/:avr_rating", (req,res) =>{
   const queryStringRating = "Select * from BOOK where avr_rating >= ?";
   const byRating = req.params.avr_rating;
   con.query(queryStringRating,[byRating],(err,rows,fields) => {
      console.log("fetched books by rating" + rows);
      res.json(rows);
   });
});


const port = process.env.PORT || 1000;
app.listen(port, ()=> console.log(`listening on port ${port}`)); 
