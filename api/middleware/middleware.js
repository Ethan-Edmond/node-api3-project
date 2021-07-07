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
  // DO YOUR MAGIC
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
};
