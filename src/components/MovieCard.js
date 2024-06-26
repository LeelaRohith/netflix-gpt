import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 pr-6">
      <img alt="Movie Poster" src={IMG_CDN_URL + posterPath}></img>
    </div>
  );
};

export default MovieCard;
