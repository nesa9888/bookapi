const Book = require('../models/book')

module.exports = {
    index: async (req, res) => {
        const books = await Book.find({})
        res.status(200).json(books)  
    },
    
    newBook: async (req, res) => {
        
        const newBook = new Book(req.body)
        const book = await newBook.save()
        res.status(201).json(book)
        
    },

    getBook: async (req, res) => {
        const { bookId } = req.params
        const book = await Book.findById(bookId)
        res.status(200).json(book)
    },

    replaceBook: async (req, res) => {
        const { bookId } = req.params
        const newBook = req.body;
        const result = await Book.findByIdAndUpdate(bookId, newBook)
        res.status(200).json(result)

    },

    updateBook: async (req, res) => {
        const { bookId } = req.params
        const newBook = req.body;
        const result = await Book.findByIdAndUpdate(bookId, newBook)
        res.status(200).json(result)
    },

    deleteBook: async (req, res) => {
        const { bookId } = req.params
        await Book.findByIdAndRemove(bookId)
        res.status(400).json({
            notice: 'Book removed'
        })
    }
        
}
