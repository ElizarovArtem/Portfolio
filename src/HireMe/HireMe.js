import React from "react";
import s from './HireMe.module.css'
import styleContainer from './../common/styles/Container.module.css'


export function HireMe() {
    return(
        <div className={s.hireMe}>
            <div className={`${styleContainer.container} ${s.hireMeContainer}`}>
                <h3>I am considering opportunity for remote work</h3>
                <button>Hire Me</button>
            </div>
        </div>
    )
}