const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Movies = mongoose.model('movies', new Schema({
    title: String,
    image: String,
    director : String,
    stars : Array,
    description : String,
    showtimes : Array,
}), "movies");

module.exports = Movies