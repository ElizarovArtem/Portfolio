import React from "react";
import s from './Navigation.module.css'

export function Navigation() {
    return(
        <div className={`${s.navContainer}`}>
            <div className={s.nav}>
                <a href="/">Main</a>
                <a href="/">Skills</a>
                <a href="/">Projects</a>
                <a href="/">Contacts</a>
            </div>
        </div>
    )
}