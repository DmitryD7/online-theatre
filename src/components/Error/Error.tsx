import React from "react";
import s from "./Error.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatchType, AppRootStateType} from "../../models/models";
import {appActions} from "../../application/actions/appCommonActions";
import Alert from '@material-ui/lab/Alert';
import {Snackbar} from "@material-ui/core";

const Error = () => {
    const error = useSelector((state: AppRootStateType) => state.app.error);
    const {setAppError} = appActions;
    const dispatch = useDispatch<AppDispatchType>();

    const onCloseHandler = () => {
        dispatch(setAppError({error: null}));
    };

    return (
        <div className={s.Error}>
            <Snackbar open={!!error} autoHideDuration={3000} onClose={onCloseHandler}>
                <Alert severity="error" onClose={onCloseHandler}>
                    {error}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Error;