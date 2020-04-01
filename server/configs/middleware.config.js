const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// Middleware Setup

module.exports = app => {
  app.use(logger("dev"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(cors({ origin: ["http://localhost:3000", "https://ambarinos-card-game.herokuapp.com"], credentials: true }));
};
