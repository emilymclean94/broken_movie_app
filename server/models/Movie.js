const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
  {
    posterImg: { type: String, required: true }, 
    title: { type: String, required: true },
    releaseDate: { type: String, required: true },
    description: { type: String, required: true },
    rated: { type: Boolean, required: true },
    rating: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
);


const Movie = model('Movie', movieSchema);

module.exports = Movie;