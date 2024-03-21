import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return null;
  const mainMovie = movies[movies.length - 3];
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview}></VideoTitle>
      <VideoBackground movieid={id} />
    </div>
  );
};

export default MainContainer;
