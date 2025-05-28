import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Movie } from "./MovieContext.tsx";

interface ListsContextType {
  favorites: Movie[];
  toggleFavorites: (favorite: Movie) => void;
  clearAllFavorites: () => void;
}

// Local Storage
const setLocalStorage = (favorites: Movie[]) => {
  localStorage.setItem("favoritesList", JSON.stringify(favorites));
};

const defaultList: Movie[] | [] = JSON.parse(
  localStorage.getItem("favoritesList") || "[]",
);

// Context
export const ListsContext = createContext<ListsContextType | null>(null);

export function ListsProvider({ children }: PropsWithChildren) {
  const [favorites, setFavorites] = useState<Movie[]>(defaultList);

  const toggleFavorites = (favorite: Movie) => {
    setFavorites((prevState) =>
      prevState.some((fav) => fav.id === favorite.id)
        ? prevState.filter((movie) => movie.id !== favorite.id)
        : [...prevState, favorite],
    );
  };

  const clearAllFavorites = () => {
    setFavorites([]);
  };

  setLocalStorage(favorites);

  return (
    <ListsContext.Provider
      value={{
        favorites,
        toggleFavorites,
        clearAllFavorites,
      }}
    >
      {children}
    </ListsContext.Provider>
  );
}

export const useListsContext = (): ListsContextType => {
  const listsContext = useContext(ListsContext);

  if (!listsContext) {
    throw new Error("ListsContext not defined");
  }

  return listsContext;
};
