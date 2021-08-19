import React from 'react';
import {Link} from "gatsby";
import Button from "./Button";

function Card(props) {
    return(
        <>
            <div className="card">
                <div className="card__title">
                    <div>
                        <h2>{props.name}</h2>
                        <h2>{props.paternity}</h2>
                    </div>
                    <div className="card__ava">
                        <img src={`/img/placeholder-avatar-${props.gender}.png`} alt={`placeholder-avatar-${props.gender}`}/>
                        <button><img src={`/img/menu-icon.png`} alt="icon"/></button>
                    </div>
                </div>
                <Link to="/nopenalty/">
                    <Button
                        title = "Проверить"
                    />
                </Link>
            </div>
        </>
    )
}

export default Card;