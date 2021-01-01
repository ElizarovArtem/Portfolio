import React from "react";
import s from './Main.module.css'
import styleContainer from './../common/styles/Container.module.css'
import bgPalms from "../assets/palms.jpg"

export function Main() {
    const divStyle = {
        backgroundImage: 'url(' + bgPalms + ')',
    };
    const flexStyle = {
        flexDirection: "column"
    }

    return(
        <div className={s.main} style={divStyle}>
            <din className={styleContainer.container} style={flexStyle}>
                <div className={s.photo}>

                </div>
                <div className={s.text}>
                    <h1>Artem Elizarov</h1>
                    <p>Frontend Developer</p>
                </div>
            </din>
        </div>
    )
}