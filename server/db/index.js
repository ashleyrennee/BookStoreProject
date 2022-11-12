/**
Retrieve List of Books by Genre
Retrieve List of Top Sellers (Top 10 books that have sold the most copied)
Retrieve List of Books for a particular rating and higher
Retrieve List of X Books at a time where X is an integer from a given position
in the overall recordset.
 * 
 */
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

/*module.exports = con;

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
   var con1 = mysql.createConnection({
      host: "geektxt.cchy5aeo11qe.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "12345678",
      database : "geektxt"
     });


   con1.connect(function(err) {
      if (err) throw err;
      console.log("Connected!!");
         con1.query("SELECT * FROM BOOK", function (err, rows, fields) {
            if (err) throw err;
            console.log(rows);
            res.json(rows);
          });
     });
     
   var book1 = {bookId: "12847556", bookName: "IDK DUMMY"};
   //res.json(book1);//
   //res.send(["here is a list of books","look another one"]);
});

app.get("/api/books/:genre", (req,res) =>{
   console.log("Book by genre:" + req.params.genre)
   var con2 = mysql.createConnection({
      host: "geektxt.cchy5aeo11qe.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "12345678",
      database : "geektxt"
     });
   //res.send(["here is a list of books by genre","look another one"]);
   const queryString = "Select * from BOOKGENRE where genre = ?";
   const genre = req.params.genre;
   con2.query(queryString,[genre],(err,rows,fields) => {
      console.log("fetched books by genre" + rows);
      res.json(rows);
   });
});

app.get("/api/books/topsellers", (req,res) =>{
   var con3 = mysql.createConnection({
      host: "geektxt.cchy5aeo11qe.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "12345678",
      database : "geektxt"
     });

   res.send(["here is a list of top 10 books","look another one"]);
});

app.get("/api/books/rating/:avr_rating", (req,res) =>{
   var con4 = mysql.createConnection({
      host: "geektxt.cchy5aeo11qe.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "12345678",
      database : "geektxt"
     });
   //res.send(["here is a list of books by rating","look another one"]);
   const queryStringRating = "Select * from BOOK where avr_rating >= ?";
   const byRating = req.params.avr_rating;
   con4.query(queryStringRating,[byRating],(err,rows,fields) => {
      console.log("fetched books by rating" + rows);
      res.json(rows);
   });

});

app.get("/api/books/amntofbooks", (req,res) =>{
   var con5 = mysql.createConnection({
      host: "geektxt.cchy5aeo11qe.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "12345678",
      database : "geektxt"
     });

   res.send(["here is a list of x amount of books","look another one"]);
});

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}`)); 

