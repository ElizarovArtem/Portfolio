import React, {useState} from "react";
import s from './Work.module.scss';
import Flip from 'react-reveal/Flip';

export function Work(props) {
    let [isOpen, setIsOpen] = useState(false)

    return (
        <Flip top>
            <div className={s.workItem}>
                    <div className={s.picture} style={props.style} onMouseEnter={() => setIsOpen(true)}
                         onMouseLeave={() => setIsOpen(false)}>
                        <div>
                            {isOpen && <div className={s.worksDescription}>
                                <h3>{props.title}</h3>
                                <p>{props.description}</p>
                                <a href={props.link}>{props.linkText}</a>
                                <a href={props.secondLink}>{props.secondLinkText}</a>
                            </div>}
                        </div>
                    </div>
            </div>
        </Flip>
    )
}