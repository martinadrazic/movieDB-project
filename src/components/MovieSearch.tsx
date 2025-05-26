import React, { PropsWithChildren, useState } from "react";
import { useMoviesContext } from "../context/MovieContext.tsx";
import styles from "./MovieSearch.module.css";
import { Button, TextInput } from "@contentful/f36-components";
import { SearchIcon } from "@contentful/f36-icons";

interface Props {
  filter?: "movie" | "series";
}

export function MovieSearch({ filter }: PropsWithChildren<Props>) {
  const { searchError, searchMovies } = useMoviesContext();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      searchMovies(query, filter);
    }
  };

  return (
    <>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <TextInput
          type="text"
          placeholder="Type to search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button startIcon={<SearchIcon />} type="submit">
          Search
        </Button>
      </form>
      {searchError && <p className={styles.error}>{searchError}</p>}
    </>
  );
}
