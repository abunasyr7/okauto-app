import * as React from "react";
import {
    main__profile,
    header__top,
    header__text,
    header,
    profile__text,
    circle,
    input__photo,
    input__info,
    input,
    phone__title,
    phone__input,
    input__phone,
    card__color,
    cards,
    my__car,
    car__info,
    car__number,
    car__type,
    add__car,
    text__add,
} from '../styles/profile.module.css'
import {Footer} from "../components/footer";
const Profile = () => {
    return (
        <section className={main__profile}>
            <header>
                <div className={header__top}>
                    <img src="/static/img/back-button-icon.png" alt="back-button-icon" width={24} height={24}/>
                    <p className={header__text}>Сохранить</p>
                </div>
                <h1 className={header}>Профиль</h1>
            </header>
            <p className={profile__text}>Личные данные</p>
            <div className={input__photo}>
                <div className={circle}></div>
                <div className={input__info}>
                    <input type="text" className={input} placeholder={"Имя"}/>
                    <input type="text" className={input}/>
                </div>
            </div>
            <div className={phone__title}>
                <img src="/static/img/settings-phone-icon.png" alt="settings-phone-icon" width={24} height={24}/>
                <div className={phone__input}>
                    <input type="text" className={input__phone} placeholder={"Номер телефона"}/>
                    <img src="/static/img/edit-icon.png" alt="edit-icon"/>
                </div>
            </div>
            <p className={profile__text}>Фон для карточки</p>
            <div className={cards}>
                <div className={card__color}></div>
                <div className={card__color}></div>
                <div className={card__color}></div>
                <div className={card__color}></div>
            </div>
            <p className={profile__text}>Личные данные</p>
            <div className={my__car}>
                <img src="/static/img/penalties-tab-icon.png" alt="penalties-tab-icon" width={24} height={24}/>
                <div className={car__info}>
                    <h4 className={car__number}>719 ALA 02</h4>
                    <p className={car__type}>Автомобиль</p>
                </div>
            </div>
            <div className={add__car}>
                <h3 className={text__add}>Добавить авто</h3>
                <img src="/static/img/plus-icon.png" alt="plus-icon" width={24} height={24}/>
            </div>
            <Footer></Footer>
        </section>
    )
}


export default Profile