const express = require("express");
const router = express.Router();

const User = require("../../models/users");

// @route POST api/userss
// @desc Creat an users
// @ access Public
router.get("/", (req, res) => {
  User.find().then(users => res.json(users));
});

router.post("/", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    University: req.body.University,
    Major: req.body.Major,
    file: req.body.file
  });

  newUser.save().then(users => res.json(users));
});

module.exports = router;
