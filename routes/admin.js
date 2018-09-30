const express = require("express");
const Product = require("../models/product");
const { authenticateUser } = require("../middlewares/auth");

const router = express.Router();
router.use(express.json());

router.get("/", authenticateUser, (req, res, next) => {
  res.json({ message: "Welcome Admin!" });
});

// Add a product
router.post("/add_product", async (req, res, next) => {
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
module.exports = app => {
  app.use("/admin", router);
};
