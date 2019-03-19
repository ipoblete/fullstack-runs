const mongoose = require('mongoose');

const ipsumSchema = new mongoose.Schema({
  ipsum: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model('Ipsum', ipsumSchema);
