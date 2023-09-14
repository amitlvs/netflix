import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
import { useRef, useState } from "react";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constant";
import { addMoviesDetails } from "../utils/gptSlice";

export const GPTSearchBar = () => {
  const chatBox = useRef();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  const langConfigStore = useSelector(
    (store) => store?.appConfig?.lang
  ).toLowerCase();

  const getSuggestionFromAI = async () => {
    const chatBoxQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query. " +
      chatBox.current.value +
      " only give me names of 5 movies, comma seperated like the example given ahead. Example Result: Gadar, Sholay, Don, Koi Mil Gaya, Khatta Meetha";
    const dummyMovieList = [
      "Andaz Apna Apna",
      "Hera Pheri",
      "Chupke Chupke",
      "Jaane Bhi Do Yaaro",
      "Padosan",
    ];

    const searchMoviesFromTMDB = async (movieName) => {
      const movieData = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const json = await movieData.json();
      return json.results;
    };

    // Call TMDB search movie api
    const getMoviesFromTMDB = dummyMovieList.map((movieName) => {
      return searchMoviesFromTMDB(movieName.split(" ").join("%20"));
    });

    const moviesFromTMDB = await Promise.all(getMoviesFromTMDB);

    dispatch(
      addMoviesDetails({
        movieName: dummyMovieList,
        movieResult: moviesFromTMDB,
      })
    );
    //  Setup opne AI Billing to use AI API's
    // try {
    //   const suggestAIResponse = await openai.chat.completions
    //     .create({
    //       messages: [{ role: "user", content: chatBoxQuery }],
    //       model: "gpt-3.5-turbo",
    //     })
    //     .catch((error) => {
    //       const clearError = () => {
    //         setErrorMessage(null);
    //       };
    //       setErrorMessage(error.message);
    //       const timeoutId = setTimeout(clearError, 3000);
    //       return () => {
    //         clearTimeout(timeoutId);
    //       };
    //     });
    //   console(suggestAIResponse);
    //   const moviesArrayList =
    //     suggestAIResponse?.choices[0]?.message?.content?.split(",");

    // } catch (error) {}
  };

  return (
    <div>
      <form className="p-[10%]" onSubmit={(e) => e.preventDefault()}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="bg-black relative rounded-lg">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              ref={chatBox}
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-black rounded-lg bg-gray-50 focus:ring-black focus:border-black dark:bg-black dark:border-black dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
              placeholder={lang[langConfigStore]?.gptSearchPlaceHolder}
              required
            ></input>
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              onClick={getSuggestionFromAI}
            >
              {lang[langConfigStore]?.search}
            </button>
          </div>
          {errorMessage && (
            <p className="p-2 rounded-lg text-sm text-red-600 dark:text-red-500 text-center">
              {errorMessage}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};
