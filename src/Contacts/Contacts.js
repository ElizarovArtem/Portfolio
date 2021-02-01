import React from "react";
import s from './Contacts.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";
import Zoom from 'react-reveal/Zoom';


export function Contacts() {
    return (
        <div id={"contacts"} className={s.contacts}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title title={"Contacts"} description={"get in touch"}/>
                <Zoom>
                    <form className={s.form}>
                        <div className={s.first}>
                            <ul>
                                <li>
                                    <input type="text" placeholder="Name" autoComplete="off"/>
                                </li>
                                <li>
                                    <input type="text" placeholder="Email" autoComplete="off"/>
                                </li>
                            </ul>
                        </div>
                        <div className={s.last}>
                            <textarea placeholder="Message"></textarea>
                        </div>
                        <Button title={"Send"}/>
                    </form>
                </Zoom>
            </div>
        </div>
    )
}