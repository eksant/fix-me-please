const Book  = require('../models/Book')

module.exports = {
  all: function(req, res) {
    Book.find()
    .then(books => {
      res.send(books)
    })
    .catch(err => {
      res.send({err: err})
    })
    // Book.find(function (err, books) {
    //   if (err) {
    //     res.send({err: err})
    //   }
    //   res.send(books)
    // })
  },
  create: function(req, res) {
    let data = {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    }
    Book.create(data)
    .then(book => {
      res.send(book)
    })
    .catch(err => {
      res.send({err: err})
    })
    // var book = new Book(data);
    // book.save(function (err, result) {
    //   if (err) {
    //     res.send({err: err})
    //   }
    //   res.send(result)
    // });
  },
  update: function(req, res) {
    Book.update({ _id: req.params.id }, {
      $set: req.body
    }, function(err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
  },
  delete: function(req, res) {
    Book.remove({ _id: req.params.id }, function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
  }
}
