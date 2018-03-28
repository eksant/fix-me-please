var mongoose = require('mongoose');
const Schema = mongoose.Schema

var bookSchema = new Schema({
  isbn: String,
  title: String,
  author: String,
  category: Number,
  stock: Number
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book
