import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	recommend: null,
	newDisney: null,
	original: null,
	trending: null,

}

const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		setMovies: (state, action) => {
			state.recommend = action.payload.recommend;
			state.trending = action.payload.trending;
			state.original = action.payload.original;
			state.trending = action.payload.trending;
		},
	},
})

export default movieSlice.reducer;

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.recommend;
export const selectNewDisney = (state) => state.newDisney;
export const selectOriginal = (state) => state.original;
export const selectTrending = (state) => state.trending;

