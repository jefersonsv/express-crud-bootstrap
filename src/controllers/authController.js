const jwt = require("jsonwebtoken");

const users = [
  {
    username: "jeferson",
    password: "12345",
  },
];

exports.loginPost = (req, res) => {
  const allow = isValid(req.body.username, req.body.password);
  if (allow) {
    const token = generateAccessToken({ username: req.body.username });
    res.json(token);
  } else {
    res.sendStatus(401);
  }
};

const isValid = (username, password) => {
  if (!username || !password) return false;
  const user = users.find((w) => w.username === username);
  return user && user.password === password;
};

const generateAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRETE, {
    expiresIn: 1800,
  });
};
