import React from "react";
import s from './Works.module.css';
import {Work} from "./Work/Work";
import styleContainer from './../common/styles/Container.module.css'

export function Works() {
    return (
        <div className={s.works}>
            <div className={`${styleContainer.container} ${s.worksContainer}`}>
                <h3 className={s.logo}>Projects</h3>
                <div className={s.worksItems}>
                    <Work title={"Project1"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
                    <Work title={"Project2"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
                </div>
            </div>
        </div>
    )
}