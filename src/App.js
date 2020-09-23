import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Blog from './Component/Blog/Blog';
import Login from './Component/LogIn/Login';
import Contact from './Component/Contact/Contact';
import DarkHeader from './Component/DarkHeader/DarkHeader'
import Booking from './Component/Booking/Booking';
import Hotels from './Component/Hotels/Hotels';
import PrivetRoute from './Component/PrivetRoute/PrivetRoute';


export const UserContext = createContext();
function App() {

  const [loggedInUser , setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser , setLoggedInUser]}>
      
      <Router>
        <Switch>
        
          <Route exact path="/">
            <Header></Header>
            <Home></Home>
          </Route>
          
          <Route path="/home">
            <Header></Header>
            <Home></Home>
          </Route>
          <Route path="/news">
            <Header></Header>
            <Home></Home>
          </Route>
          <Route path="/blog">
            <DarkHeader></DarkHeader>
            <Blog></Blog>
          </Route>
          <Route path="/contact">
            <DarkHeader></DarkHeader>
            <Contact></Contact>
          </Route>
          
          <Route path="/login">
            <DarkHeader></DarkHeader>
            <Login></Login>
          </Route>
          
          <PrivetRoute path="/booking/:name/hotels">
            <DarkHeader></DarkHeader>
            <Hotels></Hotels>
          </PrivetRoute>
          <Route path="/booking/:name">
            <DarkHeader></DarkHeader>
            <Booking></Booking>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
          
        </Switch>
      </Router>
      </UserContext.Provider>
    
  );
}

export default App;
