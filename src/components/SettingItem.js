import React from "react";

function SettingItem ({image, url, title}) {
    return (
        <>
            <li className = "settings__item">
                <img src={image} alt={image}/>
                <div className = "settings__section">
                    <a href = {url}>{title}</a>
                    <img src = "/img/horizontal-disclosure-icon.png"
                     alt="Horiz"/>
                </div>
            </li>
        </>
    )
}

export default SettingItem