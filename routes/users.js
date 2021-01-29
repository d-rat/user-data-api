const express = require("express");
const { updateOne } = require("../models/model");
const router = express.Router();
const users = require("../models/model");

router.get("/", async (req, res) => {
  try {
    const allUsers = await users.find();
    res.json(allUsers);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const user = new users({
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
  });
  try {
    await user.save();
    res.json({ message: "User created successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await users.findOne({ name: req.params.id });
    res.json(user);
  } catch (error) {
    res.json({ messagez: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await users.remove({ name: req.params.id });
    res.send({ message: "User deleted successfully" });
  } catch (error) {
    res.json({ messagez: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    await users.updateOne({ name: req.params.id }, { $set: req.body });
    res.json({ message: "user data updated successfully" });
  } catch (error) {
    res.json({ messagez: error.message });
  }
});

module.exports = router;
