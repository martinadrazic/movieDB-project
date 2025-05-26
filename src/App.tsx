import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";

import { MovieDetails } from "./pages/MovieDetails";
import { Home } from "./pages/Home";

import { MovieSearches } from "./pages/MovieSearches";
import { SeriesSearches } from "./pages/SeriesSearches";

import { MovieProvider } from "./context/MovieContext.tsx";
import { Favorites } from "./pages/Favorites.tsx";
import { Footer } from "./components/Footer.tsx";
import styles from "./App.module.css";

import { AuthProvider } from "./context/AuthContext.tsx";
import { ListsProvider } from "./context/ListsContext.tsx";

export function App() {
  return (
    <AuthProvider>
      <ListsProvider>
        <MovieProvider>
          <Router>
            <div className={styles.appContainer}>
              <Navbar />
              <main className={styles.mainContent}>
                <div className={styles.container}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<MovieSearches />} />
                    <Route path="/series" element={<SeriesSearches />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/movies/:id" element={<MovieDetails />} />
                  </Routes>
                </div>
              </main>
              <Footer />
            </div>
          </Router>
        </MovieProvider>
      </ListsProvider>
    </AuthProvider>
  );
}
