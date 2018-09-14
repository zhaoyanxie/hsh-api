const express = require("express");
const request = require("supertest");

const ourProducts = require("../routes/ourproducts");

const app = express();

ourProducts(app);

describe("our_products route", () => {
  test("GET /our_products", async () => {
    const response = await request(app).get("/our_products");

    expect(response.status).toBe(200);
  });
});
