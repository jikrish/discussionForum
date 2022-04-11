//need to hash the password
//need to complete login

const User = require("../models/user");

const login = (req, res) => {
  res.send(`logging in...`);
};
const register = async (req, res) => {
  User.findOne({ username: req.body.username }, async (error, user) => {
    if (error) res.json({ error: error.message });
    if (user) res.send("User already exists");
    if (!user) {
      const hashedPassword = req.body.password;
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res
        .status(200)
        .json({ message: "new user created " + req.body.username });
    }
  });
};

module.exports = { login, register };
