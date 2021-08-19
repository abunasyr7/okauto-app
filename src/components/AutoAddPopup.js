import React from 'react';
import PopupWithForm from "./PopupWithForm";
import '../blocks/popup-auto/popup-auto.css'
import '../blocks/popup-auto/__input/popup-auto__input.css'
import '../blocks/popup-auto/__header/popup-auto__header.css'

function AutoAddPopup({isOpen, onClose}) {
    return (
        <PopupWithForm
            isOpen = {isOpen}
            onClose = {onClose}
            name="auto"
            buttonText = "Проверить"
        >
            <div className="popup-auto__header">
                <h4>Новый водитель</h4>
                <img src = "/img/placeholder-avatar-male.png" alt="male"/>
            </div>
            <form action="">
                <p>Ваш ИИН</p>
                <div className="popup-auto__input">
                    <input type="number" maxLength="1"/>
                    <input type="number"/>
                </div>
                <span></span>
                <div className="popup-auto__footer">
                    <button></button>
                    <p></p>
                </div>
            </form>
        </PopupWithForm>
    )
}

export default AutoAddPopup