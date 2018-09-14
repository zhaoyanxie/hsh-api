const express = require("express");
const index = require("./routes/index");
const ourProducts = require("./routes/ourproducts");

const app = express();
app.use(express.json());

index(app);
ourProducts(app);

module.exports = app;
