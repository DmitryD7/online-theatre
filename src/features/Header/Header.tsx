import React from "react";
import s from "./Header.module.scss"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../utils/types";
import {BASE_IMG_URL} from "../App/App";
import {MovieType} from "../../api/apiTypes";

const truncate = (str: string, n: number) => str?.length > n ? str.substr(0, n-1) + '...' : str

export const Header = () => {
    const movie = useSelector<AppRootStateType, MovieType>(state => state.movies.trending && state.movies.trending[Math.floor( Math.random() * state.movies.trending.length - 1)])

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
                <button className={s.banner_button}>Play</button>
                <button className={s.banner_button}>My List</button>
            </div>
            <div className={s.banner_description}>
                {truncate(movie?.overview, 300)}
            </div>
        </div>
        <div className={s.banner_fadeBottom}></div>
    </header>
}