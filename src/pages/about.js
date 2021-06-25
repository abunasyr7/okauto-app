import * as React from "react";
import {
    main__about,
    button
} from "../styles/about.module.css"
const About = () => {
    return (
        <section className={main__about}>
            <header>
                <button className={button}>
                    <img src="/static/img/back-button-icon.png" alt="back-button-icon" width={24} height={24}/>
                </button>
                <h3>О приложении</h3>
            </header>
            <img src="" alt=""/>
            <p></p>
            <p>"OKauto - первое мобильное приложение в Казахстане, которое предоставляет сервис проверки, уведомления и оплаты штрафов ПДД.\n\n![](https://i.imgur.com/fmasQnO.png =38x16)\n\nСейчас каждый девятый автовладелец использует наше приложение.\nВ настоящее время мы являемся сервисом № 1 в Казахстане.\n\n![](https://i.imgur.com/hoS29tk.png =64x16)\n\nТакже на сегодняшний день мы являемся самым быстрорастущим стартапом в Казахстане по версии Forbes.\n\n![](https://i.imgur.com/AXwnNfA.png =50x20)\n\nМы достигли свыше 600 тыс. загрузок в AppStore и Google Play, и более 200 тыс. активных пользователей.\n\n![](https://i.imgur.com/uCYymbd.png =49x17)\n\nОсновная цель OKauto - создавать полезные продукты, которые сделают жизнь автовладельцев лучше и проще.\n\n[Подробнее о нас](https://okauto.kz)",</p>
        </section>
    )
}

export default About