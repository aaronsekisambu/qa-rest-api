'use strict';

const express = require('express');
const bodyParser = require('body-parser').json;
const logger = require('morgan');
const app = express();
const routes = require('./routers');

app.use(logger('dev'));
app.use(bodyParser());
app.use('/questions', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// Error Handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    return console.log("Express listening on port", port);
});