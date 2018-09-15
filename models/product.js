const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  code: String,
  description: String,
  minQty: Number,
  uom: String,
  category: String
});

module.exports = mongoose.model("Product", ProductSchema);
