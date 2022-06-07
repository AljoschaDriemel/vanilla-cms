const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  }
});

const MemberModel = mongoose.model("members", MemberSchema);

module.exports = MemberModel