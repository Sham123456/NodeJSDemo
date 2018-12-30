const express = require('express');
const path = require('path');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const bookRouter = require('./src/routes/bookRoutes');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.set('views', './src/views');
app.set('view template', 'ejs');


app.use('/books', bookRouter);

// app.get('/', (req, res) => {
//     res.render('index.ejs', {
//         title: 'Library',
//         books
//     })
// });

app.listen(port, () => {
  debug(`Listening on port : ${chalk.green(port)}`);
});
