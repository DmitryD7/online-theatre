import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import {slice} from "../features/MoviesRow/moviesReducer/movies-reducer";

export const rootReducer = combineReducers({
    movies: slice.reducer
})

export const store = configureStore(
    {
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
    }
)