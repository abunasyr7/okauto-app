import React from 'react';
import '../styles/popup.css';

function PopupWithForm (props) {
    return (
        <section className={`popup popup-${props.name} ${props.isOpen ? 'popup_type_open' : ''}`}>
            <div className="popup__body">
                <div className="popup__content">
                    <button type = "button" onClick={props.onClose}>
                        <img src="/img/close-button-icon.png" alt="close-button-icon" className="popup__close" />
                    </button>
                    {props.children}
                    <button className= "popup__button" >{props.button}</button>
                </div>
            </div>
        </section>
    )
}

export default PopupWithForm