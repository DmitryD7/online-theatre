import React from 'react';
import s from "./MovieTrailer.module.scss";
import YouTube from "react-youtube";
import {opts} from "../../utils/showTrailer";
import Button from "@material-ui/core/Button";

export const MovieTrailer = (props: MovieTrailerPropsType) => {
    const {trailerUrl, setTrailerUrl} = props;
    const onClose = () => setTrailerUrl('');

    return (
        <div className={s.overlay}>
            <div className={s.overlay__background} onClick={onClose}/>
            <div className={s.overlay__container}>
                <div className={s.YoutubeTrailer}>
                    <YouTube videoId={trailerUrl} opts={opts}/>
                </div>
                <div className={s.overlay__controls}>
                    <Button
                        onClick={onClose}
                        size="medium"
                        color="primary"
                        variant={"outlined"}
                    >close trailer</Button>
                </div>
            </div>
        </div>
    );
};

type MovieTrailerPropsType = {
    trailerUrl: string,
    setTrailerUrl: (arg: string) => void,
}