require("dotenv").config();

const express = require("express");
const flash = require("connect-flash");

const app = express();

require("./configs/mongoose.config");
require("./configs/debugger.config");
require("./configs/middleware.config")(app);
require("./configs/view-engine.config")(app);
require("./configs/locals.config")(app);
require("./configs/session.config")(app);
app.use(flash());

const index = require("./routes/index");
app.use("/", index);

const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

module.exports = app;
