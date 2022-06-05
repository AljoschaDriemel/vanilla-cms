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

const Member = mongoose.model("Member", MemberSchema);

module.exports = { Member };