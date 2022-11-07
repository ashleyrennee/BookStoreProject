const express = require('express');
const cors = require('cors');

const app = express();
/*const apiRouter =require('./routes');*/
var corsOption = {
    origin : "https://localhost:8081"
};

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/* app.use('/api/BOOK', apiRouter);*/

app.get("/",(rep,res)=> {
    res.json({ message:"hi <3"})
});


require("./server");


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
        console.log("server is running on port: ",PORT);
    });