import React from "react";
import s from './Skill.module.css'


export function Skill(props) {
    return(
        <div className={s.skillsBlock}>
            <div className={s.icon}></div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}