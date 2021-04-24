const express = require("express");
const Category = require("../models/CategoryModel");

const router = express.Router();


router.get("/", async (req, res, next) => {
  try {
    const allCategories = await Category.find();
    res.json(allCategories);
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.json(newCategory);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const foundCategory = await Category.findById(req.params.id);
    res.json(foundCategory);
  } catch (err) {
    res.send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });x
    res.json(updatedCategory);
  } catch (err) {
    res.send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndRemove(req.params.id);
    res.json(deletedCategory);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
