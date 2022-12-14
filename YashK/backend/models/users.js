const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: string,
    required: true,
    minlength: 3,
  },
  email: {
    type: string,
    required: true,
    unique: true,
  },
  password: {
    type: string,
    required: true,
    minlength: 3,
    maxlength: 1024,
  },
});
