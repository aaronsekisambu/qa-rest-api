'use strict'
const express = require('express');

const router = express.Router();


// Get  /questions
// Route for questions collections
router.get('/', (req, res) => {
    res.json(
        {
            response: "You sent me a GET request"
        });
});


// POST /questions
// Route for creating questions
router.post('/', (req, res) => {
    res.json(
        {
            response: "You sent me a POST request",
            body: req.body
        });
});


// Get /questions/:qID
// Route creating a question
router.get('/:qID', (req, res) => {
    res.json(
        {
            response:  `You sent me a GET request for ID ${req.params.qID}` 
        });
});


// Get /questions/:qID/answers
// Route for creating  answers
router.post('/:qID/answers', (req, res) => {
    res.json(
        {
            response:  "You sent me a POST request to /answers",
            questionId: req.params.qID,
            body: req.body
        });
});


// put /questions/:qID/answers/aID
// Edit a specific answer
router.put('/:qID/answers/:aID', (req, res) => {
    res.json(
        {
            response:  "You sent me a PUT request to /answers/aID",
            questionId: req.params.qID,
            answerId: req.params.aID,
            body: req.body
        });
});


// delete /questions/:qID/answers/aID
// delete a specific answer
router.delete('/:qID/answers/:aID', (req, res) => {
    res.json(
        {
            response:  "You sent me a DELETE request to /answers/aID",
            questionId: req.params.qID,
            answerId: req.params.aID,
        });
});


// post /questions/:qID/answers/aID
// vote on a specific answer
router.post('/:qID/answers/:aID/vote-:dir',(req, res, next) => {
    if(req.params.dir.search(/^(up|down)$/) === -1) {
        const err = new Error("Not Found");
        err.status = 404;
        next(err);
    }else {
        next();
    }
}, (req, res) => {
    res.json(
        {
            response:  `You sent me a DELETE request to /answers/aID/vote- ${req.params.dir}`,
            questionId: req.params.qID,
            answerId: req.params.aID,
            vote: req.params.dir
        });
});

module.exports = router;