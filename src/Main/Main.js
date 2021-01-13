import React from "react";
import s from './Main.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import bgPalms from "../assets/palms.jpg"
import avatar from "../assets/avatar.jpg"

export function Main() {
    const flexStyle = {
        flexDirection: "column"
    }
    const avatarPick = {
        backgroundImage: 'url(' + avatar + ')',
    };
    return(
        <div className={s.main} >
            <din className={styleContainer.container} style={flexStyle}>
                <div className={s.photo} style={avatarPick}></div>
                <div className={s.text}>
                    <h1>Artem <span>Elizarov</span></h1>
                    <p>Frontend Developer</p>
                </div>
            </din>
        </div>
    )
}