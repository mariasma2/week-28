import React from "react";
import "../styles/tariff.css";

export default function Tarif(props) {
  return(
    <div onClick={props.onClick}
    className={`card ${props.selected ? "selected" : ""}`}>
    <header className={`card_header ${props.theme.card_header}`}>Безлимитный{props.rate}</header>
    <div className={`card_price ${props.theme.card_price}`}>
        <p className="card__value">руб.</p>
        <p className="card__number">{props.rate}</p>
        <p className="card__date">/мес.</p>
    </div>
<div className="card__speed">до {props.speed} Мбит</div>
<footer className="footer">Объём включенного трафика не ограничен</footer>
</div>
    )
};