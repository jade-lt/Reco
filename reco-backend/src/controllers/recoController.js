const express = require("express");
const Reco = require("../models/RecoModel");

const router = express.Router();

// router.get("/", (req, res) => res.send("this is the recos router"));

router.get("/", async (req, res, next) => {
  try {
    const allRecos = await Reco.find();
    res.json(allRecos);
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newReco = await Reco.create(req.body);
    res.json(newReco);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const foundReco = await Reco.findById(req.params.id);
    res.json(foundReco);
  } catch (err) {
    res.send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedReco = await Reco.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });x
    res.json(updatedReco);
  } catch (err) {
    res.send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedReco = await Reco.findByIdAndRemove(req.params.id);
    res.json(deletedReco);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
