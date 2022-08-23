import React, {useState} from "react";
import s from "./MovieRow.module.scss"
import {Movie} from "./Movie/Movie";
import {handleShowTrailerClick} from "../../../utils/showTrailer";
import {MovieTrailer} from "../../../components/MovieTrailer/MovieTrailer";
import {MovieType} from "../../../models/models";

export const MoviesRow = (props: MovieRowsPropsType) => {
    const {movies, rowTitle, handleError} = props;
    const [trailerUrl, setTrailerUrl] = useState<string | null>('');

    const showTrailerClick = async (movie: MovieType) => {
        try {
            await handleShowTrailerClick({movie, trailerUrl, setTrailerUrl});
        } catch (e) {
            handleError(e.message);
        }
    };

    return (
        <div className={s.moviesRow}>
            <h2 className={s.movieRow_rowTitle}>{rowTitle}</h2>
            {<div className={s.movieRow_content}>
                {movies?.map(movie => <Movie key={movie.id} handleClick={showTrailerClick} movie={movie}/>)}
            </div>}
            {trailerUrl && <MovieTrailer trailerUrl={trailerUrl} setTrailerUrl={setTrailerUrl}/>}
        </div>
    );
};

type MovieRowsPropsType = {
    movies: Array<MovieType>,
    rowTitle: string,
    handleError: (message: string) => void,
};