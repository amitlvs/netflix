import { TMDB_IMAGE_URL } from "../utils/constant";

const MovieCards = ({ posterPath }) => {
  return (
    <div className="w-40 p-2 hover:scale-110 hover:transition-all hover:overflow-y-hidden">
      <img src={`${TMDB_IMAGE_URL}${posterPath} `}></img>
    </div>
  );
};

export default MovieCards;
