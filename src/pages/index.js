import * as React from "react"
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
    carousel
} from '../styles/index.module.css'
import {Footer} from "../components/footer";


const Main = () => {
    return (
        <div className={main__body}>
            <header className= {header}>
                <img
                    src="/static/img/okauto-logo-icon.png"
                    alt="okauto-logo-icon" width={76} height={16}
                />
                <a href="#" className={login__link}>Войти</a>
            </header>
            <div className={banner}></div>
            <div className={add__driver}>
                <div className={driver__text}>
                    <h2 className={check__driver}>Проверка на штрафы</h2>
                    <p className={check__text}> Добавьте водителя для проверки</p>
                </div>
                <p className={plus}>+</p>
            </div>
            <Footer></Footer>
        </div>

    )
}


export default Main