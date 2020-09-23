import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="container">
           <Form >
             <h1 style={{textAlign:"center"}}>Contact Us</h1>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Select the Problem</Form.Label>
    <Form.Control as="select">
      
      <option>Can't Book my place</option>
      <option>Discussion About pricing</option>
      <option>Any More place You should add</option>
      <option>Some More Description about any place</option>
      <option>Others...</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Send Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button type="submit Now">Submit</Button>
</Form><hr/>
<div className="row">
  <div className="col-md-6">
  <h4>Also Contact us with:</h4>
  <br/>
<div><h6>Phone: 01789012345</h6></div>
<div><h6>Email: example@gmail.com</h6></div>
  </div>
  <div className="col-md-6">
    <h4>Social Support</h4>
  </div>
</div>
        </div>
    );
};

export default Contact;