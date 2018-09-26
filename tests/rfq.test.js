const express = require("express");
const request = require("supertest");

const rfq = require("../routes/rfq");
const { setUpMongoose, tearDownMongoose } = require("./testUtils");
const Rfq = require("../models/rfq");

const app = express();

rfq(app);

beforeAll(async () => {
  await setUpMongoose();
});
afterAll(tearDownMongoose);

describe("rfq/all route", () => {
  test("GET /rfq/all", async () => {
    const response = await request(app).get("/rfq/all");
    expect(response.status).toBe(201);
  });

  test("POST /rfq/add", async () => {
    const newRfq = {
      rfqNo: "123456",
      companyName: "Fake Company",
      companyAddress: "150 Cantonment Road, Singapore 089762",
      contactName: "James Park",
      contactNumber: "9999 9999",
      email: "parkjames@email.com",
      dueDate: "20-Sep-2019",
      rfqItems: [
        {
          productId: "1234",
          description: "Ironing Board Cover",
          code: "C-130",
          minQty: "90",
          uom: "PCS/CTN",
          qty: 5
        }
      ]
    };

    const initialRfqs = await Rfq.find();
    const response = await request(app)
      .post("/rfq/add")
      .send(newRfq);
    const allRfqs = await Rfq.find();

    expect(response.status).toBe(201);
    expect(allRfqs.length).toBe(initialRfqs.length + 1);
  });

  test("GET /rfq/all/:rfqNo", async () => {
    const responseAll = await request(app).get("/rfq/all");
    const rfqNo = responseAll.body[0].rfqNo;

    const responseOne = await request(app).get(`/rfq/all/${rfqNo}`);
    expect(responseOne.status).toBe(201);
  });
});
