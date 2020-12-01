import React from "react";
import s from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";

export function Skills() {
    return(
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2>Skills</h2>
                <div className={s.skills}>
                    <Skill title={"JS"} description = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"}/>
                    <Skill title={"CSS"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
                    <Skill title={"React"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et vafancullo diamo batronte"}/>
                </div>
            </div>
        </div>
    )
}