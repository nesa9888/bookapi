const express = require('express')
const { get } = require('mongoose')
//const router = express.Router();
const router = require('express-promise-router')()

const BooksController = require('../controllers/books')

router.route('/')
    .get(BooksController.index)
    .post(BooksController.newBook)

// /books/:id
router.route('/:bookId')
    .get(BooksController.getBook)
    .put(BooksController.replaceBook)
    .patch(BooksController.updateBook)
    .delete(BooksController.deleteBook)
module.exports = router;