var mongoose = require('mongoose');
mongoose.connect('mongodb://joeblob:joeblob@ds161032.mlab.com:61032/phonecat')
var fs = require('fs');

var listItemSchema = mongoose.Schema({
  "age": Number,
  "id": String,
  "imageUrl": String,
  "name": String,
  "snippet": String
})

var ListItem = mongoose.model('ListItem',listItemSchema);
module.exports = ListItem;
