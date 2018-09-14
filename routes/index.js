const express = require("express");
const router = express.Router();
router.use(express.json());

router.get("/", (req, res, next) => {
  res.json({ message: "Welcome to HSH products page!!!" });
});

module.exports = app => {
  app.use("/", router);
};
