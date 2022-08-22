import React from "react";
import {CircularProgress} from "@material-ui/core";
import s from "./Loader.module.scss";

const Loader = () => {
    return (
        <div className={s.Loader}>
            <CircularProgress size='5rem' variant='indeterminate' disableShrink={true}/>
        </div>
    );
};

export default Loader;