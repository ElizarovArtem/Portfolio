import React from "react";
import s from './Header.module.css';
import {Navigation} from "../Nav/Navigation";

export function Header() {
    return(
        <div className={s.header}>
            <Navigation/>
        </div>
    )
}