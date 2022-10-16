const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
    // validate: /^[A-Za-z ]*$/
  },
  interests: {
    type: [String],
    required: true
    // validate: /^[A-Za-z ]*$/
  },
  email: {
    type: String,
    required: true
    // validate: /^[A-Za-z@. ]*$/
  }
});

const Community = mongoose.model("Community", communitySchema);

module.exports = Community;
