
import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../FirebaseConfig';
import { Link } from '@material-ui/core';
import  {UserContext}  from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);

export const handleSignOut = () => {
  return firebase.auth().signOut().then(function () {
    const SignOutUser ={
      isSignIn:false,
      firstName:"",
      email:"",
      error:"",
      success:false
    }
    return SignOutUser
  }).catch(function (error) {

  });
  
}

const Login = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
 
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  const [oldUser, setOldUser] = useState(true);
  const [user, setUser] = useState(
    {
      error: "",
      email: "",
      isSignIn: false,
      password: "",
      img: "",
      firstName: "",
      lastName: ""

    }
   );
 

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  var fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleSignIn = () => {
    firebase.auth().signInWithPopup(googleProvider).then(function (result) {
      console.log(result)
      const { email, photoURL,displayName } = result.user
      const signInObj = {
        firstName: displayName,
        email: email,
        img: photoURL,
        isSignIn: true,
        error: "",
        success: false
      }
      setUser(signInObj)
      setLoggedInUser(signInObj);
      history.replace(from);

    }).catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      console.log(errorCode, errorMessage, email, credential);
    });
  }
  const handleFbSignIn = () => {
    firebase.auth().signInWithPopup(fbProvider).then(function (result) {
      const { email, photoURL,displayName } = result.user
      const signInObj = {
        firstName: displayName,
        email: email,
        img: photoURL,
        isSignIn: true,
        error: "",
        success: false
      }
      setUser(signInObj)
      setLoggedInUser(signInObj);
      history.replace(from);
      
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(errorCode, errorMessage, email, credential)
    });
  }


  const handleBlur = (e) => {
    let isFormValid = true;


    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);

    }

    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const isThereNumber = /\d{1}/.test(e.target.value)
      isFormValid = isPasswordValid && isThereNumber;
    }
    if (isFormValid) {
      const oldUserInfo = { ...user };
      oldUserInfo[e.target.name] = e.target.value;
      setUser(oldUserInfo);
    }


  }
  const handleResponse = (res, redirect) => {
    user.message = res.message;
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
}
  const handleSubmit = (e) => {
    e.preventDefault()
    if (oldUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const oldUserInfo = { ...user };
          oldUserInfo.error = "";
          oldUserInfo.success = true;
          console.log(res)
          setUser(oldUserInfo);
          
          
        })
        .catch(function (error) {

          const oldUserInfo =  {...user };
          oldUserInfo.error = error.message;
          oldUserInfo.success = false;
          console.log(error)
          setUser(oldUserInfo);
          
        });
    }
    console.log(oldUser)
    if (!oldUser && user.email && user.password) {
      
      console.log(user)
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const oldUserInfo = { ...user };
        oldUserInfo.error = "";
        oldUserInfo.success = true;
        
        setUser(oldUserInfo);
        console.log(user)
        handleResponse(user,true); 
        
      })
      .catch(function (error) {
        const oldUserInfo =  {...user };
        oldUserInfo.error = error.message;
        oldUserInfo.success = false;
        console.log(error)
        setUser(oldUserInfo);
       handleResponse(error,false);
      
      });
    }
   
  }
console.log(user)
  return (

    <div className="container shadow-lg p-3 mb-5 bg-white rounded" style={{ width: "350px", textAlign: "center" }}>

      <form action="" onSubmit={handleSubmit}>
        <br />
        <br />
        {
          oldUser && <><label htmlFor="firstName" className="t-a-l">First Name:</label>
            <input
              type="text"
              name="firstName"
              onBlur={handleBlur}
              className="form-control"
              placeholder="Enter First Name"
              id="firstName" required
            />

          </>
        }
        {
          oldUser && <> <label htmlFor="lastName" className="t-a-l">Last Name:</label>
            <input
              type="text"
              name="lastName"
              onBlur={handleBlur}
              className="form-control"
              placeholder="Enter Last Name"
              id="lastName"
              required
            />
          </>
        }
        <label htmlFor="email" className="t-a-l">Email Address:</label>
        <input
          type="email"
          name="email"
          onBlur={handleBlur}
          className="form-control"
          placeholder="Enter email"
          id="email"
          required />


        <label htmlFor="password" className="t-a-l">Password:</label>
        <input
          type="password"
          name="password"
          onBlur={handleBlur}
          className="form-control"
          placeholder="Enter your Password"
          id="password"
          required
        />
          {
          oldUser && <><label htmlFor="confirm_password" className="t-a-l">Confirm Password:</label>
            <input
              type="password"
              
              onChange={handleBlur}
              className="form-control"
              placeholder="Enter your Password"
              id="confirm_password"
              required />

          </>
          }
          
       
      <br />
      <input className="btn btn-warning pr-5 pl-5" type="submit" value={oldUser ? "Create an account" : "Log In"} />
      </form>

      
    
      
      {
    user.success && <p style={{ color: "green" }}>Account {oldUser ? "Created" : " Logged In"} Successfully</p>
  }

  <p className="text-danger">{user.error}</p>
  {
    oldUser ? <Link onClick={() => setOldUser(!oldUser)}> Already Have an Account</Link> :
      <Link onClick={() => setOldUser(!oldUser)}>Registrar an Account</Link>
  }

      <h6>or</h6>
      <br />

   <button style={{ outline: "none", border: "1px solid blue", marginRight: "20px" }} onClick={handleSignIn}><img style={{ height: "40px" }} src="https://img.icons8.com/cute-clipart/64/000000/google-logo.png" alt="google" /></button>
  
 <button style={{ outline: "none", border: "1px solid blue" }} onClick={handleFbSignIn}><img style={{ height: "40px" }} src="https://img.icons8.com/cute-clipart/64/000000/facebook-new.png" alt="facebook" /></button>
  
    </div >


);}


export default Login;
