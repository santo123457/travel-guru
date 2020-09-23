import React, { useState } from 'react';
import News from '../News/News';
import fakeData from "../../fakeData/fakeData"

const Home = () => {
    const[data,setData] = useState(fakeData);
    return (
        <div>
            <News data ={data} key={data.name}></News>
            
        </div>
    );
};

export default Home;