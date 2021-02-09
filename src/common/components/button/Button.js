import s from "../../../common/components/button/Button.module.scss";
import React from "react";


export function Button(props) {
    return <div>
        <button disabled={props.disabled} className={`${s.button} ${props.disabled ? s.disabled : ""}`}>{props.title}</button>
    </div>
}