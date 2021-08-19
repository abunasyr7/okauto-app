import React from 'react'

function CheckPenalty(props) {
    return (
        <div className="check-penalty">
            <div className="check-penalty__main">
                <h2>Проверка на штрафы</h2>
                <p> Добавьте водителя для проверки</p>
            </div>
            <button type="button" onClick={props.onAutoAdd}>+</button>
        </div>
    )
}

export default CheckPenalty