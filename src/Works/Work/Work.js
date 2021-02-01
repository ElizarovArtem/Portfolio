import React, {useState} from "react";
import s from './Work.module.scss';
import Flip from 'react-reveal/Flip';

export function Work(props) {
    let [isOpen, setIsOpen] = useState(false)

    return (
        <Flip top>
            <div className={s.workItem}>
                <a href={"/"}>
                    <div className={s.picture} style={props.style} onMouseEnter={() => setIsOpen(true)}
                         onMouseLeave={() => setIsOpen(false)}>
                        {/*<a href="/" className={s.look}>Look</a>*/}
                        <div>
                            {isOpen && <div className={s.worksDescription}>
                                <h3>{props.title}</h3>
                                <p>{props.description}</p>
                                <a href="/">VVV</a>
                            </div>}
                        </div>
                    </div>
                </a>
            </div>
        </Flip>
    )
}