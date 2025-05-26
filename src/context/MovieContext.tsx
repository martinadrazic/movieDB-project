import { createContext, PropsWithChildren, useContext, useState } from "react";
import OMDBClient from "../api/OMDBClient.ts";

export interface Movie {
  id: string;
  title: string;
  year: string;
  poster: string;
  rating: number;
  favorite: boolean;
  watched: boolean;
}

interface MovieContextType {
  movies: Movie[];
  searchError: string | null;
  searchMovies: (query: string, filter?: "movie" | "series") => void;
  setMovies: (movies: Movie[]) => void;
}

// Context
export const MovieContext = createContext<MovieContextType | null>(null);

export function MovieProvider({ children }: PropsWithChildren) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchError, setSearchError] = useState<string | null>(null);

  const searchMovies = async (query: string, filter?: "movie" | "series") => {
    try {
      const fetchedMovies = await OMDBClient.searchMovies(query, filter);
      const transformedMovies = fetchedMovies.map((movie) => {
        return {
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          poster: movie.Poster,
          rating: 0, // OMDb doesn't provide ratings in the search results; you can fetch details later
          favorite: false,
          watched: false,
        };
      });
      setMovies(transformedMovies);
      setSearchError(null);
    } catch {
      setSearchError("Failed to fetch movies.");
      setMovies([]);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        searchError,
        searchMovies,
        setMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export const useMoviesContext = (): MovieContextType => {
  const movieContext = useContext(MovieContext);

  if (!movieContext) {
    throw new Error("MovieContext not defined");
  }

  return movieContext;
};
