const express = require('express');
const booksRouter = express.Router();

const books = [
    {
        name: 'Hamlet',
        author: 'William Shakespeare'
    },
    {
        name: 'Dracula',
        author: 'Bram Stoker'
    },
    {
        name: 'David Copperfield',
        author: 'Charles Dickens'
    }
];

booksRouter.route('/').get((reg, res) => {
    res.render('index.ejs', {
        title: 'Library',
        books
    })
});

booksRouter.route('/:id').get((req, res) => {
    const { id } = req.params;
    res.render('book.ejs', {
        title: 'Library',
        book : books[id]
    })
});

module.exports = booksRouter;