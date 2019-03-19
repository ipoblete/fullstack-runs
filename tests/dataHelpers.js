require('dotenv').config();
const mongoose = require('mongoose');
const seedData = require('./seedData');
const Ipsum = require('../lib/models/Ipsum');

const connect = require('../lib/utils/connect');

beforeAll(() => {
  return connect();
});

beforeEach(() => {
  return mongoose.connection.dropDatabase();
});

beforeEach(() => {
  return seedData(20);
});

afterAll(() => {
  return mongoose.connection.close();
});

const getIpsum = () => {
  return Ipsum
    .findOne()
    .then(note => {
      return JSON.parse(JSON.stringify(note));
    });
};

module.exports = {
  getIpsum
};
