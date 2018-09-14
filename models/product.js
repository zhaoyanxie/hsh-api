const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  code: String,
  description: String,
  minQty: Number,
  UOM: String
});

module.exports = mongoose.model("Product", ProductSchema);
