const express = require("express");
const app = express();

const discussionRouter = require("./routes/discussion");
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");

// why to use cors
//const cors = require("cors"); //cors
//const passport = require("passport")
//const passportLocal = require('passport-local').Strategy //what is this -01
//const cookieParser = require("cookie-parser") // cookie parser
//const bcrypt = require('bcrypt') //bcrypt

//const session = require("express-session") //express-session

//app.use(cors());
app.use(express.json());

app.use("/api/discussion", discussionRouter);
app.use("/api/register", registerRouter);
app.use("/api/login", loginRouter);

module.exports = app;
