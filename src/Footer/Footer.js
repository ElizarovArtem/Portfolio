import React from "react";
import s from './Footer.module.css'
import styleContainer from './../common/styles/Container.module.css'


export function Footer() {
    return(
        <div className={s.hireMe}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h3>Elizarov Artem</h3>
                <div className={s.contacts}>
                    <div className={s.something}></div>
                    <div className={s.something}></div>
                    <div className={s.something}></div>
                    <div className={s.something}></div>
                </div>
                <span>All rights reserved</span>
            </div>
        </div>
    )
}