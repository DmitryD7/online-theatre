import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesApi} from "../../../api/api";
import {MovieType, ThunkError} from "../../../models/models";
import {appActions} from "../../actions/appCommonActions";

const {setAppStatus, setAppError} = appActions;

export const fetchTrending = createAsyncThunk<MoviesStateType, undefined, ThunkError>('movies/fetchMovies', async (param, thunkAPI) => {
    thunkAPI.dispatch(setAppStatus({status: "loading"}));
    try {
        const resTrending = await moviesApi.fetchTrending();
        const resPopular = await moviesApi.fetchPopular();
        const resTopRated = await moviesApi.fetchTopRated();
        thunkAPI.dispatch(setAppStatus({status: "succeeded"}));
        return {
            trending: resTrending.data.results,
            topRated: resTopRated.data.results,
            popular: resPopular.data.results
        }
    } catch (error) {
        thunkAPI.dispatch(setAppStatus({status: "failed"}));
        thunkAPI.dispatch(setAppError({error: error.message}));
        return thunkAPI.rejectWithValue({errors: [error.message]});
    }
})

export const slice = createSlice({
    name: 'movies',
    initialState: {} as MoviesStateType,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchTrending.fulfilled, (state, action) => {
            return action.payload
        });
    },
});

type MoviesStateType = {
    trending: MovieType[],
    topRated: MovieType[],
    popular: MovieType[],
};
