var express = require('express');
var router = express.Router();
let mongoose = require("mongoose");
let goods = require("../modules/goods");

mongoose.connect("mongodb://localhost:27017/product");

const con = mongoose.connection;
con.on("error",()=>{
  console.log("mongodb connect error");
});

con.on("open",()=>{
  console.log("mongodb connect success");
});

con.on("close",()=>{
  console.log("mongodb connect failed");
});


/* GET users listing. */
router.get('/', function(req, res, next) {

  res.setHeader("Access-Control-Allow-Origin","*");

  goods.find({}).exec((err,data)=>{
    if(err){
      return console.log(err);
    }

    res.send(data);
  });



});

module.exports = router;
