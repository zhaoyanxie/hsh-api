const mongoose = require("mongoose");

const RfqSchema = new mongoose.Schema({
  rfqNo: String,
  companyName: String,
  companyAddress: String,
  contactName: String,
  contactNumber: String,
  email: String,
  dueDate: String,
  rfqItems: Array,
  rfqDate: String
});

module.exports = mongoose.model("Rfq", RfqSchema);
