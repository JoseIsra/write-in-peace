const jwt = require("jsonwebtoken");
const { jsonWebTokenErrors } = require("../utils/jsonToken");

const authenticateRoute = (req, res, next) => {
  try {
    const token = req.headers?.authorization.split(" ")[1];
    if (!token) throw new Error("No Bearer");
    const key = jwt.verify(token, process.env.JWT_SECRET);
    req.payload = key;
    next();
  } catch (error) {
    res.status(400).json({
      message: jsonWebTokenErrors[error.message],
    });
  }
};

module.exports = { authenticateRoute };
