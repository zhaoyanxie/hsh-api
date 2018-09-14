const express = require("express");
const Product = require("../models/product");
const router = express.Router();
router.use(express.json());

// Get all products
router.get("/", async (req, res, next) => {
  const products = await Product.find();
  res.json(products);
});

// Get a particular product

// Add a product
router.post("/add", async (req, res, next) => {
  const newProduct = new Product({
    category: req.body.category,
    code: req.body.code,
    description: req.body.description,
    minQty: req.body.minQty,
    uom: req.body.uom
  });

  await newProduct.save();

  res.status(201).json({
    message: "New product added successfully"
  });
});
// Edit a product

// Delete a product
module.exports = app => {
  app.use(`/our-products`, router);
};
