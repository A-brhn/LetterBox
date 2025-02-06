const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  genre: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  poster: { type: String }, // URL or file path
  ratings: [{ user: mongoose.Schema.Types.ObjectId, score: Number }],
  reviews: [{ user: mongoose.Schema.Types.ObjectId, text: String }],
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
