const express = require("express");
const { authenticateUser } = require("../middlewares/auth");

const router = express.Router();
router.use(express.json());

router.get("/", authenticateUser, (req, res, next) => {
  res.json({ message: "Welcome Admin!" });
});

module.exports = app => {
  app.use("/admin", router);
};
