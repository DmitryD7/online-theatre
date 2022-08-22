import {createSlice} from "@reduxjs/toolkit";
import {RequestStatusType} from "../../../models/models";
import {appActions} from "../../actions/appCommonActions";

const {setAppStatus, setAppError} = appActions;

const initialState: AppStateType = {
    status: "idle",
    error: null
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(setAppStatus, (state, action) => {
            state.status = action.payload.status;
        });
        builder.addCase(setAppError, (state, action) => {
            state.error = action.payload.error;
        });
    },
});

export default appSlice.reducer;

type AppStateType = {
    status: RequestStatusType,
    error: string | null,
}