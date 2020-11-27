  
const fs = require("fs");
const bodyParser = require('body-parser');
const {client} = require("pg")
const express = require("express");
const server= express();
const path = require('path');
const PORT = process.env.PORT || 3000;


express()
  .use ("/JS", express.static("./JS"))
  .use(express.static(path.join(__dirname, 'Public')))
  .set('views', path.join(__dirname, 'server'))
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
