const mongoose = require("mongoose");

const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  votes: [
    {
      type: String,
    },
  ],
  img: {
    src: {
      type: String,
    },
    alt: {
      type: String,
    },
  },
});

const People = mongoose.model("People", peopleSchema);

module.exports = People;
