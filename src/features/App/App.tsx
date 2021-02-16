import React from 'react';
import s from './App.module.scss'
import {Header} from "../Header/Header";
import {Nav} from "../Nav/Nav";
import {Movies} from "../Movies/Movies";
import {MoviesByCategory} from "../MoviesByCategory/MoviesByCategory";
import {Route, Switch} from "react-router-dom"

export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original/'

function App() {

    return <div className={s.App}>
        <Nav/>
        <Header/>
        <Switch>
            <Route path={'/home'} render={() => <Movies/>}/>
            <Route path={'/category'} render={() => <MoviesByCategory/>}/>
        </Switch>
    </div>
}

export default App;
