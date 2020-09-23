import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import icon from "../../img/Icon/star_1_.png"
const SingleHotel = (props) => {
    const{img,name,rooms,facilities,cancellation,rating,pricing}=props.data;
    
    return (
        <div>
            <Card >
<div className="row">
    <div className="col-md-5">
        <img src={img} alt="" style={{width:"250px"}}/>
    </div>
    <div className="col-md-7">
        <Card.Body>
    <h6>{name}</h6>
    <small style={{display:"block",color:"gray"}}>{rooms}</small>
    <small style={{display:"block",color:"gray"}}>{facilities}</small>
    <small style ={{color:"gray",display:"block"}}>{cancellation}</small>
    
    <div className="row mt-2">
        <div className="col-md-6"style ={{display:"block"}}>
<img src={icon} alt="hotelIMage" style={{width:"20px",marginRight:"5px",marginBottom:"3px"}}/>

    <small>{rating}</small>
        </div>

        <div className="col-md-6" style ={{display:"block"}}>
    <small className="t-a-l"><b>{pricing}</b>/night</small>
        </div>
    </div>
        </Card.Body>
    </div>
</div>
</Card> 
        </div>
    );
};

export default SingleHotel;