import React, {useEffect, useState} from "react";
import s from "./Nav.module.scss"
import theatreLogo from "../../assets/images/movieTheatre.png"
import userAvatar from "../../assets/images/avatar.png"
import {SelectComponent} from "../Select/Select";
import {CategoriesMoviesType, setCategory} from "../../application/categoryMoviesReducer/categoryMovies-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../utils/types";
import {NavLink} from "react-router-dom";

export const Nav = () => {
    const [isSeen, setIsSeen] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        window.addEventListener('scroll', () => window.scrollY > 100 ? setIsSeen(true) : setIsSeen(false))
        return () => window.removeEventListener('scroll', () => window.scrollY > 100 ? setIsSeen(true) : setIsSeen(false))
    }, [])

    const currentCategory = useSelector<AppRootStateType, CategoriesMoviesType>(state => state.categoryMovies.category)
    const [selectedValue, setSelectedValue] = useState<CategoriesMoviesType | ''>(currentCategory)

    const values: CategoriesMoviesType[] = ["action", "comedy", "documentary", "drama", "horror"]

    const setNewCategory = (value: CategoriesMoviesType) => {
        dispatch(setCategory(value))
        setSelectedValue(value)
    }

    const unsetCategory = () => {
       setSelectedValue('')
    }

    return <div className={`${s.nav} ${isSeen ? s.nav_bg_black : ''}`}>
        <NavLink to={'/'}><img src={theatreLogo} alt="logo" className={s.nav_logo} onClick={unsetCategory}/></NavLink>
        <img src={userAvatar} alt="avatar" className={s.nav_avatar}/>
        <div className={s.nav_select}>
            <SelectComponent values={values} currentValue={selectedValue} onSelectHandler={setNewCategory}/>
        </div>
    </div>
}