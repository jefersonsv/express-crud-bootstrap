const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const users = [
  {
    username: "jeferson",
    password: "12345",
  },
];

const isValid = (username, password) => {
  if (!username || !password) return false;

  const user = users.find((w) => w.username === username);
  return user && user.password === password;
};

module.exports = (req, res, next) => {
  const headerAuthorization = req.headers["authorization"];
  if (!headerAuthorization) {
    res.sendStatus(401);
  } else {
    if (headerAuthorization.toLowerCase().startsWith("bearer")) {
      const token = headerAuthorization && headerAuthorization.split(" ")[1];
      if (!token) return res.sendStatus(403);
      req.user = user;
      next();
    } else {
      res.sendStatus(403);
    }
  }
};
