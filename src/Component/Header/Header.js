import React, { useState } from 'react';

import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../img/Logo-light.gif"
import "./Header.css"
import { Link } from 'react-router-dom';
import  handleSignOut from "../LogIn/Login"

const Header = () => {
  const[user,setUser]=useState({
    error: "",
      email: "",
      isSignIn: true,
      password: "",
      img: "",
      firstName: "",
      lastName: ""
  })
  

  return (
    
    <div className="position-relative">
      <Navbar className="position"  expand="lg">
        <Link to="/home"><Navbar.Brand><img style={{ width: "120.26px", marginRight: "100px", marginLeft: "50px" }} src={logo} alt="" /></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Form inline>
            <FormControl type="text" placeholder="Search Your Destination..." className="mr-sm-2" style={{ width: "300px" }} />

          </Form>
          <Nav className="mr-auto">
            <Link to="/news" className="ml text-light mt-2">News</Link>
            <NavDropdown className="ml" title="Destination" id="basic-nav-dropdown" >
              <NavDropdown.Item ><Link to="/booking/coxsbazar" className="text-dark" >Cox's Bazar</Link></NavDropdown.Item>

              <NavDropdown.Item ><Link to="/booking/sreemangal" className="text-dark" > Sreemangal </Link></NavDropdown.Item>

              <NavDropdown.Item> <Link to="/booking/sundarbans" className="text-dark">Sundarbans</Link></NavDropdown.Item>
            </NavDropdown>
            <Link to="/blog" className="ml text-light mt-2">Blog</Link>
            <Link to="/contact" className="ml text-light mt-2">Contact</Link> 
            
              <Link to="/login" className="ml btn" >  <input type="button" value="Log Out" className = "btn btn-warning" onClick={handleSignOut}/> </Link> 
              
              <Link to="/login" className="ml btn" > <Button className="btn btn-warning"> Log In</Button></Link>
              
            
             
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     
    </div>
  );
};

export default Header;