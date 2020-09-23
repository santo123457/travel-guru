import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import FakeData2 from '../../FakeData2/FakeData2';

import SingleHotel from '../SingleHotel/SingleHotel';

const Hotels = () => {
    const[data,setData]=useState(FakeData2);
    const { name } = useParams();

  console.log(name)
    const places = fakeData.find(placeName =>placeName.name === name);
    const{userName,id}=places;
    return (
        <div className="container">
            <hr/>
            <h6 className="t-a-l">252 stays Apr 13-17 guests</h6>
            <h4 className="t-a-l" style={{fontWeight:"700"}} >Stay In {userName}</h4>
            <div className="row">
            <div className="col-md-6">
            {
                data.map((data)=><SingleHotel places={places} data={data}></SingleHotel>)
            }
            </div>
            <div className="col-md-6">
            <iframe src={`https://www.google.com/maps/embed?pb=${id}`} width="600" height="450" frameborder="0" style={{border:"0",borderRadius:"10px",height:"450px",width:"500px"}} title="cos'sBazar" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

            
            </div>
            </div>
            

        </div>
    );
};

export default Hotels;