import React from "react";
import s from './Skills.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {SkillProgress} from "./Skill/SkillProgress/SkillProgress";
import {Title} from "../common/components/title/Title";
import {faReact} from '@fortawesome/free-brands-svg-icons'
import {faJs} from '@fortawesome/free-brands-svg-icons'
import {faCss3} from '@fortawesome/free-brands-svg-icons'
import {faHtml5} from '@fortawesome/free-brands-svg-icons'
import Slide from 'react-reveal/Slide';

export function Skills() {
    return (
        <div id={"skills"} className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={"Skills"} description={"what i do"}/>
                <div className={s.skills}>
                    <Skill style={faJs} title={"JS"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"}/>
                    <Skill style={faCss3} title={"CSS"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
                    <Skill style={faHtml5} title={"HTML"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et vafancullo diamo batronte"}/>
                    <Skill style={faReact} title={"React"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et vafancullo diamo batronte"}/>
                </div>

                <div className={s.container}>
                    <div className={s.progressWrapInner}>
                        <Slide left>
                            <div className={s.left}>
                                <div className={s.mainTitle}>
                                    <h3>In a <span>short time</span>, I have been able to achieve excellence in all
                                        areas of
                                        app and web development.</h3>
                                </div>
                                <div>
                                    <p>I provide cost-effective and high quality products to meet our Clients’ needs of
                                        timely delivery World Wide. I want to be local in a global world to be where our
                                        Customers need our services customers need our services.</p>
                                </div>
                            </div>
                        </Slide>
                        <Slide right>
                            <div className={s.right}>
                                <SkillProgress title={"React"} percent={"60%"}/>
                                <SkillProgress title={"HTML"} percent={"55%"} style={{}}/>
                                <SkillProgress title={"CSS"} percent={"35%"}/>
                                <SkillProgress title={"JS"} percent={"50%"}/>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>

    )
}