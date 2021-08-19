import * as React from "react";
import '../styles/insurance.css'
import Layout from "../components/Layout";
import MainHeader from "../components/MainHeader";
import App from "../components/App";
import InsuranceEl from "../components/InsuranceEl";
import Button from "../components/Button";


function Insurance() {
    return (
        <Layout>
            <App>
                <MainHeader
                    name = "Страховка"
                />
                <div className = "insurance-gift">
                    <img src = "/img/gift-box-icon.png" alt="Gift"/>
                    <p>Скидка или подарок каждому покупателю!</p>
                </div>
                <InsuranceEl
                    image = "/img/penalties-tab-icon.png"
                    text = "Выбрать авто"
                />
                <InsuranceEl
                    image = "/img/placeholder-avatar-male.png"
                    text = "Выбрать страхователя"
                />
                <div className = "insurance-el">
                    <img src = "/img/settings-phone-icon.png" alt="Phone"/>
                    <form action="#" className = "insurance-form">
                        <input type="text" placeholder={"Номер телефона"}/>
                        <p>С вами свяжется оператор для уточнения информации</p>
                    </form>
                </div>
                <div className = "insurance-el">
                    <button type = "checkbox"></button>
                    <div className = "insurance-prt">
                        <img src = "/img/eurasia-logo-with-text@2x.png" alt="Partner"/>
                        <p>Разрешаю сбор, обработку и передачу данных и служебной информации партнёру OKauto</p>
                    </div>
                </div>
                <Button
                    title = "Рассчитать стоимость"
                />
            </App>
        </Layout>
    )
}

export default Insurance