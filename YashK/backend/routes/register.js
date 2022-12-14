const bcrypt = require("bcrypt");
const joi = require("joi");
const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  const schema = joi.object({
    name: joi.string().min(3).max(30).required(),
    email: joi.string().min(3).max(300).required().email(),
    password: joi.string().min(3).max(100).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let usr = await User.findOne({ email: req.body.email });

  if (usr) return res.status(400).send("User already exists...");

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const salt = await bcrypt.genSalt(10);

  await bcrypt.hash(user.password, salt);

  await user.save();
});
