const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
 
  var age = Number(req.body.n1) / 15;

 

  res.send("your age in dog years is: " + age + " dog years");
});

app.listen(8080,function(){
    console.log("server has started on port 8080")
});