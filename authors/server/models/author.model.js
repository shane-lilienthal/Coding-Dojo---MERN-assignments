const mongoose = require("mongoose");

const AuthorsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "An author name is required."],
      minlength: [3, "Author name must be at least 3 characters."],
    },
  },
  { timestamps: true }
);

const Author = mongoose.model("Author", AuthorsSchema);

module.exports = Author;
