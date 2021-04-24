const express = require("express");
const List = require("../models/ListModel");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allLists = await List.find();
    res.json(allLists);
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newList = await List.create(req.body);
    res.json(newList);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const foundList = await List.findById(req.params.id);
    res.json(foundList);
  } catch (err) {
    res.send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedList = await List.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });x
    res.json(updatedList);
  } catch (err) {
    res.send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedList = await List.findByIdAndRemove(req.params.id);
    res.json(deletedList);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
