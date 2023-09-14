import { NETFLIX_BACKGROUND } from "../utils/constant";
import { GPTMovieSuggestion } from "./GPTMovieSuggestion";
import { GPTSearchBar } from "./GPTSearchBar";

export const GPTSearchPage = () => {
  return (
    <div>
      <div className="fixed">
        <img
          className="h-screen object-cover"
          src={NETFLIX_BACKGROUND}
          alt="background-image"
        ></img>
      </div>
      <div className="pt-[80%] md:pt-[0%]">
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>
    </div>
  );
};
