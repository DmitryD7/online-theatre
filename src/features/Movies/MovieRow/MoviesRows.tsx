import React, {useState} from "react";
import s from "./MovieRow.module.scss"
import {Movie} from "./Movie/Movie";
import {BASE_IMG_URL} from "../../App/App";
import {MovieType} from "../../../api/apiTypes";
import YouTube, {Options} from "react-youtube";
// @ts-ignore
import movieTrailer from 'movie-trailer'

export const MoviesRow = (props: MovieRowsPropsType) => {


    return <div className={s.moviesRow}>
        <h2 className={s.movieRow_rowTitle}>{props.rowTitle}</h2>
        {<div className={s.movieRow_content}>
            {props.movies?.map(movie => <Movie key={movie.id} imgLink={`${BASE_IMG_URL}${movie.poster_path}`}
                                                   movieTitle={movie.title || movie.name}/>)}
        </div>}
        {/*{trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}*/}
    </div>
}

type MovieRowsPropsType = {
    movies: Array<MovieType>
    rowTitle: string
}