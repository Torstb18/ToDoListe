const fs = require("fs");
const express = require("express");
const {client} = require("pg")
const app = express();
app.use("/JS", express.static('./JS/'));
app.use(express.static('public'));
app.use(express.json());


  

var port = process.env.PORT||3000;
app.listen(port, function(){
    console.log("server listening on port 3000!");
});
