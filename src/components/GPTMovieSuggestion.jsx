import { useSelector } from "react-redux";
import MovieList from "./MovieList";

export const GPTMovieSuggestion = () => {
  const { gptMovieName, tmdbMovieResult } = useSelector((store) => store?.gpt);
  return (
    <div>
      {gptMovieName && (
        <div className="relative m-4 bg-black opacity-90">
          <div className="p-4">
            {gptMovieName?.map((movieName, index) => (
              <MovieList
                key={movieName}
                title={movieName}
                movies={tmdbMovieResult[index]}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
