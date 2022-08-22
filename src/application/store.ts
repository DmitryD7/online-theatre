import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import {slice as moviesSlice} from "./reducers/moviesReducer/movies-reducer";
import {slice as categoryMoviesSlice} from "./reducers/categoryMoviesReducer/categoryMovies-reducer";
import appReducer from "./reducers/appReducer/appReducer"

export const rootReducer = combineReducers({
    movies: moviesSlice.reducer,
    categoryMovies: categoryMoviesSlice.reducer,
    app: appReducer,
})

export const store = configureStore(
    {
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
    }
)