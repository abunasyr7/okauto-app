import React from "react";
import SettingItem from "./SettingItem";
import {Link} from "gatsby";

function SettingsNav() {
    return (
        <ul className = "settings__list">
            <Link to = "/profile/">
                <SettingItem
                    image = "/img/placeholder-avatar-male.png"
                    title = "Абунасыр Сырманов"
                />
            </Link>
            <SettingItem
                image = "/img/settings-support-icon.png"
                title = "1-281-5501"
            />
            <SettingItem
                image = "/img/settings-payments-icon.png"
                url = "/"
                title = "История платежей"
            />
            <SettingItem
                image = "/img/circled-intercom-icon.png"
                url = "/"
                title = "Написать нам"
            />
            <SettingItem
                image = "/img/settings-faq-icon.png"
                url = "/"
                title = "Помощь (FAQ)"
            />
            <SettingItem
                image = "/img/settings-about-icon.png"
                url = "/"
                title = "О приложении"
            />
            <SettingItem
                image = "/img/settings-why-trust-us-icon.png"
                url = "/"
                title = "Почему нам доверяют"
            />
        </ul>
    )
}
export default SettingsNav