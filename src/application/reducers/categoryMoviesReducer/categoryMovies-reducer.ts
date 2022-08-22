import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {moviesApi} from "../../../api/api";
import {CategoriesMoviesType, MovieType, ThunkError} from "../../../models/models";
import {appActions} from "../../actions/appCommonActions";

const {setAppStatus} = appActions;

export const fetchMovies = createAsyncThunk<{ movies: MovieType[] }, CategoriesMoviesType, ThunkError>('categoryMovies/fetchMovies', async (category, thunkAPI) => {
    setAppStatus({status: "loading"});
    try {
        switch (category) {
            case "action": {
                const resAction = await moviesApi.fetchActionMovies();
                setAppStatus({status: "succeeded"});
                return {movies: resAction.data.results};
            }
            case "comedy": {
                const resComedy = await moviesApi.fetchComedy();
                setAppStatus({status: "succeeded"});
                return {movies: resComedy.data.results};
            }
            case "documentary": {
                const resDocumentaries = await moviesApi.fetchDocumentaries();
                setAppStatus({status: "succeeded"});
                return {movies: resDocumentaries.data.results};
            }
            case "drama": {
                const resDrama = await moviesApi.fetchDrama();
                setAppStatus({status: "succeeded"});
                return {movies: resDrama.data.results};
            }
            case "horror": {
                const resHorror = await moviesApi.fetchHorror();
                setAppStatus({status: "succeeded"});
                return {movies: resHorror.data.results};
            }
            default: {
                setAppStatus({status: "failed"});
                throw new Error("Can't get data");
            }
        }
    } catch (error) {
        setAppStatus({status: "failed"});
        return thunkAPI.rejectWithValue({errors: [error.message]})
    }
})

export const slice = createSlice({
    name: 'categoryMovies',
    initialState: {} as CategoryMoviesStateType,
    reducers: {
        setCategory(state, action: PayloadAction<CategoriesMoviesType>) {
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

export type CategoryMoviesStateType = {
    movies: MovieType[]
    category: CategoriesMoviesType
}
