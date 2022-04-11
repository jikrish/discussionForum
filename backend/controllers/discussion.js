const Discussion = require("../models/post");

//getAll
const getAll = async (req, res) => {
  try {
    const posts = await Discussion.find().sort("createdAt");
    res.status(200).json({ count: posts.length, posts });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
};

//getOne
const getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Discussion.findOne({
      _id: id,
    });
    if (!post) {
      res.status(404).json({ msg: `No job with id ${jobId}` });
    }
    res.status(200).json({ post });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
};

//createOne
const createOne = async (req, res) => {
  try {
    const onePost = await Discussion.create(req.body);

    res.status(201).json({ onePost });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
};

//updateOne - complete it
const updateOne = (req, res) => {
  try {
    const id = req.params.id;
    res.send(`updateOne post of id ${id}`);
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = { getAll, getOne, createOne, updateOne };
