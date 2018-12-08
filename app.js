const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.load();
const mongoHandler = require("./libs/mongoHandler");
const SocketIOHandler = require("./libs/socketIOHandler");

/**Socket Server Configuration*/
const SocketIO = new SocketIOHandler(process.env.SOCKET_PORT);
SocketIO.startSocketServer();
global.IO = SocketIO.getSocketServerObj();
const indexRouter = require("./routes/index");
const app = express();
const mongodb = new mongoHandler();
mongodb.connect();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  let debugMode = req.query.debugMode || "json";
  // render the error page
  res.status(err.status || 200);
  if (debugMode.toLowerCase() == "html") {
    res.render("error");
  } else {
    let errObj = {
      error: 1,
      status: err.status || 200,
      name: err.name,
      message: err.message
    };
    res.json(errObj);
  }
});

module.exports = app;
