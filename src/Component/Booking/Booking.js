import React from 'react';

import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import Places from '../Places/Places';
import "./Booking.css";
const Booking = () => {
  const { name } = useParams();
  
  const places = fakeData.find(placeName =>placeName.name === name);
  console.log(places);

    return (
       <Places places={places}
       >

       </Places>
    );
};

export default Booking;