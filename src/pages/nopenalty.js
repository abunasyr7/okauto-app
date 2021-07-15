import * as React from "react";
import {
    main__nopenalty,
    header,
    close__button,
    header__text,
    profile,
    profile__info,
    no__penalty,
    info2,
    text1,
    identic__number,
    source,
    erap,

    on__notif,
    plus__info,
    add__info,
    info__position,

} from "../styles/nopenalty.module.css"
import {Link} from "gatsby";
import {linkStyles} from "./index";
const Nopenalty = () => {
    return (
        <section className={main__nopenalty}>
            <header className={header}>
                <Link to="/">
                    <button className={close__button}>
                        <img src="/static/img/close-button-icon.png" alt="close-button-icon" width={24} height={24}/>
                    </button>
                </Link>
                <h1 className={header__text}>Нет штрафов</h1>
            </header>
            <div className={profile}>
                <h3 className={profile__info}>Абунасыр Талгатович</h3>
                <img src="/static/img/placeholder-avatar-male.png" alt="placeholder-avatar-male" width={40} height={40}/>
            </div>
            <div className={no__penalty}>
                <img src="/static/img/no-penalties-illustration.png" alt="no-penalties-illustration" width={110} height={96}/>
                <h5 className={info2}>Так держать!</h5>
                <p className={text1}>По данному ИИН штрафов не обнаружено:<br />
                    <h5 className={identic__number}>960727301119</h5>
                </p>
                <div className={source}>
                    <img src="/static/img/erap-emblem.png" alt="erap-emblem" width={24} height={24}/>
                    <p className={erap}>Источник - Единый реестр административных производств (ЕРАП)</p>
                </div>
            </div>
            <Link to="/premium/" >
                <button className={on__notif} style={linkStyles}>
                    Получать уведомления
                </button>
            </Link>
            <div className={plus__info}>
                <div className={info__position}>
                    <h5 className={add__info}>Важная информация</h5>
                    <img src="/static/img/vertical-facing-up-disclosure-icon.png" alt="vertical-facing-up-disclosure-icon" width={24} height={24}/>
                </div>
            </div>
        </section>
    )
}

export default Nopenalty