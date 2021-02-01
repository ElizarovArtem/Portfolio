import React from "react";
import s from './Footer.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {FooterMessengerItem} from "./footerMessangerItem/FooterMessengerItem";
import { faVk } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'


export function Footer() {
    return(
        <div className={s.footer}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h3>Elizarov Artem</h3>
                <div className={s.contacts}>
                    <a href={"https://e.mail.ru/inbox/?from=login&back=1%2C1"}><FooterMessengerItem style={faEnvelope}/></a>
                    <a href={"https://vk.com/id7040670"}><FooterMessengerItem style={faVk}/></a>
                    <a href={"https://wa.me/89817002076"}><FooterMessengerItem style={faWhatsapp}/></a>
                    <a href={"https://t.me/Elizarov_Artem"}><FooterMessengerItem style={faTelegram}/></a>
                </div>
                <span>All rights reserved</span>
            </div>
        </div>
    )
}