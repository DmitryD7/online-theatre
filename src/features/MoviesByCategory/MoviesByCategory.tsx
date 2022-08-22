import React, {useEffect} from "react";
import s from "./MoviesByCategory.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../utils/types";
import {MovieCard} from "./MovieCard/MovieCard";
import {CategoriesMoviesType, MovieType} from "../../models/models";
import {fetchMovies} from "../../application/reducers/categoryMoviesReducer/categoryMovies-reducer";

export const MoviesByCategory = () => {
    const dispatch = useDispatch()
    const category = useSelector<AppRootStateType, CategoriesMoviesType>(state => state.categoryMovies.category)
    const moviesByCategory = useSelector<AppRootStateType, MovieType[]>(state => state.categoryMovies.movies)

    useEffect(() => {
        dispatch(fetchMovies(category))
    }, [category, dispatch])

    return <div className={s.moviesByCategory}>
        <h2 className={s.moviesByCategory_title}>{category?.toUpperCase()}</h2>
        <div className={s.moviesByCategory_content}>
            {moviesByCategory?.map(m => <MovieCard key={m.id} movie={m}/>)}
        </div>
    </div>
}