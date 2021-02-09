import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesApi} from "../../../api/api";
import {MovieType} from "../../../api/apiTypes";

export type ThunkError = {
    rejectValue:
        {
            errors: Array<string>
        }
}

export const fetchTrending = createAsyncThunk<{movies: Array<MovieType> }, undefined, ThunkError>('movies/fetchMovies', async (param, thunkAPI) => {
    try {
        const res = await moviesApi.fetchTrending()
        console.log(res)
        return {movies: res.data.results}
    } catch (error) {
        return thunkAPI.rejectWithValue({errors: [error.message]})
    }
})

//export const asyncMoviesActions = {fetchTrending}

export const slice = createSlice({
    name: 'movies',
    initialState: [] as MovieType[],
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchTrending.fulfilled, (state, action) => {
           return state = action.payload.movies
        })
    }
})

