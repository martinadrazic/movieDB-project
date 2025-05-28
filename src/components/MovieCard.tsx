import { PropsWithChildren, useMemo } from "react";
import styles from "./MovieCard.module.css";
import { Button, Card, Flex, Heading, Text } from "@contentful/f36-components";
import { MinusIcon, PlusIcon } from "@contentful/f36-icons";
import { Link } from "react-router-dom";
import { useListsContext } from "../context/ListsContext.tsx";
import { Movie } from "../context/MovieContext.tsx";

export function MovieCard({ movie }: PropsWithChildren<{ movie: Movie }>) {
  const { favorites, toggleFavorites } = useListsContext();
  const isFavorite = useMemo(() => {
    return favorites.some((favorite) => favorite.id === movie.id);
  }, [favorites, movie.id]);

  return (
    <Card className={styles.card}>
      <Flex flexDirection="column" fullHeight>
        <Link to={`/movies/${movie.id}`} className={styles.cardLink}>
          <Flex
            flexDirection="column"
            padding="spacingM"
            gap="spacingM"
            justifyContent="space-between"
            flexGrow={1}
          >
            <img
              className={styles.poster}
              src={movie.poster}
              alt={`movie poster for ${movie.title}`}
            />
            <Flex flexDirection="column">
              <Text fontColor="gray600">{movie.year}</Text>
              <Heading
                as="h4"
                fontSize="fontSizeL"
                lineHeight="lineHeightL"
                marginBottom={"none"}
                className={styles.title}
              >
                {movie.title}
              </Heading>
            </Flex>
          </Flex>
        </Link>

        <Flex
          flexDirection="column"
          padding="spacingM"
          gap="spacingM"
          justifyContent="space-between"
        >
          <Button
            onClick={() => toggleFavorites(movie)}
            className={`${styles.button} ${isFavorite ? styles.active : ""}`}
            isFullWidth
            variant={isFavorite ? "negative" : "positive"}
            startIcon={isFavorite ? <MinusIcon /> : <PlusIcon />}
          >
            {isFavorite ? "Unfavorite" : "Add to Favorites"}
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
}
