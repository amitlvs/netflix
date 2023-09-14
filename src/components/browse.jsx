import useHorrorMovies from "../hooks/useHorrorMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import Header from "./Header";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import { GPTSearchPage } from "./GPTSearchPage";
export function Browse() {
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useHorrorMovies();
  useUpComingMovies();
  const toggleGPT = useSelector((store) => store.gpt.gptSearchView);
  return (
    <>
      <Header />
      {toggleGPT ? (
        <GPTSearchPage />
      ) : (
        <>
          <PrimaryContainer />
          <SecondaryContainer />
        </>
      )}

      {/*
       Main Container 
         - Video Background
         - Video Title
       Movie Container
         - Movie List * n
           - cards * n  
       
       */}
    </>
  );
}

export default Browse;
