import React, {useEffect} from "react";
import s from "./MoviesRow.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../utils/types";
import {fetchTrending} from "./moviesReducer/movies-reducer";
import {Movie} from "./Movie/Movie";
import {BASE_IMG_URL} from "../App/App";

export const MoviesRows = () => {
    const movies = useSelector((state: AppRootStateType) => state.movies)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTrending())
    }, [])

    return <div className={s.moviesRows}>
        <h2>Trending</h2>
        {<div className={s.movieRow}>
            {movies.trending?.map(movie => <Movie key={movie.id} imgLink={`${BASE_IMG_URL}${movie.poster_path}`}
                                                   movieTitle={movie.title ? movie.title : movie.name}/>)}
        </div>}
    </div>
}