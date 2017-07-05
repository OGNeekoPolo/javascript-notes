const mongoose = require('mongoose');

const comicBooks = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  universe: {type: String, required: true},
  published: {type: Date, required: true},
  writer: {type: String, required: true},
  artist: {type: String, required: true},
  issue: [{
    volume: {type: Number, required: true, unique: true},
    edition: Number,
  }]
});

const Comics = mongoose.model('Comics', comicBooks);

module.exports = Comics;
