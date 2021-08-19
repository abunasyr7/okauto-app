import * as React from "react"
import Layout from "../components/Layout";
import App from "../components/App";
import MainHeader from "../components/MainHeader";
import '../styles/notifications.css'

function Notifications () {
    return (
        <Layout>
            <App>
                <MainHeader
                    name = "Уведомления"
                />
                <div className = "notifications__on">
                    <img src = "/img/no-notifications-illustration-bell.png" alt="notifications-straight-bell" width={20} height={20} />
                    <div className="notifications__text">
                        <h2 className="">Push-уведомления не включены!</h2>
                        <p className="">Чтобы получить уведомления о штрафах разрешите в настройках телефона.</p>
                        <a href="/" className="">Перейти в настройки</a>
                    </div>
                </div>
                <div className="notifications__main">
                    <h2>Уведомлений пока нет</h2>
                    <img src = "/img/no-notifications-illustration.png" alt="no-notifications-illustration" width={200} />
                </div>
            </App>
        </Layout>
    )
}

export default Notifications