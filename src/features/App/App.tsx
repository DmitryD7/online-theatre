import React from 'react';
import s from './App.module.scss'
import {MoviesRows} from "../MoviesRow/MoviesRows";
import {Header} from "../Header/Header";

export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original/'

function App() {

    return <div className={s.App}>
        <Header/>
        <MoviesRows/>
    </div>
}

export default App;
