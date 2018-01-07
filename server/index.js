const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./services/router');
const passport = require('passport');

const app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/streaks/');

app.use(morgan('combined'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/d', router);


const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';

// for testing on iPhone
// const HOST = process.env.HOST || '0.0.0.0';
console.log(`🌐${' '} Server listening at ${HOST}:${PORT}...`);
app.listen(PORT, HOST);
