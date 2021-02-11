import React, {useCallback, useEffect, useState} from "react";
import s from "./Header.module.scss"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../utils/types";
import {BASE_IMG_URL} from "../App/App";
import {MovieType} from "../../api/apiTypes";
import YouTube from "react-youtube";
import {handleShowTrailerClick, opts} from "../../utils/showTrailer";

const truncate = (str: string, n: number) => str?.length > n ? str.substr(0, n-1) + '...' : str

export const Header = () => {
    const [index, setIndex] = useState(0)
    const movie = useSelector<AppRootStateType, MovieType>(state => state.movies.trending && state.movies.trending[index])

    //EDIT
    useEffect(() => {
        setIndex(Math.floor( Math.random() * 20 - 1))
    }, [])

    const [trailerUrl, setTrailerUrl] = useState<string | null>('')

    const showTrailer = useCallback(() => handleShowTrailerClick({
        movie,
        trailerUrl,
        setTrailerUrl
    }), [movie, trailerUrl])

    return <header className={s.banner}
    style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${BASE_IMG_URL}${movie?.backdrop_path})`,
        backgroundPosition: 'center center'
    }}
    >
        <div className={s.banner_content}>
            <h1 className={s.banner_title}>{movie?.title || movie?.name}</h1>
            <div className={s.banner_buttons}>
                <button className={s.banner_button} onClick={showTrailer}>Play</button>
                <button className={s.banner_button}>My List</button>
            </div>
            <div className={s.banner_description}>
                {truncate(movie?.overview, 300)}
            </div>
        </div>
        <div className={s.banner_fadeBottom}></div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </header>
}