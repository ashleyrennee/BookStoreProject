const express = require('express')
const app = express()

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

// localhost:3001
app.listen(3001, () => {
    console.log("Server is up and listening on 3001...")
})