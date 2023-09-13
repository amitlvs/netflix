import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";
export function Browse() {
  useNowPlayingMovies();

  return (
    <>
      <Header />
      <PrimaryContainer />
      <SecondaryContainer />
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
