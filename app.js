const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.json({ message: "express is up!" });
});

module.exports = app;
