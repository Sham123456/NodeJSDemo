const express = require('express');
const path = require('path');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(3000, () => {
  debug(`Listening on port : ${chalk.green(3000)}`);
});
