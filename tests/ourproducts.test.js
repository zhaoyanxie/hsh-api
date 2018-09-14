const express = require("express");
const request = require("supertest");

const ourProducts = require("../routes/ourproducts");
const { setUpMongoose, tearDownMongoose } = require("./testUtils");
const Product = require("../models/product");

const app = express();

ourProducts(app);

beforeAll(async () => {
  await setUpMongoose();
});
afterAll(tearDownMongoose);

describe("our-products route", () => {
  test("GET /our-products", async () => {
    const response = await request(app).get("/our-products");

    expect(response.status).toBe(200);
  });

  test("POST /our-products/add", async () => {
    const newProduct = {
      code: "C-001",
      description: "Ironing Board Cover",
      UOM: "PCS/CTN",
      minQty: 50
    };

    const initialProducts = await Product.find();
    const response = await request(app)
      .post("/our-products/add")
      .send(newProduct);
    const newProducts = await Product.find();

    expect(response.status).toBe(201);
    expect(newProducts.length).toBe(initialProducts.length + 1);
  });
});
