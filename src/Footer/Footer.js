import React from "react";
import s from './Footer.module.css'
import styleContainer from './../common/styles/Container.module.css'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {FooterMessengerItem} from "./footerMessangerItem/FooterMessengerItem";
import { faVk } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'


export function Footer() {
    return(
        <div className={s.hireMe}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h3>Elizarov Artem</h3>
                <div className={s.contacts}>
                    <FooterMessengerItem style={faEnvelope}/>
                    <FooterMessengerItem style={faVk}/>
                    <FooterMessengerItem style={faWhatsapp}/>
                    <FooterMessengerItem style={faTelegram}/>
                </div>
                <span>All rights reserved</span>
            </div>
        </div>
    )
}