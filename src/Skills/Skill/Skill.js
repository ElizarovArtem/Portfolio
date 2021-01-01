import React from "react";
import s from './Skill.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Skill(props) {
    return(
        <div className={s.skillsBlock}>
            <div className={s.icon}>
                <FontAwesomeIcon icon={props.style} style={{width: "50px", height: "50px", color: "#4169e1"}}/>
            </div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}