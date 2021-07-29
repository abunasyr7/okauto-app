import * as React from "react";
import {
    main__premium,
    header__premium,
    header__text,
    info__payments,
    info__section,
    mini__cards,
    mini__card,
    card__text,
    card__info,
    border__black,
    border__blue,
    border__yellow,
    text__image,
    circle__black,
    card__section,
    circle__blue,
    circle__yellow,
    circle__white,
    notification,
    text,
    add__car,
    header
} from '../styles/premium.module.css'
import {Link} from "gatsby";
const Premium = () => {
    return (
        <section className={main__premium}>
            <header className={header}>
                <div className={header__premium}>
                    <Link to="/">
                        <button>
                            <img src="/img/close-button-icon.png" alt="close-button-icon" width={24} height={24}/>
                        </button>
                    </Link>
                    <button>
                        <img src="/img/circled-intercom-icon.png" alt="circled-intercom-icon" width={24} height={24}/>
                    </button>
                </div>
            </header>
            <h1 className={header__text}>Уведомление штрафов по авто</h1>
            <div className={info__payments}>
                <div className={info__section}>
                    <h4>Премиум</h4>
                    <img src="/img/tick-icon.png" alt="tick-icon" width={24} height={24}/>
                    <p className={card__info}>Ежедневная проверка по ИИН авто</p>
                    <img src="/img/tick-icon.png" alt="tick-icon" width={24} height={24}/>
                    <p className={card__info}>Сообщим раньше, чем по базе ЕРАП</p>
                    <img src="/img/tick-icon.png" alt="tick-icon" width={24} height={24}/>
                    <p className={card__info}>50% скидка на оплату по номеру протокола</p>
                    <img src="/img/tick-icon.png" alt="tick-icon" width={24} height={24}/>
                    <p className={card__info}>PUSH+SMS уведомления</p>
                </div>
                <div className={info__section}>
                    <h4>Бесплатно</h4>
                    <p className={card__info}>(уже подключено)</p>
                    <img src="/img/tick-icon.png" alt="tick-icon" width={24} height={24}/>
                    <p className={card__info}>Проверка раз в 3 дня по ИИН</p>
                    <img src="/img/tick-icon.png" alt="tick-icon" width={24} height={24}/>
                    <p className={card__info}>Данные из официальной базы ЕРАП</p>
                    <img src="/img/tick-icon.png" alt="tick-icon" width={24} height={24}/>
                    <p className={card__info}>Оплата онлайн, квитанция сразу</p>
                    <img src="/img/tick-icon.png" alt="tick-icon" width={24} height={24}/>
                    <p className={card__info}>PUSH-уведомления</p>
                </div>
            </div>
            <div className={mini__cards}>
                <div className={mini__card}>
                    <div className={border__black}></div>
                    <div className={card__section}>
                        <div>
                            <h5>1 699 &#8376;</h5>
                            <p className={card__text}> 3 месяца</p>
                            <div className={text__image}>
                                <p>&#8776;</p>
                                <img src="/img/ice-cream-icon.png" alt="ice-cream-icon" width={24} height={24}/>
                            </div>
                        </div>
                        <div className={circle__black}></div>
                    </div>
                </div>
                <div className={mini__card}>
                    <div className={border__blue}></div>
                    <div className={card__section}>
                        <div>
                            <h5>1 699 &#8376;</h5>
                            <p className={card__text}> 3 месяца</p>
                            <div className={text__image}>
                                <p>&#8776;</p>
                                <img src="/img/cake-icon.png" alt="cake-icon" width={24} height={24}/>
                            </div>
                        </div>
                        <div className={circle__blue}></div>
                    </div>
                </div>
                <div className={mini__card}>
                    <div className={border__yellow}></div>
                    <div className={card__section}>
                        <div>
                            <h5>1 699 &#8376;</h5>
                            <p className={card__text}> 3 месяца</p>
                            <div className={text__image}>
                                <p>&#8776;</p>
                                <img src="/img/dinner-icon.png" alt="dinner-icon" width={24} height={24}/>
                            </div>
                        </div>
                        <div className={circle__yellow}></div>
                    </div>
                </div>
                <div className={mini__card}>
                    <div className={card__section}>
                        <div>
                            <h5>20 000 &#8376;</h5>
                            <p className={card__text}> Навсегда </p>
                            <div className={text__image}>
                                <p>&#8776;</p>
                                <img src="/img/whiskey-icon.png" alt="whiskey-icon" width={24} height={24}/>
                            </div>
                        </div>
                        <div className={circle__white}></div>
                    </div>
                </div>
            </div>
            <div className={notification}>
                <img src="/img/settings-about-icon.png" alt="settings-about-icon" width={24} height={24}/>
                <p className={text}>При смене автомобиля подписка сохраняется</p>
            </div>
            <button className={add__car}>
                Добавить авто
            </button>
        </section>
    )
}

export default Premium;