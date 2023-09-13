import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  console.log(title, movies);
  return (
    <>
      <div className="p-4 px-8">
        <div className="text-3xl py-2 text-black text-white">{title}</div>
        <div className="flex overflow-x-scroll">
          {movies && (
            <div className="flex flex-row">
              {movies?.map((movie) => (
                <MovieCards posterPath={movie?.poster_path} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieList;
