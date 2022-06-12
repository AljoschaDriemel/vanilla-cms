const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  position: {
    type: String,
  },

});

const MemberModel = mongoose.model("members", MemberSchema);

module.exports = MemberModel