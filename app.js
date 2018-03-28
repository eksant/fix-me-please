const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var mongoose = require('mongoose');
// mongoose.connect.once('mongodb://localhost/api-crud-mongoose', (err) => {
//   err ? console.log('Can\'t connect to database') : console.log('Database connected')
// });
mongoose.connection.openUri('mongodb://localhost:27017/blog')
mongoose.Promise = global.Promise
mongoose.connection.once('open', () => {
  console.log('Database connected')
}).on('error', (error) => {
  console.error('Can\'t connect to database', error)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var books = require('./routes/books');
var transactions = require('./routes/transactions');

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000)
