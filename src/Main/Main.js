import React from "react";
import s from './Main.module.css'
import styleContainer from './../common/styles/Container.module.css'

export function Main() {
    return(
        <div className={s.main}>
            <din className={styleContainer.container}>
                <div className={s.text}>
                    <span>Hello, madam</span>
                    <h1>I am Artem Elizarov</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}>

                </div>
            </din>
        </div>
    )
}