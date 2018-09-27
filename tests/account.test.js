const request = require("supertest");
const User = require("../models/user");
const app = require("../app");
const {
  setUpMongoose,
  tearDownMongoose,
  dropDatabase
} = require("./testUtils");
const { TEST_USER } = require("./testData");

beforeAll(setUpMongoose);
afterAll(tearDownMongoose);

describe("POST /signup", () => {
  test("should return status 201 and store in database", async () => {
    const response = await request(app)
      .post("/account/signup")
      .send(TEST_USER);

    const users = await User.find({ username: TEST_USER.username });

    expect(response.status).toBe(201);
    expect(users.length).toBe(1);
    expect(response.headers["set-cookie"]).toBeDefined();
    expect(Object.keys(response.body).length).toBe(2);
    expect(response.body).toEqual(
      expect.objectContaining({
        _id: expect.any(String),
        username: expect.any(String)
      })
    );
  });

  test("should return response status 400 if username already exists", async () => {
    const response = await request(app)
      .post("/account/signup")
      .send(TEST_USER);

    expect(response.status).toBe(400);
  });

  test("should return response status 400 if username format is invalid", async () => {
    const response = await request(app)
      .post("/account/signup")
      .send({ username: "!@#$%^", password: "password" });

    expect(response.status).toBe(400);
  });

  test("should return response status 400 if username is empty", async () => {
    const response = await request(app)
      .post("/account/signup")
      .send({ password: "password" });

    expect(response.status).toBe(400);
  });

  test("should return response status 400 if password is empty", async () => {
    const response = await request(app)
      .post("/account/signup")
      .send({ username: "testuser" });

    expect(response.status).toBe(400);
  });
});
