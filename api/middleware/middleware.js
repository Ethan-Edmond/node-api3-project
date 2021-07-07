const Users = require('../users/users-model');

function logger(req, res, next) {
  console.log("----- Logger -----");
  console.log("Req Method:", req.method);
  console.log("Req URL:", `http://localhost:5000${req.url}`);
  const now = new Date();
  console.log("TimeStamp:", now);
  console.log("------------------");
  next();
}

function validateUserId(req, res, next) {
  Users.getById(req.params.id)
    .then(user => {
      if(user) {
        next();
      } else {
        res.status(404).json({
          message: 'The user with the specified id does not exist'
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  console.log('validated user');
  next();
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  console.log('validated post');
  next();
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
};
