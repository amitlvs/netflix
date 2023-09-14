import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMoviesTrailer = (movieId) => {
  const dispatch = useDispatch();
  const moviesTrailer = useSelector((store) => store?.movies?.trailer);
  const getMoviesVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filteredData = json?.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData?.length ? filteredData[0] : json.results[0];
    dispatch(addTrailer(trailer));
  };
  useEffect(() => {
    !moviesTrailer && getMoviesVideo();
  }, []);
};

export default useMoviesTrailer;
