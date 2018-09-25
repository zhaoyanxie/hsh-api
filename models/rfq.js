const mongoose = require("mongoose");

const RfqSchema = new mongoose.Schema({
  companyName: String,
  companyAddress: String,
  contactName: String,
  contactNumber: String,
  email: String,
  dueDate: String,
  rfqItems: Array
});

module.exports = mongoose.model("Rfq", RfqSchema);
