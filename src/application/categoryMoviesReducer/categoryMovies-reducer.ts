import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {moviesApi} from "../../api/api";
import {MovieType} from "../../api/apiTypes";


export const fetchMovies = createAsyncThunk<{ movies: MovieType[] }, CategoriesMoviesType, ThunkError>('categoryMovies/fetchMovies', async (category, thunkAPI) => {
    try {
        switch (category) {
            case "action": {
                const resAction = await moviesApi.fetchActionMovies()
                return {movies: resAction.data.results}
            }
            case "comedy": {
                const resComedy = await moviesApi.fetchComedy()
                return {movies: resComedy.data.results}
            }
            case "documentary": {
                const resDocumentaries = await moviesApi.fetchDocumentaries()
                return {movies: resDocumentaries.data.results}
            }
            case "drama": {
                const resDrama = await moviesApi.fetchDrama()
                return {movies: resDrama.data.results}
            }
            case "horror": {
                const resHorror = await moviesApi.fetchHorror()
                return {movies: resHorror.data.results}
            }
            default: throw new Error("Can't get data");
        }
    } catch (error) {
        return thunkAPI.rejectWithValue({errors: [error.message]})
    }
})

//export const asyncMoviesActions = {fetchTrending}

export const slice = createSlice({
    name: 'categoryMovies',
    initialState: {} as CategoryMoviesStateType,
    reducers: {
        setCategory (state, action: PayloadAction<CategoriesMoviesType>) {
            return {
                ...state,
                category: action.payload
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            return {
                ...state,
                movies: action.payload.movies
            }
        })
    }
})

export const {setCategory} = slice.actions

export type CategoriesMoviesType = 'action' | 'comedy' | 'horror' | 'drama' | 'documentary'

export type CategoryMoviesStateType = {
    movies: MovieType[]
    category: CategoriesMoviesType
}

export type ThunkError = {
    rejectValue:
        {
            errors: Array<string>
        }
}

