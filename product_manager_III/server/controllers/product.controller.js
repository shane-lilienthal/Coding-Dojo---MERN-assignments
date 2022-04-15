const Product = require("../models/product.model");

module.exports = {

    // Create new product
    createNewProduct: (req, res) => {
        Product.create(req.body)
            .then((newProduct) => {
                console.log(newProduct);
                res.json(newProduct);
            })
            .catch((err) => {
                console.log("createNewProduct has failed!")
                console.log(err);
                res.status(400).json(err);
            })
    },

    // Get all Products
    findAllProducts: (req, res) => {
        Product.find({})
            .then((allProducts) => {
                console.log(allProducts);
                res.json(allProducts);
            })
            .catch((err) => console.log(err))
    },

    // Get one product
    findOneProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
            .then((oneProduct) => {
                console.log(oneProduct);
                res.json(oneProduct);
            })
            .catch((err) => console.log(err))
    },

    // Delete one product
    deleteOneProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
            .then((deletedProduct) => {
                console.log(deletedProduct);
                res.json(deletedProduct);
            })
            .catch((err) => console.log(err))
    },

    // Update one Product
    updateOneProduct: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
            .then((updatedProduct) => {
                console.log(updatedProduct);
                res.json(updatedProduct);
            })
            .catch((err) => console.log(err))
    }

}