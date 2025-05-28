import { MovieCard } from "../components/MovieCard";
import styles from "./Favorites.module.css";
import { useListsContext } from "../context/ListsContext.tsx";
import { Button } from "@contentful/f36-components";

export function Favorites() {
  const { favorites, clearAllFavorites } = useListsContext();

  if (favorites.length === 0) {
    return (
      <div className={styles.emptyFavorites}>
        <h2>No favorite movies yet</h2>
        <p>Start adding movies to your favorites!</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Favorite Movies</h1>
      <div className={styles.movieList}>
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Button
        className={styles.button}
        variant="positive"
        isFullWidth
        onClick={clearAllFavorites}
      >
        Clear all
      </Button>
    </div>
  );
}
