import { useSelector } from "react-redux";
import MovieBackground from "./MovieBackground";
import MovieTitle from "./MovieTitle";

const PrimaryContainer = () => {
  const movie = useSelector((store) => store.movies?.nowPlayingMoviesList);
  if (!movie) return;

  const displayMovie = movie[0];
  const { original_title, overview, id } = displayMovie;
  return (
    <>
      <div>
        <MovieTitle title={original_title} overview={overview} />
        <MovieBackground movieId={id} />
      </div>
    </>
  );
};

export default PrimaryContainer;
