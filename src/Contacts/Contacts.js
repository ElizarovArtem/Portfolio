import React from "react";
import s from './Contacts.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";


export function Contacts() {
    return(
        <div className={s.contacts}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                   <Title title={"Contacts"} description={"get in touch"}/>
                    <form className={s.form}>
                        <div className={s.first}>
                            <ul>
                                <li>
                                    <input  type="text" placeholder="Name" autoComplete="off"/>
                                </li>
                                <li>
                                    <input  type="text" placeholder="Email" autoComplete="off"/>
                                </li>
                            </ul>
                        </div>
                        <div className={s.last}>
                            <textarea placeholder="Message"></textarea>
                        </div>
                        <button className={s.button}>Send</button>
                    </form>

            </div>
        </div>
    )
}