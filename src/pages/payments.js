import * as React from "react";
import {
    main__payments,
    header,
    payments__header,
    penalties__text,
    payments__background,
    show__payments,
    payments__info,
    info__sum,
    info__name,
    info__date,
    payments__date,
} from '../styles/payments.module.css'
import {Footer} from "../components/footer";

const Payments = () => {
    return (
        <div className={main__payments}>
            <img src="/static/img/back-button-icon.png" alt="back-button-icon"/>
            <h1 className={header}>Платежи</h1>
            <div className={payments__header}>
                <p className={penalties__text}>Штрафы</p>
            </div>
            <div className={payments__background}>
                {/*<h4>Платежей пока нет</h4>*/}
                <div className={show__payments}>
                    <div className={payments__info}>
                        <h4 className={info__sum}>809 &#8376;</h4>
                        <p className={info__name}>Артём Р.</p>
                    </div>
                    <div className={payments__date}>
                        <p className={info__date}>30 июл. 2018 г.</p>
                        <img src="/static/img/horizontal-disclosure-icon.png" alt="horizontal-disclosure-icon"/>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
} 


export default Payments
