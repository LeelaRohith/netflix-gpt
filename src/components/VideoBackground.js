import React from "react";

import { useSelector } from "react-redux";

import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieid }) => {
  //const [trailer, setTrailer] = useState(null);
  const trailer = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieid);
  if (!trailer) return;
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?si=vtBJ-8bzMalpFKep&amp;start=18"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
