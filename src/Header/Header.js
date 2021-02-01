import React from "react";
import s from './Header.module.css';
import {Navigation} from "../Nav/Navigation";
import {BurgerNav} from "../Nav/BurgerNav/BurgerNav";

export function Header() {
    return(
        <div className={s.header}>
            <Navigation/>
            <BurgerNav/>
        </div>
    )
}