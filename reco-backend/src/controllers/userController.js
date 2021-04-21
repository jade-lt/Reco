const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/UserModel");

const secretKey = "87CB9E5B-7C0B-4717-8D14-CCC3C41B6BBB";

router.get("/", (req, res) => res.send("this is the user router"));


router.post('/register', async (req, res) => {
    const password = req.body.password;
  
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    console.log(hashedPassword)
  
    req.body.password = hashedPassword;

    try {
        const createdUser = await User.create(req.body);
        console.log(createdUser, ' Successfully created new user');
        res.send();
    } catch (err){
        console.log("Could not create new user")
      res.send(err)
    }
  
  });


router.post('/login', async (req, res) => {
    try {
      const foundUser = await User.findOne({username: req.body.username});
      console.log(foundUser, ' foundUser');

    if(foundUser){
      if(bcrypt.compareSync(req.body.password, foundUser.password)){
        const payload = {
          id: foundUser._id,
          user: foundUser.username
        };
  
        jwt.sign(payload, secretKey, {expiresIn: '1h'}, (err, token) => {
          res.set('token', token);
          res.send();
        })
  
      } else {
        res.status(404).send();
      }
    } else {
  
      res.status(404).send();
  
    }
    } catch(err){
      res.status(404).send(err);
    }
  
  });

module.exports = router;
