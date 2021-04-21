const express = require("express");
const Reco = require("../models/RecoModel");

const router = express.Router();

// router.get("/", (req, res) => res.send("this is the recos router"));

router.get("/", async (req, res, next) => {
  try {
    const allRecos = await Reco.find();
    res.json({
      status: { code: 200, message: "Successfully got all recos!" },
      data: allRecos,
    });
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newReco = await Reco.create(req.body);
    res.json({
      status: { code: 201, message: "Successfully added a new reco!" },
      data: newReco,
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
