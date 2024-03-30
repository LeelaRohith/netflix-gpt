import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="bg-black m-3 p-2 rounded-lg bg-opacity-80">
      {movieNames.map((movieName, index) => {
        return (
          <MovieList
            key={movieName}
            title={movieName.toUpperCase()}
            movies={movieResults[index]}
          ></MovieList>
        );
      })}
    </div>
  );
};

export default GptMovieSuggestions;
