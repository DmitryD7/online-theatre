import {CircularProgress} from "@material-ui/core";
import React from "react";

const Loader = () => {
    return (
        <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    );
};

export default Loader;