import React from "react";
import {Link} from "gatsby";

function Header() {
    return (
        <header className = "header">
            <img src="/img/okauto-logo-icon.png" alt="Logo" className = "header__image"/>
            <Link to={``}>Войти</Link>
        </header>
    )
}

export default Header