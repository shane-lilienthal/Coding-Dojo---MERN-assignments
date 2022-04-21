const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
  // Create new
  app.post("/api/authors", AuthorController.createNewAuthor);
  // Retrieve all
  app.get("/api/authors", AuthorController.findAllAuthors);
  // Retrieve one
  app.get("/api/authors/:id", AuthorController.findOneAuthor);
  // Delete one
  app.delete("/api/authors/:id", AuthorController.deleteOneAuthor);
  // Update one
  app.put("/api/authors/:id", AuthorController.updateOneAuthor);
};
