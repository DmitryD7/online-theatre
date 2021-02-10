import React, {useEffect, useState} from "react";
import s from "./Nav.module.scss"
import theatreLogo from "../../assets/images/movieTheatre.png"
import userAvatar from "../../assets/images/avatar.png"

export const Nav = () => {
    const [isSeen, setIsSeen] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => window.scrollY > 100 ? setIsSeen(true) : setIsSeen(false))
        return () => window.removeEventListener('scroll', () => window.scrollY > 100 ? setIsSeen(true) : setIsSeen(false))
    }, [])

    return <div className={`${s.nav} ${isSeen ? s.nav_bg_black : ''}`}>
        <img src={theatreLogo} alt="logo" className={s.nav_logo}/>
        <img src={userAvatar} alt="avatar" className={s.nav_avatar}/>
    </div>
}