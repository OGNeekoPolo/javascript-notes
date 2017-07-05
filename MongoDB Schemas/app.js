const mongoose = require('mongoose');
const Comics = require('./collection.js');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/collection');


var comic = new Comics({
  name: 'The Amazing Spider-Man',
  universe: 'Marvel',
  published: 'August 15, 1960',
  writer: 'Stan Lee',
  artist: 'Ross Andru'
});

comic.issue.push({volume: 1, edition: 1});

Comics.create({
  name: 'The Amazing Spider-Man',
  universe: 'Marvel',
  published: 'August 15, 1960',
  writer: 'Stan Lee',
  artist: 'Ross Andru'
}).then().catch();



// { name: 'Pancakes',
//   _id: 59553335625ccdda459e09b4,
//   steps: [],
//   ingredients:
//    [ { ingredient: 'sugar',
//        measure: 'tbsp',
//        _id: 59553335625ccdda459e09b5,
//        amount: 1 } ] }
