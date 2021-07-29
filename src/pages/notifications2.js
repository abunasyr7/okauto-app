import * as React from "react";
import {Footer} from "../components/footer";
import {
    main,
    header,
    header__text,
    info__card,
    info__new,
    info__text,
    new__text,
    date,
    info__buttons,
    info__name,
    button
} from "../styles/notifications2.module.css"
import Layout from "../components/Layout";

const Notifications2 = () => {
    return (
        <Layout>
            <section className={main}>
                <header className={header}>
                    <h1 className={header__text}>Уведомления</h1>
                </header>
                <div className={info__card}>
                    <div className={info__new}>
                        <div className={info__text}>
                            <h2 className={new__text}>Новый штраф</h2>
                            <p className={date}>22 июн. 2021 г., 18:49</p>
                        </div>
                        <div className={info__buttons}>
                            <img src="/img/circled-bell-icon.png" alt="circled-bell-icon"/>
                            <img src="/img/menu-icon.png" alt="menu-icon.png" width={24} height={24}/>
                        </div>
                    </div>
                    <p className={info__name}>Марат Даукенович, обнаружен штраф</p>
                    <button className={button}>Проверить</button>
                </div>
            </section>
        </Layout>
    )
}

export default Notifications2