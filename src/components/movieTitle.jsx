const MovieTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] absolute text-white bg-gradient-to-tr from-black px-24 ">
      <h1 className="font-bold text-6xl underline">{title}</h1>
      <p className="hidden md:inline-block py-6 w-1/2 text-xl">{overview}</p>
      <div>
        <button className="p-2 hidden md:inline-block px-12 text-xl rounded-md bg-white text-black hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="mx-2 hidden md:inline-block bg-gray-500 text-white p-2 px-12 text-xl rounded-md hover:bg-opacity-80">
          ⌽ More Info
        </button>
      </div>
    </div>
  );
};

export default MovieTitle;
