const express = require("express");
const Product = require("../models/product");
const router = express.Router();
router.use(express.json());

// Get all products
router.get("/", async (req, res, next) => {
  const products = await Product.find();
  res.json(products);
});

// Get all categories
router.get("/categories", async (req, res, next) => {
  const products = await Product.find();
  const categories = [];
  products.forEach(product => {
    if (categories.indexOf(product.category) === -1) {
      categories.push(product.category);
    }
  });
  res.json(categories);
});

// Get a particular product

// Add a product
router.post("/add", async (req, res, next) => {
  const newProduct = new Product({
    category: req.body.category
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    details: {
      code: req.body.details.code,
      description: req.body.details.description,
      minQty: req.body.details.minQty,
      uom: req.body.details.uom,
      imgSrc: req.body.details.imgSrc
    }
  });

  await newProduct.save();

  res.status(201).json({
    message: "New product added successfully"
  });
});

// Get products of a certain category
router.get("/:category", async (req, res, next) => {
  const category = req.params.category
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const productsOfCategory = await Product.find({
    category: category
  });
  res.json(productsOfCategory);
});

// Edit a product

// Delete a product
module.exports = app => {
  app.use(`/our-products`, router);
};
