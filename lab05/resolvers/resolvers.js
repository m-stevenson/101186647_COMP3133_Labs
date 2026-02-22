// resolvers.js
import mongoose from "mongoose";
import Movie from "../models/Movie.js";

function isValidObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

// Turn Mongoose validation errors into a readable string
function formatMongooseError(err) {
  // Validation errors: err.errors.{field}.message
  if (err?.name === "ValidationError" && err?.errors) {
    return Object.values(err.errors)
      .map((e) => e.message)
      .join(" | ");
  }

  // CastError (invalid ObjectId, etc.)
  if (err?.name === "CastError") {
    return `Invalid value for ${err.path}: ${err.value}`;
  }

  return err?.message || "Unknown error";
}

const movieResolvers = {
  Query: {
    movies: async () => {
      return await Movie.find();
    },

    movie: async (_, { id }) => {
      return await Movie.findById(id);
    },

    moviesByDirector: async (_, { directorName }) => {
      return await Movie.findByDirector(directorName);
    },
  },

  Mutation: {
    insertMovie: async (_, args) => {
      const movie = new Movie(args);
      return await movie.save();
    },

    updateMovie: async (_, { id, ...updates }) => {
      return await Movie.findByIdAndUpdate(id, updates, {
        new: true,
        runValidators: true,
      });
    },

    deleteMovieById: async (_, { id }) => {
      const deleted = await Movie.findByIdAndDelete(id);
      return !!deleted;
    },
  },
};

export default movieResolvers;
