const express = require("express");
const res = require("express/lib/response");
const authenticate = require("../middlewares/authenticate");
const router = express.Router();
const todoModel = require("../models/todo.model");

// router.get("/", authenticate, async (req, res) => {
//   try {
//     const todos = await todoModel.find();
//     return res.status(200).send({ todos });
//   } catch ({ message }) {
//     return res.status(400).send({ error: message });
//   }
// });
router.get("/:id", async (req, res) => {
  try {
    const todos = await todoModel.find({ user_id: req.params.id });
    return res.status(200).send({ todos });
  } catch ({ message }) {
    return res.status(400).send({ error: message });
  }
});

router.post("/:id", authenticate, async (req, res) => {
  try {
    const todo = await todoModel.create(req.body);
    return res.status(201).send({ todo });
  } catch ({ message }) {
    return res.status(400).send({ error: message });
  }
});

router.patch("/edit/:id", authenticate, async (req, res) => {
  try {
    const todo = await todoModel.findByIdAndUpdate(
      { _id: req.params.id },
      {
        ...req.body,
      },
      { new: true }
    );
    return res.status(201).send({ todo });
  } catch ({ message }) {
    return res.status(400).send({ error: message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const todo = await todoModel.findOneAndDelete({ _id: req.params.id });
    return res.status(201).send({ todo });
  } catch ({ message }) {
    return res.status(400).send({ error: message });
  }
});

module.exports = router;
