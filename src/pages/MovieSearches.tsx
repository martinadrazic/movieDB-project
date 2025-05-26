import { Flex, Heading } from "@contentful/f36-components";
import { MovieSearch } from "../components/MovieSearch.tsx";
import { SearchContainer } from "../components/SearchContainer.tsx";
import { MoviesList } from "../components/MoviesList.tsx";
import { MovieProvider } from "../context/MovieContext.tsx";

export function MovieSearches() {
  return (
    <MovieProvider>
      <Flex flexDirection="column" alignItems="center" gap="spacingM">
        <SearchContainer dataType="movie">
          <>
            <Heading fontSize="fontSize2Xl" fontColor="colorWhite">
              Search for Movies
            </Heading>
            <MovieSearch filter="movie" />
          </>
        </SearchContainer>
        <MoviesList />
      </Flex>
    </MovieProvider>
  );
}
