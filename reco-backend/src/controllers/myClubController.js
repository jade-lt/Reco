const express = require("express");
const MyClub = require("../models/MyClubModel");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allMyClubs = await MyClub.find();
    res.json(allMyClubs);
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newMyClub = await MyClub.create(req.body);
    res.json(newMyClub);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const foundMyClub = await MyClub.findById(req.params.id);
    res.json(foundMyClub);
  } catch (err) {
    res.send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedMyClub = await MyClub.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedMyClub);
  } catch (err) {
    res.send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedMyClub = await MyClub.findByIdAndRemove(req.params.id);
    res.json(deletedMyClub);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
