import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMoviesList: null,
    trailer: null,
    popularMovies: null,
    trendingMovies: null,
    horrorMovies: null,
    upComingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMoviesList = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addHorrorMovies: (state, action) => {
      state.horrorMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },

    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailer,
  addPopularMovies,
  addTrendingMovies,
  addHorrorMovies,
  addUpComingMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
