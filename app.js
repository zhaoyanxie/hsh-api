const express = require("express");
const cors = require("cors");

const index = require("./routes/index");
const ourProducts = require("./routes/ourproducts");

const app = express();
app.use(express.json());

var corsOptions = {
  origin: [/http:\/\/localhost:.*/, /http[s]*:\/\/zhaoyanxie.*\.github.io/],
  credentials: true
};

app.use(cors(corsOptions));

index(app);
ourProducts(app);

module.exports = app;
