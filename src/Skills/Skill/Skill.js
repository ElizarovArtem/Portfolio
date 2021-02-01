import React from "react";
import s from './Skill.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slide from 'react-reveal/Fade';

export function Skill(props) {
    return(
        <>
            <Slide bottom>
            <div className={s.skillsBlock}>
                <div className={s.icon}>
                    <FontAwesomeIcon icon={props.style} style={{width: "50px", height: "50px", color: "#4169e1"}}/>
                </div>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            </Slide>
        </>
    )
}