import React, {useState} from "react";
import s from './BurgerNav.module.scss'
import { Link, animateScroll as scroll } from "react-scroll";

export function BurgerNav() {
    let [showMenu, setShowMenu] = useState(false)

    const show = () => {
        setShowMenu(!showMenu)

    }
    console.log(showMenu)

    return(
        <div className={s.burgerNav}>
            <div className={`${s.navItems} ${showMenu ? s.show : ""}`}>
                <Link
                    activeClass={s.active}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Main</Link>
                <Link
                    activeClass={s.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Skills</Link>
                <Link
                    activeClass={s.active}
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Projects</Link>
                <Link
                    activeClass={s.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Contacts</Link>
            </div>
            <div onClick={show} className={s.burgerBtn}/>
        </div>
    )
}