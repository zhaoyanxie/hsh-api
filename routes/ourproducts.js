const express = require("express");
const Product = require("../models/product");

const router = express.Router();
router.use(express.json());

// Get all products
router.get("/", (req, res, next) => {
  res.json({ message: "From our products page" });
});

// Get a particular product

// Add a product
router.post("/add", async (req, res, next) => {
  const newProduct = new Product({
    code: req.body.code,
    description: req.body.description,
    minQty: req.body.minQty,
    UOM: req.body.UOM
  });

  await newProduct.save();

  res.status(201).json({
    message: "New product added successfully"
  });
});
// Edit a product

// Delete a product
module.exports = app => {
  app.use("/our-products", router);
};
