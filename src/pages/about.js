import * as React from "react";
import {
    main__about,
    header,
    button,
    header__text,
    main__image,
    version,
    card__title,
    text,
    link,
    main__text,
    footer,
    company,
    image,
} from "../styles/about.module.css"
import {Link} from "gatsby";
import Layout from "../components/Layout";
const About = () => {
    return (
        <Layout>
            <section className={main__about}>
                <header className={header}>
                    <Link to="/settings/">
                        <button className={button}>
                            <img src="/img/back-button-icon.png" alt="back-button-icon" width={24} height={24}/>
                        </button>
                    </Link>
                    <h3 className={header__text}>О приложении</h3>
                </header>
                <div className={card__title}>
                    <img src="/img/about-app-icon.png" alt="about-app-icon" className={main__image}/>
                    <p className={version}>Версия 2.1.30 (354)</p>
                </div>
                <div className={main__text}>
                    <p className={text}>OKauto - первое мобильное приложение в Казахстане, которое предоставляет сервис проверки, уведомления и оплаты штрафов ПДД.</p>
                    <img src="/img/about-number-1.png" alt="about-number-1" width={34} height={14} className={image}/>
                    <p className={text}>Сейчас каждый девятый автовладелец использует наше приложение. <br />В настоящее время мы являемся сервисом № 1 в Казахстане.</p>
                    <img src="/img/about-forbes.png" alt="about-forbes" width={50} height={14} className={image}/>
                    <p className={text}>Также на сегодняшний день мы являемся самым быстрорастущим стартапом в Казахстане по версии Forbes.</p>
                    <img src="/img/about-stores.png" alt="about-stores" width={50} height={20} className={image}/>
                    <p className={text}>Мы достигли свыше 600 тыс. загрузок в AppStore и Google Play, и более 200 тыс. активных пользователей.</p>
                    <img src="/img/about-goal.png" alt="about-goal" width={50} height={20} className={image}/>
                    <p className={text}>Основная цель OKauto - создавать полезные продукты, которые сделают жизнь автовладельцев лучше и проще.</p>
                    <a href="https://okauto.kz" className={link}>Подробнее о нас</a>
                </div>
                <div className={footer}>
                    <h5 className={company}>&#169; 2021 OKauto</h5>
                    <a href="#" className={link}>Пользовательское соглашение</a>
                </div>
            </section>
        </Layout>
    )
}

export default About