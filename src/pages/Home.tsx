import { MovieSearch } from "../components/MovieSearch.tsx";
import { Flex, Heading } from "@contentful/f36-components";
import { MovieProvider } from "../context/MovieContext.tsx";
import { SearchContainer } from "../components/SearchContainer.tsx";
import { MoviesList } from "../components/MoviesList.tsx";

export function Home() {
  return (
    <MovieProvider>
      <Flex flexDirection="column" alignItems="center" gap="spacingM">
        <SearchContainer>
          <>
            <Heading fontSize="fontSize2Xl" fontColor="colorWhite">
              Search for movies or series
            </Heading>
            <MovieSearch />
          </>
        </SearchContainer>
        <MoviesList />
      </Flex>
    </MovieProvider>
  );
}
