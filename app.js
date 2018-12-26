var express = require('express');
var path = require('path');
var chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan');

var app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')))

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(3000, function () {
    debug(`Listening on port : ${chalk.green(3000)}`);
});