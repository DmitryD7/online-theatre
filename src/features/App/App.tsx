import React, {useEffect} from 'react';
import './App.css';
import {fetchTrending} from "../MoviesRow/moviesReducer/movies-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../utils/types";


function App() {
    const movies = useSelector((state: AppRootStateType) => state.movies)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTrending())
    }, [])
    return <div>
        {movies.map(m => <p>{m.title}</p>)}
    </div>
}

export default App;
