import React from "react";
import s from "./Movie.module.scss"
import {MovieType} from "../../../../api/apiTypes";
import {BASE_IMG_URL} from "../../../App/App";


export const Movie = (props: MoviePropsType) => {

    const clickHandler = () => {
        props.handleClick(props.movie)
    }

    return <div className={s.movie}>
        <img src={`${BASE_IMG_URL}${props.movie?.poster_path}`} alt={props.movie?.title || props.movie?.name}
             className={s.movie_img} onClick={clickHandler}/>
    </div>
}

type MoviePropsType = {
    handleClick: (movie: any) => void
    movie: MovieType
}