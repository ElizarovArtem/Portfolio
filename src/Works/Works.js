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
                    <Work
                        title={"Social Network"}
                        style={SocialNetworkImage}
                        description={"Create self made Social Network using React, Redux, Typescript"}
                        link={"http://ElizarovArtem.github.io/SocialNetwork"}
                        linkText={"Social Network on gh-pages"}
                        secondLink={"https://github.com/ElizarovArtem/SocialNetwork"}
                        secondLinkText={"Social Network on GitHub"}
                    />
                    <Work
                        title={"Todolist"}
                        style={TodolistImage}
                        description={"Create self made TodoList using React, Redux, Typescript"}
                        link={"http://ElizarovArtem.github.io/TodoList"}
                        linkText={"TodoList on gh-pages"}
                        secondLink={"https://github.com/ElizarovArtem/TodoList"}
                        secondLinkText={"TodoList on GitHub"}
                    />
                </div>
            </div>
        </div>
    )
}