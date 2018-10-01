require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const path = require("path");

const index = require("./routes/index");
const ourProducts = require("./routes/ourproducts");
const rfq = require("./routes/rfq");
const account = require("./routes/account");
const admin = require("./routes/admin");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "client/build")));

var corsOptions = {
  origin: [
    /http:\/\/localhost:.*/,
    /http[s]*:\/\/hsh-singapore.*\.herokuapp.com/
  ],
  credentials: true
};

app.use(cors(corsOptions));

index(app);
admin(app);
ourProducts(app);
rfq(app);
account(app);

module.exports = app;
