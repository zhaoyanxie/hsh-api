const express = require("express");
const cors = require("cors");

const index = require("./routes/index");
const ourProducts = require("./routes/ourproducts");
const rfq = require("./routes/rfq");

const app = express();
app.use(express.json());

var corsOptions = {
  origin: [
    /http:\/\/localhost:.*/,
    /http[s]*:\/\/hsh-singapore.*\.herokuapp.com/
  ],
  credentials: true
};

app.use(cors(corsOptions));

index(app);
ourProducts(app);
rfq(app);

module.exports = app;
