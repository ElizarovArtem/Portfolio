import s from "./SkillProgress.module.scss";
import React from "react";

export function SkillProgress(props) {
    return <div className={s.progress}>
            <div className={s.progressInner}>
                <span><span>{props.title}</span><span className={s.number}>{props.percent}</span></span>
                <div className={s.background}>
                    <div className={s.bar}>
                        <div className={s.barIn} style={{width: `${props.percent}`}}/>
                    </div>
                </div>
            </div>
    </div>
}