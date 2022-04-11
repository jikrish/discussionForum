const mongoose = require("mongoose");

require("dotenv").config();
const app = require("./app");
const path = require("path");

const db = process.env.DATABASE;

mongoose
  .connect(db)
  .then(() => console.log("Connected to DB..."))
  .catch((err) => console.log(err));

//app.use(express.static("frontend/build"));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
