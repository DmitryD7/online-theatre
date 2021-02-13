import React, {useCallback, useEffect, useState} from "react";
import s from "./Nav.module.scss"
import theatreLogo from "../../assets/images/movieTheatre.png"
import userAvatar from "../../assets/images/avatar.png"
import {SelectComponent} from "../../components/Select/Select";
import {CategoriesMoviesType} from "../MoviesByCategory/categoryMoviesReducer/categoryMovies-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../utils/types";
import {setCategory} from "../MoviesByCategory/categoryMoviesReducer/categoryMovies-reducer"

export const Nav = () => {
    const [isSeen, setIsSeen] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        window.addEventListener('scroll', () => window.scrollY > 100 ? setIsSeen(true) : setIsSeen(false))
        return () => window.removeEventListener('scroll', () => window.scrollY > 100 ? setIsSeen(true) : setIsSeen(false))
    }, [])

    const currentCategory = useSelector<AppRootStateType, CategoriesMoviesType>(state => state.categoryMovies.category)

    const values: CategoriesMoviesType[] = ["action", "comedy", "documentary", "drama", "horror"]

    const setNewCategory = (value: CategoriesMoviesType) => {
        //dispatch(setCategory(value))
        console.log('CURRENT CATEGORY INSIDE NAV: ' + currentCategory)
    }

    return <div className={`${s.nav} ${isSeen ? s.nav_bg_black : ''}`}>
        <img src={theatreLogo} alt="logo" className={s.nav_logo}/>
        <img src={userAvatar} alt="avatar" className={s.nav_avatar}/>
        <div className={s.nav_select}>
            <SelectComponent values={values} currentValue={currentCategory} onSelectHandler={setNewCategory}/>
        </div>
    </div>
}