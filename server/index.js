// Hi Michelle, Josh & Theresa these comments are for you

const express = require("express");

const app = express(); // create instance
const router = express.Router();

app.use(express.json()); // lets app parse incoming JSON requests, which is what we probably wanna do for hackathon
app.use(express.static(__dirname + "/app")); // router

router.get('/',function(req,res){
    res.sendFile("app/index.html");
});

// front-end to backend data goes to port 5001, can change to whatever
const port = process.env.PORT || 5001;
app.listen(port);
console.log(`App listening at port ${port}`);