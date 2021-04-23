const express = require("express");
const Club = require("../models/ClubModel");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allClubs = await Club.find();
    res.json(allClubs);
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newClub = await Club.create(req.body);
    res.json(newClub);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const foundClub = await Club.findById(req.params.id);
    res.json(foundClub);
  } catch (err) {
    res.send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedClub = await Club.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedClub);
  } catch (err) {
    res.send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedClub = await Club.findByIdAndRemove(req.params.id);
    res.json(deletedClub);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
