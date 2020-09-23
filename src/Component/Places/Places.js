import React from 'react';
import { Redirect } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Places = (props) => {
    
    const { userName,details,name } = props.places;
    console.log(name) 
    
    const handleOnSubmit=()=>{
    }
    return (
        <div className ="container" >
            
        <div className="row justify-content-around container mt-5">
          <div className="col-md-6 mt-5">
    <h1 className="display-5 fw mt-5" >{userName}</h1>
    <p>{details}</p>
          </div>
          <div className="col-md-4 mt-5">
  
            <Form onSubmit={handleOnSubmit}>
              <fieldset >
                <Form.Group>
                  <Form.Label htmlFor="Select" className="t-a-l">Origin</Form.Label>
                  <Form.Control className="font-weight-bold" as="select" id="Select">
                    <option>Dhaka</option>
                    <option>Chattagram</option>
                    <option>khulna </option>
                    <option>Rajshahi</option>
                    <option>Shylet</option>
                    <option>Barishal</option>
                    <option>Comilla</option>
                    <option>Moymonshingh</option>
                    <option>Rangamati</option>
                    <option>Rangpur</option>
                    <option>Noakhali</option>
  
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="TextInput" className="t-a-l " >Destination</Form.Label>
                  <Form.Control id="TextInput" value={userName} className="font-weight-bold" />
                </Form.Group>
                <Form.Group>
                  <div className="row">
                    <div className="col-md-6 ">
                      <h6 className="t-a-l">From</h6>
                      <input type="date" class="form-control" />
                    </div>
  
                    <div className="col-md-6" >
                      <h6 className="t-a-l">To</h6>
                      <input type="date" class="form-control" />
                    </div>
                  </div>
                </Form.Group>
                <Link to={`/booking/${name}/hotels`}><Button  className="btn btn-warning pl-5 pr-5 mt-5">Start Booking</Button></Link>
              </fieldset>
            </Form>
          </div>
        </div>
      </div>
    );
};

export default Places;