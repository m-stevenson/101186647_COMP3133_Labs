import { gql } from "graphql-tag";

const movieSchema = gql`
  type Movie {
    _id: ID!
    name: String!
    director_name: String!
    production_house: String!
    release_date: String!
    rating: Float!
    movie_age: Int
  }

  type Query {
    movies: [Movie!]!
    movie(id: ID!): Movie
    moviesByDirector(directorName: String!): [Movie!]!
  }

  type Mutation {
    insertMovie(
      name: String!
      director_name: String!
      production_house: String!
      release_date: String!
      rating: Float!
    ): Movie

    updateMovie(
      id: ID!
      name: String
      director_name: String
      production_house: String
      release_date: String
      rating: Float
    ): Movie

    deleteMovieById(id: ID!): Boolean
  }
`;

export default movieSchema;
