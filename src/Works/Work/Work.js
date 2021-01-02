import React, {useState} from "react";
import s from './Work.module.scss';

export function Work(props) {
    let [isOpen, setIsOpen] = useState(false)

    return(
        <div className={s.workItem}>
            <a href={"/"}>
                <div className={s.picture} style={props.style} onMouseEnter={() => setIsOpen(true)}
                     onMouseLeave={() => setIsOpen(false)}>
                    {/*<a href="/" className={s.look}>Look</a>*/}
                    <div>
                        {isOpen && <div className={s.worksDescription}>
                            <h3>{props.title}</h3>
                            <p>{props.description}</p>
                        </div>}
                    </div>
                </div>
            </a>
        </div>
    )
}