import * as React from "react";
import { header, header__top } from "../styles/profile.module.css";
import {
    main__autodrivers,
    header__text,
    cards,
    choose__car,
    choose__driver,
    card,
    card__text,
    cars,
    car__info,
    car,
    car__number,
    car__type,
    text__add,
    add__car,
    popup,
    popup__body,
    popup__content,
    popup__close,
    popup__title,
    popup__number,
    popup__input,
    popup__image,
    popup__button
} from "../styles/autodrivers.module.css"
import {Footer} from "../components/footer";
import Layout from "../components/Layout";
import {Link} from "gatsby";



const AutoDriver = () => {
    return (
        <Layout>
            <section className={main__autodrivers}>
                <header className={header}>
                    <div className={header__top}>
                        <Link to="/settings/">
                            <button>
                                <img src="/static/img/back-button-icon.png" alt="back-button-icon" width={24} height={24}/>
                            </button>
                        </Link>
                        <button className={header__text}>Изменить</button>
                    </div>
                </header>
                <div className={cards}>
                    <div className={card}>
                        <button className={choose__car} active></button>
                        <p className={card__text}>Автомобили</p>
                    </div>
                    <div className={card}>
                        <button className={choose__driver}></button>
                        <p className={card__text}>Водители</p>
                    </div>
                </div>
                <div className={cars}>
                    <img src="/static/img/penalties-tab-icon.png" alt="penalties-tab-icon" width={24} height={24}/>
                    <div className={car}>
                        <div className={car__info}>
                            <h3 className={car__number}>719 ALA 02</h3>
                            <p className={car__type}>Автомобиль</p>
                        </div>
                        <img src="/static/img/horizontal-disclosure-icon.png" alt="horizontal-disclosure-icon" width={24} height={24}/>
                    </div>
                </div>
                    <button className={add__car}>
                        <h3 className={text__add}>Добавить авто</h3>
                        <img src="/static/img/plus-icon.png" alt="plus-icon" width={24} height={24}/>
                    </button>
                <section className={popup}>
                    <div className={popup__body}>
                        <div className={popup__content}>
                            <button className={popup__close}>
                                <img src="/static/img/close-button-icon.png" alt="close-button-icon" className={popup__image}/>
                            </button>
                            <h2 className={popup__title}>Новое авто</h2>
                            <p className={popup__number}>Госномер авто</p>
                            <form action="">
                                <input  className={popup__input}/>
                                <button className={popup__button}>Добавить</button>
                            </form>
                        </div>
                    </div>
                </section>
            </section>
        </Layout>
    )
}

export default AutoDriver