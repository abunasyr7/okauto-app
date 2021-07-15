import {footer, footer__image, footer__section, footer__text, links} from "../styles/footer.module.css";
import * as React from "react";
import { Link } from 'gatsby';
export default function Footer() {
    return (
        <footer>
            <nav className={footer}>
                <div className={footer__section}>
                    <Link to="/" className={links}>
                        <img src="/static/img/penalties-tab-icon.png" alt="penalties-tab" className={footer__image}/>
                        <p className={footer__text}>Штрафы</p>
                    </Link>
                </div>
                <div className={footer__section}>
                    <Link to="/insurance/" className={links}>
                        <img src="/static/img/shield-tab-bar-icon.png" alt="shield-tab" className={footer__image}/>
                        <p className={footer__text}>Страховка</p>
                    </Link>
                </div>
                <div className={footer__section}>
                    <Link to="/notifications/" className={links}>
                        <img src="/static/img/settings-notifications-icon.png" alt="settings-notifications" className={footer__image}/>
                        <p className={footer__text}>Уведомления</p>
                    </Link>
                </div>
                <div className={footer__section}>
                    <Link to="/settings/" className={links}>
                        <img src="/static/img/settings-tab-icon.png" alt="settings-tab" className={footer__image}/>
                        <p className={footer__text}>Настройки</p>
                    </Link>
                </div>
            </nav>
        </footer>
    )
}


