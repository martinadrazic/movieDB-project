const API_KEY = import.meta.env.VITE_API_TOKEN;
const API_BASE_URL = import.meta.env.VITE_BASE_URL;

interface OMDBResponse<T> {
  Response: "True" | "False";
  Error?: string;
  Search?: T[];
  [key: string]: unknown;
}

export interface MovieDetails {
  imdbID: string;
  Title: string;
  Year: string;
  Genre: string;
  imdbRating: string;
  Plot: string;
  Poster: string;
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Language: string;
  Metascore: string;
  Production: string;
  Rated: string;
  Ratings: Array<{ Source: string; Value: string }>;
  Released: string;
  Response: string;
  Runtime: string;
  Type: string;
  Website: string;
  Writer: string;
  imdbVotes: string;
}

export interface MovieSearchResult {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
}

export interface OMDBError {
  Error: string;
  Response: boolean;
}

const OMDBClient = {
  /**
   * Fetches movies matching a search query.
   * @param query - The search term (e.g., movie title).
   * @param filter - filter for movies or series.
   * @returns Array of movie search results or throws an error.
   */
  async searchMovies(
    query: string,
    filter?: "movie" | "series",
  ): Promise<MovieSearchResult[]> {
    const url = `${API_BASE_URL}?s=${encodeURIComponent(query)}&apikey=${API_KEY}${filter ? `&type=${filter}` : ""}`;
    const response = await fetch(url);
    const data: OMDBResponse<MovieSearchResult> = await response.json();

    if (data.Response === "True" && data.Search) {
      return data.Search;
    } else {
      throw new Error(data.Error || "Failed to fetch search results.");
    }
  },

  /**
   * Fetches detailed information about a movie by its ID.
   * @param id - The IMDb ID of the movie.
   * @returns Movie details or throws an error.
   */
  async getMovieDetails(id: string): Promise<MovieDetails> {
    const url = `${API_BASE_URL}?i=${encodeURIComponent(id)}&apikey=${API_KEY}`;
    const response = await fetch(url);
    const data: MovieDetails | OMDBError = await response.json();

    console.log({ data });

    if ("Error" in data) {
      throw new Error(data.Error || "Failed to fetch movie details.");
    } else {
      return data;
    }
  },
};

export default OMDBClient;
