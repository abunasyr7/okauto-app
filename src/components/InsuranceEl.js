import React from "react";

function InsuranceEl({image, text}) {
    return(
        <li className = "insurance-el">
            <img src={image} alt={image} />
            <div className = "insurance-el__main">
                <p>{text}</p>
                <img src = "/img/horizontal-disclosure-icon.png" alt="Hline"/>
            </div>
        </li>
    )
}

export default InsuranceEl