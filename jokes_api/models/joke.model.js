const mongoose = require("mongoose");


const JokesSchema = new mongoose.Schema({

    setup: {
        type: String
    },
    punchLine: {
        type: String
    }

}, {timestamps: true});


const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke;