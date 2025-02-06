const express = require("express");
const { addMovie, getMovies, deleteMovie } = require("../controllers/movieController");

const router = express.Router();

router.post("/add", addMovie);
router.get("/", getMovies);
router.post("/delete/:id", deleteMovie);

module.exports = router;
