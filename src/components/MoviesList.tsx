import { MovieCard } from "./MovieCard.tsx";
import { Grid } from "@contentful/f36-components";
import { useMoviesContext } from "../context/MovieContext.tsx";
import styles from "./MoviesList.module.css";

export function MoviesList() {
  const { movies } = useMoviesContext();
  return (
    <div className={styles.listContainer}>
      <Grid columns="1fr 1fr 1fr 1fr" rowGap="spacingM" columnGap="spacingM">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Grid>
    </div>
  );
}
