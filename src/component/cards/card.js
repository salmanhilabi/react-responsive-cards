import React from "react";
import '../../assets/css/cards.css'
import noImg from '../../assets/images/noImg.jpg';

const Card = (props) => {
    return <div className="card text-left">
        <div className="overflow">
            {props.cardImg ?  <img src={props.cardImg} alt="card-img-one" className="card-img-top"/> : <img src={noImg} alt="card-img-one" className="card-img-top"/>}
        </div>
        <div className="card-body text-dark">
            <h3 className="card-title">{props.cardTitle}</h3>
            <p className="card-text text-secondary">{props.cardText}</p>
            <a href="https://google.com" target="_blank"  className="card-btn">Click Here</a>
        </div>
    </div>
}

export default Card;