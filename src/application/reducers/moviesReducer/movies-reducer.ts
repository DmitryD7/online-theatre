import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesApi} from "../../../api/api";
import {MovieType} from "../../../models/models";


export const fetchTrending = createAsyncThunk<MoviesStateType, undefined, ThunkError>('movies/fetchMovies', async (param, thunkAPI) => {
    try {
        const resTrending = await moviesApi.fetchTrending()
        const resPopular = await moviesApi.fetchPopular()
        const resTopRated = await moviesApi.fetchTopRated()
        return {
            trending: resTrending.data.results,
            topRated: resTopRated.data.results,
            popular: resPopular.data.results
        }
    } catch (error) {
        return thunkAPI.rejectWithValue({errors: [error.message]})
    }
})

export const slice = createSlice({
    name: 'movies',
    initialState: {} as MoviesStateType,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchTrending.fulfilled, (state, action) => {
            return state = action.payload
        })
    }
})

type MoviesStateType = {
    trending: MovieType[]
    topRated: MovieType[]
    popular: MovieType[]
}

export type ThunkError = {
    rejectValue:
        {
            errors: Array<string>
        }
}

