import React from "react";
import Card from './card';

const CardsWrapper = () => {
    return <div className="container d-flex justify-content-center">
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
               <Card/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
               <Card/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
               <Card/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
               <Card/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
               <Card/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
               <Card/>
            </div>
        </div>
    </div>
}

export default CardsWrapper;