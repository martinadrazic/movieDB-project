import { MovieCard } from "../components/MovieCard";
import styles from "./Favorites.module.css";
import { useListsContext } from "../context/ListsContext.tsx";

export function Favorites() {
  const { favorites } = useListsContext();

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
    </div>
  );
}
