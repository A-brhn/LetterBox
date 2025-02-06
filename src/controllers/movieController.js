const Movie = require("../models/Movie");

exports.addMovie = async (req, res) => {
  const { title, description, genre, releaseYear, poster } = req.body;

  try {
    const newMovie = new Movie({ title, description, genre, releaseYear, poster });
    await newMovie.save();
    res.redirect("/movies");
  } catch (err) {
    res.status(500).json({ message: "Error adding movie" });
  }
};

exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.render("movies", { movies });
  } catch (err) {
    res.status(500).json({ message: "Error fetching movies" });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.redirect("/movies");
  } catch (err) {
    res.status(500).json({ message: "Error deleting movie" });
  }
};
