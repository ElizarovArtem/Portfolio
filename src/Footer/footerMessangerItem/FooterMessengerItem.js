import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import s from '../Footer.module.scss'


export function FooterMessengerItem(props) {
    let [hover, setHover] = useState(false)

    return(
        <div className={s.contact}>
            <FontAwesomeIcon onMouseEnter={() => setHover(true)}
                             onMouseLeave={() => setHover(false)}
                             icon={props.style}
                             style={{width: "50px", height: "50px", color: hover ? "#4169e1" : "#fff"}}/>
        </div>
    )
}