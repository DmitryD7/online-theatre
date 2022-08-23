import React, {useCallback, useEffect} from "react";
import s from "./Movies.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {fetchTrending} from "../../application/reducers/moviesReducer/movies-reducer";
import {MoviesRow} from "./MovieRow/MoviesRow";
import {Container} from "@material-ui/core";
import Loader from "../../components/Loader/Loader";
import {AppDispatchType, AppRootStateType} from "../../models/models";
import Error from "../../components/Error/Error";
import {appActions} from "../../application/actions/appCommonActions";

export const Movies = () => {
    const movies = useSelector((state: AppRootStateType) => state.movies);
    const appStatus = useSelector((state: AppRootStateType) => state.app.status);
    const appError = useSelector((state: AppRootStateType) => state.app.error);
    const dispatch = useDispatch<AppDispatchType>();
    const {setAppError} = appActions;

    useEffect(() => {
        dispatch(fetchTrending())
    }, [dispatch]);

    const handleError = useCallback((message: string) => {
        dispatch(setAppError({error: message}));
    }, [dispatch, setAppError]);

    if (appStatus === 'loading') {
        return <Loader/>;
    }

    return (
        <div className={s.movies}>
            <Container disableGutters={true} maxWidth={'lg'} className={s.movie_container}>
                <MoviesRow movies={movies.trending} rowTitle={'Trending'} handleError={handleError}/>
                <MoviesRow movies={movies.topRated} rowTitle={'Top Rated'} handleError={handleError}/>
                <MoviesRow movies={movies.popular} rowTitle={'Popular'} handleError={handleError}/>
                {appError && <Error/>}
            </Container>
        </div>
    );
};