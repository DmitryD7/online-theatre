import React, {useEffect} from "react";
import s from "./Movies.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../utils/types";
import {fetchTrending} from "../../application/reducers/moviesReducer/movies-reducer";
import {MoviesRow} from "./MovieRow/MoviesRows";
import {Container} from "@material-ui/core";
import Loader from "../../components/Loader/Loader";

export const Movies = () => {
    const movies = useSelector((state: AppRootStateType) => state.movies);
    const appStatus = useSelector((state: AppRootStateType) => state.app.status);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTrending())
    }, [dispatch]);

    if (appStatus === 'loading') {
        return <Loader/>;
    }

    return (
        <div className={s.movies}>
            <Container disableGutters={true} maxWidth={'lg'} className={s.movie_container}>
                <MoviesRow movies={movies.trending} rowTitle={'Trending'}/>
                <MoviesRow movies={movies.topRated} rowTitle={'Top Rated'}/>
                <MoviesRow movies={movies.popular} rowTitle={'Popular'}/>
            </Container>
        </div>
    );
};