import * as React from "react";
import {
    header,
    header__text,
    button,
    card,
    image,
    main__why
} from "../styles/why.module.css"
import Layout from "../components/Layout";
import {Link} from "gatsby";

const Why = () => {
    return (
        <Layout>
            <section className={main__why}>
                <header className={header}>
                    <Link to="/settings/">
                        <button className={button}>
                            <img src="/img/back-button-icon.png" alt="back-button-icon" width={24} height={24}/>
                        </button>
                    </Link>
                    <h5 className={header__text}>Почему нам доверяют</h5>
                </header>
                <div className={card}>
                    <img src="/img/circled-pdf-icon.png" alt="circled-pdf-icon" className={image}/>
                    <h2>Квитанция об оплате</h2>
                    <p>После платежа вы получаете квитанцию. При необходимости можно распечатать её и предъявить как банковский документ.</p>
                </div>
                <div className={card}>
                    <img src="/img/circled-shield-icon.png" alt="circled-shield-icon" className={image}/>
                    <h2>Лёгкая оплата</h2>
                    <p>Штраф погашается в течении 15 минут. Мы интегрированы с платежным шлюзом электронного правительства (ПШЭП) и гарантируем поступление
                    денег в Комитет Казначейства МФ РК.</p>
                </div>
                <div className={card}>
                    <img src="/img/circled-card-icon.png" alt="circled-card-icon" className={image}/>
                    <h2>Безопасность</h2>
                    <p>Конфиденциальность данных карт гарантируют платежные системы, через которые проводятся
                    оплаты банковской картой в нашей системе.</p>
                </div>
            </section>
        </Layout>
    )
}

export default Why;