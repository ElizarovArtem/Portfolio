import React from "react";
import s from './HireMe.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import {Button} from "../common/components/button/Button";


export function HireMe() {
    return(
        <div className={s.hireMe}>
            <div className={`${styleContainer.container} ${s.hireMeContainer}`}>
                <h3>I am considering opportunity for <span>remote</span> work</h3>
                <Button title={"Hire me"}/>
            </div>
        </div>
    )
}