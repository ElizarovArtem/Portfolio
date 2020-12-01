import React from "react";
import s from './Work.module.css';

export function Work(props) {
    return(
        <div className={s.workItems}>
            <div className={s.picture}>
                <a href="/" className={s.look}>Look</a>
            </div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}