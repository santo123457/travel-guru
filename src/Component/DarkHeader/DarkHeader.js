import React, { useContext, useState } from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../img/Logo.png"
import "./DarkHeader.css"
import { Link } from 'react-router-dom';
import { handleSignOut } from '../LogIn/Login';
import { UserContext } from '../../App';
const DarkHeader = () => {
  const [loggedInUser , setLoggedInUser] = useContext(UserContext)
 const [user,setUser]= useState({
  isSignIn: false,
  firstName:"",
  email:"",
  error:"",
  success:false
 }) 
  const signOut= ()=>{
    handleSignOut()
    .then(res=>{
      setUser(res);
      setLoggedInUser(res)
    })
  }
  return (
    <div className="position-relative ">
      <Navbar  expand="lg">
        <Link to="/home"><Navbar.Brand ><img style={{ width: "120.26px", marginRight: "100px", marginLeft: "50px" }} src={logo} alt="" /></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Form inline>
            <FormControl type="text" placeholder="Search Your Destination..." className="mr-sm-2" style={{ width: "300px" }} />

          </Form>
          <Nav className="mr-auto">
          <Link to="/news" className="ml text-dark mt-2" >News</Link>
            <NavDropdown title="Destination" id="dark-basic-nav-dropdown" className="ml">
              <NavDropdown.Item ><Link to="/booking/coxsbazar" className="text-dark" >Cox's Bazar</Link></NavDropdown.Item>

              <NavDropdown.Item ><Link to="/booking/sreemangal" className="text-dark" > Sreemangal </Link></NavDropdown.Item>

              <NavDropdown.Item> <Link to="/booking/sundarbans" className="text-dark">Sundarbans</Link></NavDropdown.Item>
            </NavDropdown>
            <Link to="/blog" className="ml text-dark mt-2">Blog</Link>
            <Link to="/contact" className="ml text-dark mt-2">Contact</Link>
            <Link to="/login" > <Button className=" ml btn btn-warning"> Log In</Button></Link>
            <Link><Button onClick={()=>setLoggedInUser({})} className = "btn btn-warning ml">Log Out</Button></Link>            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default DarkHeader;