const express = require("express");
const Chat = require("../models/ChatModel");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allChats = await Chat.find();
    res.json(allChats);
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newChat = await Chat.create(req.body);
    res.json(newChat);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const foundChat = await Chat.findById(req.params.id);
    res.json(foundChat);
  } catch (err) {
    res.send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedChat = await Chat.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedChat);
  } catch (err) {
    res.send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedChat = await Chat.findByIdAndRemove(req.params.id);
    res.json(deletedChat);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
