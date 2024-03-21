import React from "react";

import { useSelector } from "react-redux";

import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieid }) => {
  //const [trailer, setTrailer] = useState(null);
  const trailer = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieid);
  if (!trailer) return;
  return (
    <div className="w-screen aspect-video">
      <iframe
        className="w-screen aspect-video object-cover"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?&autoplay=1&mute=1&controls=0&controlslist=nodownload&loop=1"
        }
        title="YouTube video player"
        frameBorder="0"
        autoPlay
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
