import { useSelector } from "react-redux";
import useMoviesTrailer from "../hooks/useMoviesTrailer";

const MovieBackground = ({ movieId }) => {
  useMoviesTrailer(movieId);
  const trailerStore = useSelector((store) => store.movies?.trailer);
  const trailerUrl = `https://www.youtube.com/embed/${trailerStore?.key}`;
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={trailerUrl + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieBackground;
