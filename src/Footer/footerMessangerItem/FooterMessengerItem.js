import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export function FooterMessengerItem(props) {
    return(
        <div>
            <FontAwesomeIcon icon={props.style} style={{width: "50px", height: "50px", color: "#fff"}}/>
        </div>
    )
}