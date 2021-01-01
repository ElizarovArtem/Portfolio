import React from "react";
import s from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {SkillProgress} from "./Skill/SkillProgress/SkillProgress";
import {Title} from "../common/components/title/Title";


export function Skills() {
    return(
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={"Skills"} description={"what i do"}/>
                <div className={s.skills}>
                    <Skill title={"JS"} description = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"}/>
                    <Skill title={"CSS"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "}/>
                    <Skill title={"HTML"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et vafancullo diamo batronte"}/>
                    <Skill title={"React"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et vafancullo diamo batronte"}/>
                </div>

                <div class="arlo_tm_progress_wrap">
                    <div className={s.container}>
                        <div className={s.progressWrapInner}>
                            <div className={s.left}>
                                <div className={s.mainTitle}>
                                    <h3>In a <span>short time</span>, I have been able to achieve excellence in all areas of app and web development.</h3>
                                </div>
                                <div>
                                    <p>I provide cost-effective and high quality products to meet our Clients’ needs of timely delivery World Wide. I want to be local in a global world to be where our Customers need our services customers need our services.</p>
                                </div>
                            </div>
                            <div className={s.right}>
                                <SkillProgress title={"React"} percent={"60%"} />
                                <SkillProgress title={"HTML"} percent={"55%"} style={{}}/>
                                <SkillProgress title={"CSS"} percent={"35%"}/>
                                <SkillProgress title={"JS"} percent={"50%"}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}