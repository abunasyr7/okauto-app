import * as React from "react"
import {Footer} from "../components/footer.js";
import {
    header,
    main__notifications,
    bell,
    notifications__text,
    textarea,
    textarea__header,
    textarea__text,
    textarea__link,
    show__notifications,
    no_notifications,
} from '../styles/notifications.module.css'
import Layout from "../components/Layout";

const Notifications = () => {
    return (
        <Layout>
            <div className={main__notifications}>
                <h1 className={header}>Уведомления</h1>
                <div className={notifications__text}>
                    <img src="/img/no-notifications-illustration-bell.png" alt="notifications-straight-bell" width={20} height={20} className={bell} />
                    <div className={textarea}>
                        <h2 className={textarea__header}>Push-уведомления не включены!</h2>
                        <p className={textarea__text}>Чтобы получить уведомления о штрафах разрешите в настройках телефона.</p>
                        <a href="#" className={textarea__link}>Перейти в настройки</a>
                    </div>
                </div>
                <div className={show__notifications}>
                    <h2>Уведомлений пока нет</h2>
                    <img src="/img/no-notifications-illustration.png" alt="no-notifications-illustration" width={200} className={no_notifications}/>
                </div>
            </div>
        </Layout>
    )
}

export default Notifications