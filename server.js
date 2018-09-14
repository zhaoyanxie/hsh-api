const app = require("./app");
const mongoose = require("mongoose");

const mongodbUri =
  process.env.MONGODB_URI || "mongodb://localhost:27017/hsh-api";

mongoose.connect(
  mongodbUri,
  { useNewUrlParser: true }
);
const db = mongoose.connection;
db.on("error", error => {
  console.error("An error occured!", error);
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`hsh-api has started on PORT ${server.address().port}`);
});
