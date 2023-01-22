const express = require("express");
const { insult } = require("./insult.js");

const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.static(__dirname + "/app")); 

router.get('/',function(req,res){
    res.sendFile("app/index.html");
});

app.post("/ai-response", (req, res) => {
    const score = req.body;
    insult(score).then((result) => {
      console.log(`Sent out response: ${result}`);
      res.send(result);
    });
});

const port = process.env.PORT || 5001;
app.listen(port);
console.log(`App listening at port ${port}`);