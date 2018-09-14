const express = require("express");
const router = express.Router();
router.use(express.json());

router.get("/our_products", (req, res, next) => {
  res.json({ message: "From our products page" });
});

module.exports = app => {
  app.use("/", router);
};
