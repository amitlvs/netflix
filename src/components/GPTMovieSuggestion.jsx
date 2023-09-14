import { useSelector } from "react-redux";
import MovieList from "./MovieList";

export const GPTMovieSuggestion = () => {
  const { gptMovieName, tmdbMovieResult } = useSelector((store) => store?.gpt);
  console.log(tmdbMovieResult);
  return (
    <div className="relative opacity-90">
      <div className="p-4 m-4 bg-black ">
        {gptMovieName?.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={tmdbMovieResult[index]}
          />
        ))}
      </div>
    </div>
  );
};
