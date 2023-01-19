import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/user/userSlice";

import moviesReducer from "../features/movie/movieSlice";

export default configureStore({
	reducer: {
		user: userReducer,
		movies: moviesReducer,
	},
});


