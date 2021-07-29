import * as React from "react"
import {link} from "../styles/layout.css";
import {main__body,
    header,
    banner,
    login__link,
    add__driver,
    driver__text,
    check__driver,
    plus,
    check__text,
    slides,
    carousel,
    driver,
    driver__title,
    driver__info,
    driver__name,
    driver__surname,
    driver__ava,
    button__check,
} from '../styles/index.module.css'
import Layout from "../components/Layout";
import {Link} from "gatsby";

export const linkStyles = {
    textDecoration: 'none'
}

const Main = () => {
    return (
        <Layout>
            <div className={main__body}>
                <header className= {header}>
                    <img
                    src="/img/okauto-logo-icon.png"
                    alt="okauto-logo-icon" width={76} height={16}
                    />
                    <a href="#" className={login__link}>Войти</a>
                </header>
                <Link to="/premium/" style={linkStyles}>
                    <div className={banner}></div>
                </Link>
                <div className={add__driver}>
                    <div className={driver__text}>
                        <h2 className={check__driver}>Проверка на штрафы</h2>
                        <p className={check__text}> Добавьте водителя для проверки</p>
                    </div>
                    <button className={plus}>+</button>
                </div>
                <div className={driver}>
                    <div className={driver__title}>
                        <div className={driver__info}>
                            <h2 className={driver__name}>Абунасыр</h2>
                            <h2 className={driver__surname}>Талгатович</h2>
                        </div>
                        <div className={driver__ava}>
                            <img src="/img/placeholder-avatar-male.png" alt="placeholder-avatar-male"/>
                            <button><img src="/img/menu-icon.png" alt="menu-icon"/></button>
                        </div>
                    </div>
                <Link to="/nopenalty/" style={linkStyles}>
                    <button className={button__check}>Проверить</button>
                </Link>
                </div>
            </div>
        </Layout>
    )
}


export default Main