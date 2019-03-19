const Ipsum = require('../lib/models/Ipsum');
const chance = require('chance').Chance();

function seedData() {
  const ipsumsToCreate = [...Array(20)].map(() => ({
    ipsum: chance.sentence()
  }));

  return Ipsum.create(ipsumsToCreate);
}

module.exports = seedData;
