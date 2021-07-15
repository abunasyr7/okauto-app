import * as React from "react";
import {
    header,
    main__settings,
    settings__list,
    settings__section,
    settings__text,
    settings__subtext,
    settings__header,
    settings__item,
} from '../styles/settings.module.css'
import Layout from "../components/Layout";
import {Link} from "gatsby";
import {linkStyles} from "./index";

const Settings = () => {
    return (
        <Layout>
            <div className={main__settings}>
                <h1 className={header}>
                    Настройки
                </h1>
                <ul className={settings__list}>
                    <Link to="/profile/" style={linkStyles}>
                        <li className={settings__item}>
                            <img src="/static/img/placeholder-avatar-male.png" alt="placeholder-avatar-male" width={24} height={24} />
                            <div className={settings__section}>
                                <a href="#" className={settings__text}>Абунасыр Сырманов</a>
                                <img src="/static/img/horizontal-disclosure-icon.png" alt="horizontal-disclosure-icon"/>
                            </div>
                        </li>
                    </Link>
                    <li className={settings__item}>
                        <img src="/static/img/settings-support-icon.png" alt="settings-support-icon" width={24} height={24}/>
                        <div className={settings__section}>
                                <div>
                                    <h2 className={settings__header}>1-271-2728</h2>
                                    <p className={settings__subtext}>Ваш код для техподдержки</p>
                                </div>
                        </div>
                    </li>
                    <Link to="/payments/" style={linkStyles}>
                        <li className={settings__item}>
                            <img src="/static/img/settings-payments-icon.png" alt="settings-payments-icon" width={24} height={24}/>
                            <div className={settings__section}>
                                <a href="#" className={settings__text}>История платежей</a>
                                <img src="/static/img/horizontal-disclosure-icon.png" alt="horizontal-disclosure-icon"/>
                            </div>
                        </li>
                    </Link>
                    <Link to="/autodrivers/" style={linkStyles}>
                        <li className={settings__item}>
                            <img src="/static/img/driver-profiles.png" alt="driver-profiles" width={24} height={24}/>
                            <div className={settings__section}>
                                <a href="#" className={settings__text}>Авто и водители</a>
                                <img src="/static/img/horizontal-disclosure-icon.png" alt="horizontal-disclosure-icon"/>
                            </div>
                        </li>
                    </Link>
                    <Link to="/notifications2/" style={linkStyles}>
                        <li className={settings__item}>
                            <img src="/static/img/notifications-tab-icon.png" alt="notifications-tab-icon" width={24} height={24}/>
                            <div className={settings__section}>
                                <a href="#" className={settings__text}>Уведомления</a>
                                <img src="/static/img/horizontal-disclosure-icon.png" alt="horizontal-disclosure-icon"/>
                            </div>
                        </li>
                    </Link>
                    <li className={settings__item}>
                        <img src="/static/img/circled-intercom-icon.png" alt="circled-intercom-icon" width={24} height={24}/>
                        <div className={settings__section}>
                            <a href="#" className={settings__text}>Написать нам</a>
                            <img src="/static/img/horizontal-disclosure-icon.png" alt="horizontal-disclosure-icon"/>
                        </div>
                    </li>
                    <li className={settings__item}>
                        <img src="/static/img/settings-faq-icon.png" alt="settings-faq-icon" width={24} height={24}/>
                        <div className={settings__section}>
                            <a href="#" className={settings__text}>Помощь (FAQ)</a>
                            <img src="/static/img/horizontal-disclosure-icon.png" alt="horizontal-disclosure-icon"/>
                        </div>
                    </li>
                    <li className={settings__item}>
                        <img src="/static/img/settings-rate-icon.png" alt="settings-rate-icon" width={24} height={24}/>
                        <div className={settings__section}>
                            <a href="#" className={settings__text}>Оценить приложение</a>
                            <img src="/static/img/horizontal-disclosure-icon.png" alt="horizontal-disclosure-icon"/>
                        </div>
                    </li>
                    <li className={settings__item}>
                        <img src="/static/img/settings-share-icon.png" alt="settings-share-icon" width={24} height={24}/>
                        <div className={settings__section}>
                            <a href="#" className={settings__text}>Поделиться с друзьями</a>
                            <img src="/static/img/horizontal-disclosure-icon.png" alt="horizontal-disclosure-icon"/>
                        </div>
                    </li>
                    <Link to="/about/" style={linkStyles}>
                        <li className={settings__item}>
                            <img src="/static/img/settings-about-icon.png" alt="settings-about-icom" width={24} height={24}/>
                            <div className={settings__section}>
                                <a href="#" className={settings__text}>О приложении</a>
                                <img src="/static/img/horizontal-disclosure-icon.png" alt="horizontal-disclosure-icon"/>
                            </div>
                        </li>
                    </Link>
                    <Link to="/why/" style={linkStyles}>
                        <li className={settings__item}>
                            <img src="/static/img/settings-why-trust-us-icon.png" alt="settings-why-trust-us-icon" width={24} height={24}/>
                            <div className={settings__section}>
                                <a href="#" className={settings__text}>Почему нам доверяют</a>
                                <img src="/static/img/horizontal-disclosure-icon.png" alt="horizontal-disclosure-icon"/>
                            </div>
                        </li>
                    </Link>
                </ul>
            </div>
        </Layout>
    )
}

export default Settings