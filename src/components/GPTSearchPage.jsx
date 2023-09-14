import { NETFLIX_BACKGROUND } from "../utils/constant";
import { GPTMovieSuggestion } from "./GPTMovieSuggestion";
import { GPTSearchBar } from "./GPTSearchBar";

export const GPTSearchPage = () => {
  return (
    <div>
      <div className="fixed">
        <img
          className=" h-screen"
          src={NETFLIX_BACKGROUND}
          alt="background-image"
        ></img>
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
  );
};
