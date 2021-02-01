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
                    <Skill style={faReact} title={"React-Redux-TypeScript"}
                           description={"Have an experience in creating different applications, landing pages, SPA using React, Redux, Typescript."}/>
                    <Skill style={faJs} title={"JS"}
                           description={"In my free time I like to solve tasks on CodeWars to improve my JavaScript skill."}/>
                    <Skill style={faHtml5} title={"HTML"}
                           description={"Sometimes I coding different landing pages for maintain and improve my HTML skill."}/>
                    <Skill style={faCss3} title={"CSS"}
                           description={"I like to read different articles about interesting solutions and new features of CSS and testing it."}/>
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
                                <SkillProgress title={"React-Redux-TypeScript"} percent={"80%"}/>
                                <SkillProgress title={"HTML"} percent={"75%"} style={{}}/>
                                <SkillProgress title={"CSS"} percent={"65%"}/>
                                <SkillProgress title={"JS"} percent={"65%"}/>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>

    )
}