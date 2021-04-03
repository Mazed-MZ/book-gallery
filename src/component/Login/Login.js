import { UserContext } from './../../App';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState, useContext } from 'react';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
const Login = () => {

    const provider = new firebase.auth.GoogleAuthProvider();

    const [LoginUser, setLoginUser] = useContext(UserContext);

    const [user,setUser] = useState({
        isSignedIn: false,
        name: "",
        email: "",
        photo: ""
    })
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleSignIn = () =>{
        firebase.auth().signInWithPopup(provider)
        .then(res => {
          const {displayName, email, photoURL} = res.user;
          const signedInUser = 
          {isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL}
          setUser(signedInUser);
          setLoginUser(signedInUser);
          history.replace(from);
        })
        .catch(err=>{
          console.log(err.message);
        })
        }

    return (
        <div className='auth-btn'>
            <button className='button' onClick={handleSignIn}><FontAwesomeIcon icon={faGoogle} />      Sign in with google</button>
        </div>
    );
};

export default Login;