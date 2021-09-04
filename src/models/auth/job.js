const mongoose = require("mongoose");
var job = mongoose.model("job", {
  jobs: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  experience: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
  },
  position: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = job;
