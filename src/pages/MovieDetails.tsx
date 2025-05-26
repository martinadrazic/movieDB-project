import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import OMDBClient, {
  MovieDetails as MovieDetailsType,
} from "../api/OMDBClient";
import styles from "./MovieDetails.module.css";
import { Button, Card, Flex } from "@contentful/f36-components";
import { ArrowBackwardIcon, MinusIcon, PlusIcon } from "@contentful/f36-icons";
import { transformMovieDetailsToListItem } from "../utils/transformers.ts";
import { useListsContext } from "../context/ListsContext.tsx";

export function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toggleFavorites, favorites } = useListsContext();

  const [movieDetails, setMovieDetails] = useState<MovieDetailsType | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const details = await OMDBClient.getMovieDetails(id!);
        setMovieDetails(details);
        setError(null);
      } catch {
        setError("An error occurred while fetching movie details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchMovieDetails();
  }, [id]);

  const toggleFavorite = () => {
    if (!movieDetails) return;
    toggleFavorites(transformMovieDetailsToListItem(movieDetails));
  };

  const isFavorite = useMemo(() => {
    return favorites.some((favorite) => favorite.id === id);
  }, [favorites, id]);

  if (loading) {
    return <div className={styles.loading}>Loading movie details...</div>;
  }

  if (error) {
    return (
      <div className={styles.error}>
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={() => navigate("/")} className={styles.backButton}>
          Back to Library
        </button>
      </div>
    );
  }

  if (!movieDetails) {
    return (
      <div className={styles.error}>
        <h2>Movie not found</h2>
        <button onClick={() => navigate("/")} className={styles.backButton}>
          Back to Library
        </button>
      </div>
    );
  }

  return (
    <Flex flexDirection="column" paddingTop="spacingL" gap="spacingS">
      <Button
        startIcon={<ArrowBackwardIcon />}
        variant="secondary"
        onClick={() => navigate("/")}
      >
        Back to Library
      </Button>
      <Card padding="none" className={styles.card}>
        <Flex flexDirection="column" gap="spacingM">
          <div className={styles.container}>
            <img
              className={styles.poster}
              src={movieDetails.Poster}
              alt={movieDetails.Title}
            />
            <Flex
              flexDirection="column"
              padding="spacingM"
              justifyContent="space-between"
            >
              <h1 className={styles.title}>{movieDetails.Title}</h1>
              <div className={styles.meta}>
                <p className={styles.year}>Year: {movieDetails.Year}</p>
                <p className={styles.genre}>Genre: {movieDetails.Genre}</p>
                <p className={styles.rating}>
                  IMDB Rating: {movieDetails.imdbRating}
                </p>
                <p className={styles.plot}>{movieDetails.Plot}</p>
              </div>
              <div className={styles.actions}>
                <Button
                  onClick={toggleFavorite}
                  startIcon={isFavorite ? <MinusIcon /> : <PlusIcon />}
                  variant={isFavorite ? "negative" : "positive"}
                >
                  {isFavorite ? "Unfavorite" : "Add to Favorites"}
                </Button>
              </div>
            </Flex>
          </div>
        </Flex>
      </Card>
    </Flex>
  );
}
