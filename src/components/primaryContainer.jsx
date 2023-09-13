import { useSelector } from "react-redux";
import MovieBackground from "./movieBackground";
import MovieTitle from "./movieTitle";

const PrimaryContainer = () => {
  const movie = useSelector((store) => store.movies?.nowPlayingMoviesList);
  if (!movie) return;

  const displayMovie = movie[0];
  const { original_title, overview, id } = displayMovie;
  console.log(displayMovie);
  return (
    <>
      <MovieTitle title={original_title} overview={overview} />
      <MovieBackground movieId={id} />
    </>
  );
};

export default PrimaryContainer;
