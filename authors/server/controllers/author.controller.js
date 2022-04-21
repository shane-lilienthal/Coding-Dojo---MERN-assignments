const Author = require("../models/author.model");

module.exports = {
  // Create new Author
  createNewAuthor: (req, res) => {
    Author.create(req.body)
      .then((newAuthor) => {
        console.log(newAuthor);
        res.json(newAuthor);
      })
      .catch((err) => {
        console.log("createNewAuthor has failed.");
        console.log(err);
        res.status(400).json(err);
      });
  },
  // Retrieve all Authors
  findAllAuthors: (req, res) => {
    Author.find({})
      .then((allAuthors) => {
        console.log(allAuthors);
        res.json(allAuthors);
      })
      .catch((err) => {
        console.log("findAllAuthors has failed.");
        console.log(err);
      });
  },
  // Retrieve one Author
  findOneAuthor: (req, res) => {
    Author.findOne({ _id: req.params.id })
      .then((oneAuthor) => {
        console.log(oneAuthor);
        res.json(oneAuthor);
      })
      .catch((err) => {
        console.log("findOneAuthor has failed.");
        console.log(err);
      });
  },
  // Delete one Author
  deleteOneAuthor: (req, res) => {
    Author.deleteOne({ _id: req.params.id })
      .then((deletedAuthor) => {
        console.log(deletedAuthor);
        res.json(deletedAuthor);
      })
      .catch((err) => {
        console.log("deleteOneAuthor has failed.");
        console.log(err);
      });
  },
  // Update one Author
  updateOneAuthor: (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedAuthor) => {
        console.log(updatedAuthor);
        res.json(updatedAuthor);
      })
      .catch((err) => {
        console.log("updateOneAuthor has failed.");
        console.log(err);
      });
  },
};
