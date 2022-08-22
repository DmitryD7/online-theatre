import React, {useState} from "react";
import s from "./MovieRow.module.scss"
import {Movie} from "./Movie/Movie";
import {MovieType} from "../../../api/apiTypes";
import {handleShowTrailerClick} from "../../../utils/showTrailer";
import {MovieTrailer} from "../../../components/MovieTrailer/MovieTrailer";

export const MoviesRow = (props: MovieRowsPropsType) => {
    const [trailerUrl, setTrailerUrl] = useState<string | null>('')

    const ShowTrailerClick = (movie: MovieType) => {
        handleShowTrailerClick({movie, trailerUrl, setTrailerUrl})
    }

    return <div className={s.moviesRow}>
        <h2 className={s.movieRow_rowTitle}>{props.rowTitle}</h2>
        {<div className={s.movieRow_content}>
            {props.movies?.map(movie => <Movie key={movie.id} handleClick={ShowTrailerClick} movie={movie}/>)}
        </div>}
        {trailerUrl && <MovieTrailer trailerUrl={trailerUrl} setTrailerUrl={setTrailerUrl}/>}
    </div>
}

type MovieRowsPropsType = {
    movies: Array<MovieType>
    rowTitle: string
}