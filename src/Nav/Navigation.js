import React from "react";
import s from './Navigation.module.css'
import styleContainer from './../common/styles/Container.module.css'

export function Navigation() {
    return(
        <div className={`${s.navContainer}`}>
            <div className={s.nav}>
                <a href="/">Главная</a>
                <a href="/">Скиллы</a>
                <a href="/">Проекты</a>
                <a href="/">Контакты</a>
                <a href="/"></a>
            </div>
        </div>
    )
}