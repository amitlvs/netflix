import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movieStore = useSelector((store) => store.movies);
  console.log(movieStore, "moviestore");
  return (
    <>
      {movieStore && (
        <div className="bg-black ">
          <div className="pl-12 -mt-64 relative z-20">
            <MovieList
              title={"Now Playing"}
              movies={movieStore?.nowPlayingMoviesList}
            />
            <MovieList title={"Trending"} movies={movieStore?.trendingMovies} />
            <MovieList title={"Horror"} movies={movieStore?.horrorMovies} />
            <MovieList title={"Popular"} movies={movieStore?.popularMovies} />
            <MovieList
              title={"Upcoming Movies"}
              movies={movieStore?.upComingMovies}
            />
          </div>
        </div>
      )}
      {/* Movie list popuplar
           MovieCard * n
           Movie List - now playing
           Movie lIst - trending
           movie list - horror
           */}
    </>
  );
};

export default SecondaryContainer;
