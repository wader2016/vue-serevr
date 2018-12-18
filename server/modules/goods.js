let mongoose = require("mongoose");

let schema = mongoose.Schema;

let goodSchema = new schema({
    productId:Number,
    productName:String,
    salesPrice:Number,
    productImage:String
});


module.exports = mongoose.model("Good",goodSchema,"Good");

