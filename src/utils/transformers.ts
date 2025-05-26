import { Movie } from "../context/MovieContext.tsx";
import { MovieDetails } from "../api/OMDBClient.ts";

export const transformMovieDetailsToListItem = (
  movieDetails: MovieDetails,
): Movie => {
  const rating = Number(movieDetails.imdbRating);
  return {
    id: movieDetails.imdbID,
    title: movieDetails.Title,
    year: movieDetails.Year,
    poster: movieDetails.Poster,
    rating: rating,
    favorite: false,
    watched: false,
  };
};
