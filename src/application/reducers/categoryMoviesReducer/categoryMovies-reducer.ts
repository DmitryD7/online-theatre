import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {moviesApi} from "../../../api/api";
import {CategoriesMoviesType, MovieType, ThunkError} from "../../../models/models";
import {appActions} from "../../actions/appCommonActions";

const {setAppStatus, setAppError} = appActions;

export const fetchMovies = createAsyncThunk<{ movies: MovieType[] }, CategoriesMoviesType, ThunkError>('categoryMovies/fetchMovies', async (category, thunkAPI) => {
    thunkAPI.dispatch(setAppStatus({status: "loading"}))
    try {
        switch (category) {
            case "action": {
                const resAction = await moviesApi.fetchActionMovies();
                thunkAPI.dispatch(setAppStatus({status: "succeeded"}));
                return {movies: resAction.data.results};
            }
            case "comedy": {
                const resComedy = await moviesApi.fetchComedy();
                thunkAPI.dispatch(setAppStatus({status: "succeeded"}));
                return {movies: resComedy.data.results};
            }
            case "documentary": {
                const resDocumentaries = await moviesApi.fetchDocumentaries();
                thunkAPI.dispatch(setAppStatus({status: "succeeded"}));
                return {movies: resDocumentaries.data.results};
            }
            case "drama": {
                const resDrama = await moviesApi.fetchDrama();
                thunkAPI.dispatch(setAppStatus({status: "succeeded"}));
                return {movies: resDrama.data.results};
            }
            case "horror": {
                const resHorror = await moviesApi.fetchHorror();
                thunkAPI.dispatch(setAppStatus({status: "succeeded"}));
                return {movies: resHorror.data.results};
            }
            default: {
                thunkAPI.dispatch(setAppStatus({status: "failed"}));
                thunkAPI.dispatch(setAppError({error: 'Some error occurred'}))
                throw new Error("Can't get data");
            }
        }
    } catch (error) {
        console.log(error)
        thunkAPI.dispatch(setAppStatus({status: "failed"}));
        thunkAPI.dispatch(setAppError({error: error.message}));
        return thunkAPI.rejectWithValue({errors: [error.message]});
    }
});

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
