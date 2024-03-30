import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptSearchMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const language = useSelector((store) => store?.config?.language);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const gptQuery =
    "Act as a movie recommendation system and suggest me some movies for the query" +
    searchText?.current?.value +
    ".only give top 5 movies,comma separated like the example result given ahead.Example : sholey,chennai express,indra,robot,virata parvam";
  const handleGptSearchClick = async () => {
    // const chatCompletion = await openai?.chat?.completions?.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(chatCompletion.choices);
    //   //console.log(searchText.current.value);
    const gptMovies = "sholey,chennai express,indra,robot,virata parvam".split(
      ","
    );
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptSearchMovies({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  // const handleGptSearchClick = aync () => {
  //   const gptMovies = "sholey,chennai express,indra,robot,virata parvam".split(
  //     ","
  //   );
  //   const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
  //   const tmdbResults = await Promise.all(promiseArray);
  //   console.log(tmdbResults);
  // };
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[language]?.gptSearchPlaceholder}
        ></input>
        <button
          className="col-span-3 m-4 px-4 py-2 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[language]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
