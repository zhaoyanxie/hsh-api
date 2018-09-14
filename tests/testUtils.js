/***** MONGOOSE MEMORY SERVER *****/

const { MongoMemoryServer } = require("mongodb-memory-server");
const mongod = new MongoMemoryServer();
const mongoose = require("mongoose");

const setUpMongoose = async () => {
  jest.setTimeout(10000);
  const uri = await mongod.getConnectionString();
  await mongoose.connect(
    uri,
    { useNewUrlParser: true }
  );
};

const tearDownMongoose = async () => {
  mongoose.disconnect();
  mongod.stop();
};

module.exports = {
  setUpMongoose,
  tearDownMongoose
};
