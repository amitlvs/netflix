import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./header";
import PrimaryContainer from "./primaryContainer";
import SecondaryContainer from "./secondaryContainer";
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
