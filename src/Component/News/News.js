import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./News.css";
import { Link } from 'react-router-dom'; 

const News = (props) => {
  const{img,userName}=props.data;
    return (
        
       <div>
            <Carousel>
            {
              props.data.map((data)=><Carousel.Item data={data} key={data.name}>
              <img
                className="d-block w-100 fixed"
                src={data.img}
                alt="Second slide"
              />
          
          <div className="row">
              <div className="col-md-4">
              <Carousel.Caption>
                  <Link to={"/booking/"+data.name}><button className="btn btn-warning">Book Now ➔</button></Link>
                  <br/>
                  <br/>
              <h3 className="text-light">{data.userName}</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <br/>
                <br/>
                <br/>
              </Carousel.Caption>
              <div className="col-md-8"></div>
              </div>
              </div>
            </Carousel.Item>)
            }
              
            </Carousel>
        </div> 
        
    );
};

export default News;