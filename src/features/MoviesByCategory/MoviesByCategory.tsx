import React, {useEffect} from "react";
import s from "./MoviesByCategory.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../utils/types";
import {CategoriesMoviesType, fetchMovies} from "./categoryMoviesReducer/categoryMovies-reducer";
import {MovieType} from "../../api/apiTypes";
import {MovieCard} from "./MovieCard/MovieCard";

export const MoviesByCategory = () => {
    const dispatch = useDispatch()
    const category = useSelector<AppRootStateType, CategoriesMoviesType>(state => state.categoryMovies.category)
    const moviesByCategory = useSelector<AppRootStateType, MovieType[]>(state => state.categoryMovies.movies)

    useEffect(() => {
        dispatch(fetchMovies("drama"))
    }, [])

    return <div className={s.moviesByCategory}>
        <h2>ACTION</h2>
        <MovieCard movie={moviesByCategory && moviesByCategory[0]}/>
    </div>
}