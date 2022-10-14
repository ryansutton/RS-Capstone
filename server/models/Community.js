const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z]*$/
  },
  interests: {
    type: String,
    required: true,
    enum: [
      "Children/Family",
      "Health",
      "Food Banks",
      "Social Services",
      "Shelters",
      "Animal",
      "Arts/Culture",
      "Education",
      "Environment"
    ]
  },
  email: {
    type: String
  }
});

const Community = mongoose.model("Community", communitySchema);

module.exports = Community;
