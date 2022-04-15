const mongoose = require("mongoose");


const ProductsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "A product name is required."]
    },
    price: {
        type: Number,
        required:[true, "Must name a price!"],
        min: [0, "Price can't be negative!"]
    },
    description: {
        type: String,
        required: [true, "Please provide a product description."]
    }

}, {timestamps: true});


const Product = mongoose.model("Product", ProductsSchema);

module.exports = Product;