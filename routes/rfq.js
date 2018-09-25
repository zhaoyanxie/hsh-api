const express = require("express");
const Rfq = require("../models/rfq");
const router = express.Router();
router.use(express.json());

// Get all rfqs
router.get("/all", async (req, res, next) => {
  const rfq = await Rfq.find();
  res.status(201).json(rfq);
});

// Post an rfq
router.post("/add", async (req, res, next) => {
  const newRfq = new Rfq({
    companyName: req.body.companyName,
    companyAddress: req.body.companyAddress,
    contactName: req.body.contactName,
    contactNumber: req.body.contactNumber,
    email: req.body.email,
    dueDate: req.body.dueDate,
    rfqItems: req.body.rfqItems
  });

  await newRfq.save();

  res.status(201).json({
    message: "New RFQ added successfully"
  });
});

module.exports = app => {
  app.use(`/rfq`, router);
};
