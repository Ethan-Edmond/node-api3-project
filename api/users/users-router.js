const express = require('express');
const Users = require('./users-model');
const Posts = require('../posts/posts-model');

// You will need `users-model.js` and `posts-model.js` both
// The middleware functions also need to be required

const router = express.Router();

router.get('/', (req, res) => {
  // RETURN AN ARRAY WITH ALL THE USERS
  res.status(200).json({
    message: 'get all users'
  });
});

router.get('/:id', (req, res) => {
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id
  res.status(200).json({
    message: `get user with id ${req.params.id}`
  });
});

router.post('/', (req, res) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
  res.status(201).json({
    message: 'posted user',
    body: req.body
  });
});

router.put('/:id', (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  res.status(200).json({
    message: `updated user with id ${req.params.id}`,
    body: req.params.body
  });
});

router.delete('/:id', (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
  res.status(200).json({
    message: `deleted user with id ${req.params.id}`
  });
});

router.get('/:id/posts', (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
  res.status(200).json({
    message: `got all of user ${req.params.id}'s posts`,
    body: req.body
  });
});

router.post('/:id/posts', (req, res) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  res.status(201).json({
    message: `Added post to user ${req.params.id}`,
    body: req.body
  });
});

// do not forget to export the router

module.exports = router;
