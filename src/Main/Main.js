import React from "react";
import s from './Main.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import avatar from "../assets/avatar.jpg"
import Particles from "react-particles-js";

const particlesOpt = {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        color: {
            value: '#fff'
        },
        size: {
            value: 8,
            random: true,
            anim: {
                enable: true,
                speed: 3
            }
        },
        line_linked: {
            enable: true,
            color: "#002245",
        },
    }
}

export function Main() {
    const flexStyle = {
        flexDirection: "column"
    }
    const avatarPick = {
        backgroundImage: 'url(' + avatar + ')'
    };
    return(
        <div className={s.main}>
            <Particles className={s.particles} params={particlesOpt}/>
            <din className={styleContainer.container} style={flexStyle}>
                <div className={s.photo} style={avatarPick}></div>
                <div className={s.text}>
                    <h1>Artem <span>Elizarov</span></h1>
                    <p>Frontend Developer</p>
                </div>
            </din>
        </div>
    )
}