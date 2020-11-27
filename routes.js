var express = require("express");

var router = express.Router();


router.get("/to-do-list", function(req, res) {
   // console.log("hello");
res.render("index");
});

module.exports = router;
