import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import {slice as moviesSlice} from "./moviesReducer/movies-reducer";
import {slice as categoryMoviesSlice} from "./categoryMoviesReducer/categoryMovies-reducer";

export const rootReducer = combineReducers({
    movies: moviesSlice.reducer,
    categoryMovies: categoryMoviesSlice.reducer
})

export const store = configureStore(
    {
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
    }
)