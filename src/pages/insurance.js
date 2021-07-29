import * as React from "react";
import {
    main__insurance,
    header,
    section__gift,
    gift__text,
    insurance__list,
    insurance__item,
    insurance__section,
    insurance__text,
    phone__input,
    input__text,
    checkbox,
    insurance__image,
    count__button,
    count__text,
    insurance__partner,
    icon
} from '../styles/insurance.module.css'
import {Footer} from "../components/footer";
import Layout from "../components/Layout";
const Insurance = () => {
    return (
        <Layout>
            <div className={main__insurance}>
                <h1 className={header}>Страховка</h1>
                <div className={section__gift}>
                    <img src="/img/gift-box-icon.png" alt="gift-box-icon" width={17} height={17}/>
                    <p className={gift__text}>Скидка или подарок каждому покупателю!</p>
                </div>
                <ul className={insurance__list}>
                    <li className={insurance__item}>
                        <img src="/img/penalties-tab-icon.png" alt="penalties-tab-icon" width={24} height={24}/>
                        <div className={insurance__section}>
                            <p className={insurance__text}>Выбрать авто</p>
                            <img src="/img/horizontal-disclosure-icon.png" alt="horizontal-disclosure-icon"/>
                        </div>
                    </li>
                    <li className={insurance__item}>
                        <img src="/img/placeholder-avatar-male.png" alt="placeholder-avatar-male" width={24} height={24} className={icon}/>
                        <div className={insurance__section}>
                            <p className={insurance__text}>Выбрать страхователя</p>
                            <img src="/img/horizontal-disclosure-icon.png" alt="horizontal-disclosure-icon" width={24} height={24} className={icon}/>
                        </div>
                    </li>
                    <li className={insurance__item}>
                        <img src="/img/settings-phone-icon.png" alt="settings-phone-icon" width={24} height={24} className={icon}/>
                        <form action="#">
                            <input placeholder={"Номер телефона"} className={phone__input}/>
                            <p className={input__text}>С вами свяжется оператор для уточнения информации</p>
                        </form>
                    </li>
                    <li className={insurance__item}>
                        <button type="checkbox" className={checkbox}></button>
                        <div className={insurance__partner}>
                            <img src="/img/eurasia-logo-with-text@2x.png" alt="eurasia-logo-with-text" className={insurance__image}/>
                            <p className={input__text}>Разрешаю сбор, обработку и передачу данных и служебной информации партнёру OKauto</p>
                        </div>
                    </li>
                </ul>
                <button className={count__button}>
                    <h2 className={count__text}>Рассчитать стоимость</h2>
                </button>
            </div>
        </Layout>
    )
}

export default Insurance