import React, {useState} from "react";
import s from './Contacts.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";
import Zoom from 'react-reveal/Zoom';
import {useFormik} from "formik";
import axios from "axios";


export function Contacts() {

    let [showThanksMessage, setShowThanksMessage] = useState(false)
    let [disabled, setDisabled] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            message: '',
            email: '',
        },
        onSubmit: values => {
            setDisabled(true)
            axios.post('https://gmail-nodejs-smtp.herokuapp.com/sendMessage', values)
                .then(res => {
                    setShowThanksMessage(true)
                    setDisabled(false)
                    formik.resetForm()
                })
        },
    });

    return (
        <div id={"contacts"} className={s.contacts}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title title={"Contacts"} description={"get in touch"}/>
                <Zoom>
                    {showThanksMessage ?
                        <div className={s.thanksMessage}>Message sent, thanks for your interest in my person.</div>
                        :
                        <form className={s.form} onSubmit={formik.handleSubmit}>
                            <div className={s.first}>
                                <ul>
                                    <li>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Name"
                                            autoComplete="off"
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                        />
                                    </li>
                                    <li>
                                        <input
                                            type="text"
                                            placeholder="Email"
                                            autoComplete="off"
                                            id="email"
                                            name="email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div className={s.last}>
                            <textarea
                                placeholder="Message"
                                id="message"
                                name="message"
                                value={formik.values.message}
                                onChange={formik.handleChange}
                            />
                            </div>
                            <Button disabled={disabled} title={"Send"}/>
                        </form>
                    }
                </Zoom>
            </div>
        </div>
    )
}