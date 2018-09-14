const express = require("express");
const app = express();
const index = require("./routes/index");

index(app);

module.exports = app;
