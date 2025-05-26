import { Flex, Heading } from "@contentful/f36-components";
import { MovieSearch } from "../components/MovieSearch.tsx";
import { MoviesList } from "../components/MoviesList.tsx";
import { MovieProvider } from "../context/MovieContext.tsx";
import { SearchContainer } from "../components/SearchContainer.tsx";

export function SeriesSearches() {
  return (
    <MovieProvider>
      <Flex flexDirection="column" alignItems="center" gap="spacingM">
        <SearchContainer dataType="series">
          <Heading fontSize="fontSize2Xl" fontColor="colorWhite">
            Search for Series
          </Heading>
          <MovieSearch filter="series" />
        </SearchContainer>
        <MoviesList />
      </Flex>
    </MovieProvider>
  );
}
