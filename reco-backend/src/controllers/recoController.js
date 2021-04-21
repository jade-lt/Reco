const express = require("express");
const Reco = require('../models/RecoModel');

const router = express.Router();

// router.get("/", (req, res) => res.send("this is the recos router"));

router.get('/', async (req, res, next) => {
    console.log(req.body, ' this is get all recos')
       try  {
  
        const allRecos = await Reco.find();
  
        res.json({
          status: {
              code: 200,
              message: "Success"
            },
          data: allRecos
        });
  
      } catch (err){
  
        res.send(err)
  
      }
  });


module.exports = router;