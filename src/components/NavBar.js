import * as React from "react";
import {Link} from "gatsby";

function NavBar() {
    return (
        <nav className = "menu">
                <Link to="/" className = "menu__link">
                    <img src = "/img/penalties-tab-icon.png" alt = "penalties-tab" className = "menu__image"/>
                    <p className = "menu__text">Штрафы</p>
                </Link>
                <Link to="/insurance/" className = "menu__link">
                    <img src="/img/shield-tab-bar-icon.png" alt="shield-tab" className = "menu__image"/>
                    <p className = "menu__text">Страховка</p>
                </Link>
                <Link to="/notifications/" className = "menu__link">
                    <img src="/img/settings-notifications-icon.png" alt="settings-notifications" className = "menu__image"/>
                    <p className = "menu__text">Уведомления</p>
                </Link>
                <Link to="/settings/" className = "menu__link">
                    <img src="/img/settings-tab-icon.png" alt="settings-tab" className = "menu__image"/>
                    <p className = "menu__text">Настройки</p>
                </Link>
        </nav>
    )
}

export default NavBar