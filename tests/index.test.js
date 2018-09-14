const express = require("express");
const request = require("supertest");

const index = require("../routes/index");

const app = express();

index(app);

describe("index route", () => {
  test("GET /", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
  });
});
