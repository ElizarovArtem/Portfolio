import s from "../../../common/components/button/Button.module.scss";
import React from "react";


export function Button(props) {
    return <button className={s.button}>{props.title}</button>
}