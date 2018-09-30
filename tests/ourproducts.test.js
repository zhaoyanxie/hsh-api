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
});
