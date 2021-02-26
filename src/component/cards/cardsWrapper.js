import React from "react";
import Card from './card';
import cardImg1 from '../../assets/images/cardimg1.jpg';
import cardImg2 from '../../assets/images/cardimg2.jpg';
import cardImg4 from '../../assets/images/cardimg4.jpg';
import cardImg5 from '../../assets/images/cardimg5.jpg';
import cardImg6 from '../../assets/images/cardimg6.jpg';

const CardsWrapper = () => {
    return <div className="container d-flex justify-content-center">
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
                <Card cardImg={cardImg1} cardTitle="Card One" cardText="react app card text demo, 
            react app card text demo, react app card text demo"/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <Card cardTitle="Card Two" cardText="react app card text demo, 
            react app card text demo, react app card text demo"/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <Card cardImg={cardImg2} cardTitle="Card Two" cardText="react app card text demo, 
            react app card text demo, react app card text demo"/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <Card cardImg={cardImg4} cardTitle="Card Three" cardText="react app card text demo, 
            react app card text demo, react app card text demo"/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <Card cardImg={cardImg5} cardTitle="Card Four" cardText="react app card text demo, 
            react app card text demo, react app card text demo"/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <Card cardImg={cardImg6} cardTitle="Card Five" cardText="react app card text demo, 
            react app card text demo, react app card text demo"/>
            </div>
        </div>
    </div>
}

export default CardsWrapper;