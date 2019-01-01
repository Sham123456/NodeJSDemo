const express = require('express');
const booksRouter = express.Router();

function router(nav) {
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
            nav,
            title: 'Library',
            books
        })
    });

    booksRouter.route('/:id').get((req, res) => {
        const { id } = req.params;
        res.render('book.ejs', {
            nav,
            title: 'Library',
            book : books[id]
        })
    });

    return booksRouter;
}

module.exports = router;