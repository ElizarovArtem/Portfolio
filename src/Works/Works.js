import React from "react";
import s from './Works.module.scss';
import {Work} from "./Work/Work";
import styleContainer from './../common/styles/Container.module.css'
import SocialNetwork from "../assets/SocialNetwork.png";
import Todolist from "../assets/todolist.png";
import {Title} from "../common/components/title/Title";

export function Works() {
    const SocialNetworkImage = {
        backgroundImage: 'url(' + SocialNetwork + ')',
    };
    const TodolistImage = {
        backgroundImage: 'url(' + Todolist + ')',
    };

    return (
        <div id={"works"} className={s.works}>
            <div className={`${styleContainer.container} ${s.worksContainer}`}>
                <Title title={"Projects"} description={"featured works"}/>
                <div className={s.worksItems}>
                    <Work title={"Social Network"} style={SocialNetworkImage} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
                    <Work title={"Todolist"} style={TodolistImage} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
                </div>
            </div>
        </div>
    )
}