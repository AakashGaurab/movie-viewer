const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Year: {
    type: String,
    required: true,
  },
  imdbID: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  Poster:{
    type:String,
    required:true
  }
  // You can add more fields based on your requirements
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = {Movie};
