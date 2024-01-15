const express = require('express');
const movie = express.Router();
const {Movie} = require('../models/movieModel');

// Create a new movie
movie.post('/post', async (req, res) => {
  try {
    // const movie = new Movie(req.body);
    await Movie.insertMany(req.body);
    res.status(201).json({"msg":"Movie added","data":req.body});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all movies
movie.get('/get-all', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific movie by ID
movie.get('/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a movie by ID
movie.patch('/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a movie by ID
movie.delete('/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json({ message: 'Movie deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = {movie};
