const express = require('express');
const Users = require('./users-model');
const Posts = require('../posts/posts-model');
const {
  validateUserId,
  validateUser,
  validatePost
} = require('../middleware/middleware');
// You will need `users-model.js` and `posts-model.js` both
// The middleware functions also need to be required

const router = express.Router();

router.get('/', (req, res) => {
  Users.get()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

router.get('/:id', validateUserId, (req, res) => {
  Users.getById(req.params.id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

router.post('/', validateUser, (req, res) => {
  Users.insert({
    name: req.body.name
  })
    .then(inserted => {
      res.status(201).json(inserted);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

router.put('/:id', validateUserId, validateUser, (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  res.status(200).json({
    message: `updated user with id ${req.params.id}`,
    body: req.body
  });
});

router.delete('/:id', validateUserId, (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
  res.status(200).json({
    message: `deleted user with id ${req.params.id}`
  });
});

router.get('/:id/posts', validateUserId, (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
  res.status(200).json({
    message: `got all of user ${req.params.id}'s posts`,
    body: req.body
  });
});

router.post('/:id/posts', validateUserId, validatePost, (req, res) => {
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
