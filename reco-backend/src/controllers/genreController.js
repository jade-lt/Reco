const express = require("express");
const Genre = require("../models/GenreModel");

const router = express.Router();


router.get("/", async (req, res, next) => {
  try {
    const allGenres = await Genre.find();
    res.json(allGenres);
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newGenre = await Genre.create(req.body);
    res.json(newGenre);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const foundGenre = await Genre.findById(req.params.id);
    res.json(foundGenre);
  } catch (err) {
    res.send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedGenre = await Genre.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });x
    res.json(updatedGenre);
  } catch (err) {
    res.send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedGenre = await Genre.findByIdAndRemove(req.params.id);
    res.json(deletedGenre);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;