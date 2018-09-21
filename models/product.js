const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  category: String,
  details: {
    code: String,
    description: String,
    minQty: Number,
    uom: String,
    imgSrc: [String]
  }
});

module.exports = mongoose.model("Product", ProductSchema);
