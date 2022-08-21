import React, {useCallback, useEffect, useState} from "react";
import s from "./Header.module.scss"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../utils/types";
import {BASE_IMG_URL} from "../App/App";
import {MovieType} from "../../api/apiTypes";
import YouTube from "react-youtube";
import {handleShowTrailerClick, opts} from "../../utils/showTrailer";
import {CategoriesMoviesType} from "../../application/categoryMoviesReducer/categoryMovies-reducer";
import Button from "@material-ui/core/Button";

export const truncate = (str: string, n: number) => str?.length > n ? str.substr(0, n-1) + '...' : str

export const Header = () => {
    const [index, setIndex] = useState(0)
    const movie = useSelector<AppRootStateType, MovieType>(state => state.movies.trending && state.movies.trending[index])
    const moviesByCategory = useSelector<AppRootStateType, MovieType>(state => state.categoryMovies.movies && state.categoryMovies.movies[index])
    const category = useSelector<AppRootStateType, CategoriesMoviesType>(state => state.categoryMovies.category)

    //EDIT
    useEffect(() => {
        setIndex(Math.floor( Math.random() * 20 - 1))
    }, [category, movie])

    const [trailerUrl, setTrailerUrl] = useState<string | null>('')

    const showTrailer = useCallback(() => handleShowTrailerClick({
        movie,
        trailerUrl,
        setTrailerUrl
    }), [movie, trailerUrl])

    return <header className={s.banner}
    style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${BASE_IMG_URL}${movie?.backdrop_path || moviesByCategory?.backdrop_path})`,
        backgroundPosition: 'center center'
    }}
    >
        <div className={s.banner_content}>
            <h1 className={s.banner_title}>{movie?.title || movie?.name || moviesByCategory?.title || moviesByCategory?.name}</h1>
            <div className={s.banner_buttons}>
                <button className={s.banner_button} onClick={showTrailer}>Trailer</button>
                {/*<button className={s.banner_button}>My List</button>*/}
            </div>
            <div className={s.banner_description}>
                {truncate(movie?.overview || moviesByCategory?.overview, 500)}
            </div>
        </div>
        <div className={s.banner_fadeBottom}></div>
        {trailerUrl && <div className={s.banner_trailer}>
            <YouTube videoId={trailerUrl} opts={opts}/>
            <Button onClick={() => setTrailerUrl('')} size="medium" color="primary" variant={"outlined"}>close trailer</Button>
        </div>}
        {/*{trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}*/}
    </header>
}