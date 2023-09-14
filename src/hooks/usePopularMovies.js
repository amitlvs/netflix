import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
    console.log(json.results);
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};
export default usePopularMovies;
