import s from "../../../common/components/title/Title.module.css";
import React from "react";

export function Title(props) {
    return <div className={s.projectsTitle}>
        <span>{props.title}</span>
        <h2>{props.description}</h2>
    </div>
}