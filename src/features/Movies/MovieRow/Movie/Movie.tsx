import React from "react";
import s from "./Movie.module.scss"
import {BASE_IMG_URL} from "../../../App/App";
import {MovieType} from "../../../../models/models";


export const Movie = (props: MoviePropsType) => {
    const {movie, handleClick} = props;

    const clickHandler = () => {
        handleClick(movie);
    };

    return (
        <div className={s.movie}>
            <img
                src={`${BASE_IMG_URL}${props.movie?.poster_path}`}
                alt={movie?.title || movie?.name}
                className={s.movie_img} onClick={clickHandler}
            />
        </div>
    );
};

type MoviePropsType = {
    handleClick: (movie: MovieType) => void,
    movie: MovieType,
};