import React from "react";
import s from './Contacts.module.css'
import styleContainer from './../common/styles/Container.module.css'


export function Contacts() {
    return(
        <div className={s.contacts}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                    <h3>Contacts</h3>
                    <form className={s.form}>
                        <input type={"text"} className={s.input}/>
                        <input type={"Email"} className={s.input}/>
                        <textarea></textarea>
                    </form>
                    <button className={s.button}>Send</button>
            </div>
        </div>
    )
}