const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// Middleware Setup

module.exports = app => {
  app.use(logger("dev"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
};
