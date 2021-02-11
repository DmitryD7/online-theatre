import React from "react";
import s from "./Movie.module.scss"


export const Movie = (props: MoviePropsType) => {

    return <div className={s.movie}>
        <img src={props.imgLink} alt={props.movieTitle} className={s.movie_img}/>
    </div>
}

type MoviePropsType = {
    imgLink: string
    movieTitle: string
}