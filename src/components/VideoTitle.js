import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video bg-gradient-to-r from-black pt-[15%] px-24 absolute text-white">
      <p className="text-6xl font-bold">{title}</p>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-90">
          Play
        </button>
        <button className="mx-2 bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-90">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
