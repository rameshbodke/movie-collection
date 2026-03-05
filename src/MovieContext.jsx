import { createContext, useEffect, useState } from "react";
import initialMovies from "./Data";

export const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("movies");
    if (saved) {
      setMovieList(JSON.parse(saved));
    } else {
      setMovieList(initialMovies);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movieList));
  }, [movieList]);

  const addMovie = (movie) => {
    setMovieList((prev) => [...prev, movie]);
  };

  const deleteMovie = (id) => {
    setMovieList((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <MovieContext.Provider value={{ movieList, addMovie, deleteMovie }}>
      {children}
    </MovieContext.Provider>
  );
}