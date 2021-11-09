const express = require('express')
const app = express()
const mongoose = require('mongoose')
const books = require('./routes/books')

// Connection to database
mongoose.connect('mongodb://localhost/apibooks')

// Middleware
app.use(express.json())

// Routes
app.use('/books', books)

// Catch 404 errors and forward them to error handler function
app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})

// Error handler function
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
        message: err.message
    })
})


// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))