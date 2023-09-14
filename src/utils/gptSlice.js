import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchView: false,
    tmdbMovieResult: null,
    gptMovieName: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.gptSearchView = !state.gptSearchView;
    },
    addMoviesDetails: (state, action) => {
      const { movieName, movieResult } = action.payload;
      state.gptMovieName = movieName;
      state.tmdbMovieResult = movieResult;
    },
  },
});

export const { toggleGptSearchView, addMoviesDetails } = gptSlice.actions;

export default gptSlice.reducer;
