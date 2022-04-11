const express = require("express");
const router = express.Router();
const {
  getAll,
  getOne,
  createOne,
  updateOne,
} = require("../controllers/discussion");
//getAll-getOne-createOne-updateOne
router.get("/", getAll).post("/", createOne);
router.get("/:id", getOne).patch("/:id", updateOne);

module.exports = router;
