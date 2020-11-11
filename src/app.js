const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const authController = require("./controllers/authController");
const personController = require("./controllers/personController");
const secureMiddleware = require("./middlewares/secureMiddleware");

app.use(bodyParser.json());

// login and generate token
app.post("/login", authController.loginPost);

// listing
app.get("/", secureMiddleware, personController.personGet);

module.exports = app;
