const request = require("supertest");
const User = require("../models/user");
const app = require("../app");
const {
  setUpMongoose,
  tearDownMongoose,
  dropDatabase
} = require("./testUtils");

beforeAll(setUpMongoose);
afterAll(tearDownMongoose);

describe("POST /signup", () => {
  test("should return status 201 and store in database", async () => {
    const response = await request(app)
      .post("/account/signup")
      .send({
        username: "testuser",
        password: "password"
      });

    const users = await User.find({ username: "testuser" });

    expect(response.status).toBe(201);
    expect(users.length).toBe(1);
    // expect(response.headers["set-cookie"]).toBeDefined();
    // expect(Object.keys(response.body).length).toBe(2);
    // expect(response.body).toEqual(
    //   expect.objectContaining({
    //     _id: expect.any(String),
    //     username: expect.any(String)
    //   })
    // );
  });
});
