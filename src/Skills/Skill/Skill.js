import React from "react";
import s from './Skill.module.css'
import styleContainer from './../../common/styles/Container.module.css'

export function Skill(props) {
    return(
        <div className={s.skillsBlock}>
            <div className={s.icon}>ICON</div>
            <h3>{props.title}</h3>
            <p className={s.description}>{props.description}</p>
        </div>
    )
}