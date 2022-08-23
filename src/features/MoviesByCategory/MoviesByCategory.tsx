import React, {useCallback, useEffect} from "react";
import s from "./MoviesByCategory.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {MovieCard} from "./MovieCard/MovieCard";
import {AppDispatchType, AppRootStateType, CategoriesMoviesType, MovieType} from "../../models/models";
import {fetchMovies} from "../../application/reducers/categoryMoviesReducer/categoryMovies-reducer";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import {appActions} from "../../application/actions/appCommonActions";

export const MoviesByCategory = () => {
    const appStatus = useSelector((state: AppRootStateType) => state.app.status);
    const category = useSelector<AppRootStateType, CategoriesMoviesType>(state => state.categoryMovies.category);
    const moviesByCategory = useSelector<AppRootStateType, MovieType[]>(state => state.categoryMovies.movies);
    const appError = useSelector((state: AppRootStateType) => state.app.error);
    const dispatch = useDispatch<AppDispatchType>();
    const {setAppError} = appActions;

    useEffect(() => {
        dispatch(fetchMovies(category))
    }, [category, dispatch]);

    const handleError = useCallback((message: string) => {
        dispatch(setAppError({error: message}));
    }, [dispatch, setAppError]);

    if (appStatus === 'loading') {
        return <Loader/>
    }

    return (
        <div className={s.moviesByCategory}>
            <h2 className={s.moviesByCategory_title}>{category?.toUpperCase()}</h2>
            <div className={s.moviesByCategory_content}>
                {moviesByCategory?.map(m => <MovieCard key={m.id} movie={m} handleError={handleError}/>)}
                {appError && <Error/>}
            </div>
        </div>
    );
}