import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addHorrorMovies } from "../utils/movieSlice";

const useHorrorMovies = () => {
  const dispatch = useDispatch();

  const getHorrorMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addHorrorMovies(json.results));
    console.log(json.results);
  };
  useEffect(() => {
    getHorrorMovies();
  }, []);
};
export default useHorrorMovies;
