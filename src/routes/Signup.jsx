/* eslint-disable no-unused-vars */

import { useState, useEffect } from 'react';
import {auth} from '../firebase';
import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css'
import logo from "../assets/freebirdlogo.png"
import { useTranslation } from 'react-i18next'
import React, { Suspense } from "react";
import LanguageSelector from '../components/Languageselector'
// const LanguageSelector = React.lazy(() => import("../components/LanguageSelector"));



const Signup = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [isNameActive, setIsNameActive] = useState(false);
    const [isEmailActive, setIsEmailActive] = useState(false);
    const [isPasswordActive, setIsPasswordActive] = useState(false);
    // const [authUser, setAuthUser] = useState(null)
    const navigate = useNavigate();
    const { t } = useTranslation();

   function handleNameChange (text){
   setName(text)
  if (text !== '') {
    setIsNameActive(true);
  } else {
    setIsNameActive(false);
  }
   }
   

   function handleEmailChange (text){
    setEmail(text)
   if (text !== '' && email) {
     setIsEmailActive(true);
   } else {
     setIsEmailActive(false);
   }
    }


    function handlePasswordChange (text){
      setPassword(text)
     if (text !== '' && password) {
       setIsPasswordActive(true);
     } else {
       setIsPasswordActive(false);
     }
      }


    

    async function signUp () {
        if(!email || !password) return alert('Enter all fields');

       
    try {
        const userCredential =  await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredential.user.displayName)
        
        await updateProfile(userCredential.user, {displayName: name})
        navigate("/welcomepage")
        } 
    catch (error) {
        console.log({errorCode: error.code, message:error.message})
    }
    
    }

  return (
   <>
    <div className='box'>

    <div className='logo'>
    <img src={logo} alt="freebirdlogo" className="desktop-img"/>
    </div>
    <h4 className='header'>{t('Profile')}</h4>
    
         <div className='input-container' >

         <input id='name' value={name} type='text' onChange={(e)=>handleNameChange(e.target.value)}/>
         <span className='italics'>{t("Visible")}</span>
         <label className={ isNameActive ? "Active" : ""}  htmlFor='name' >{t('Username.label')}</label>
         </div>
        
          <div className='gap'></div>
          
         <div className='input-container' >
         <input id='email' value={email} type='email'  onChange={(e)=>handleEmailChange(e.target.value)}/>
        
        <label className={ isEmailActive ? "Active" : ""}   htmlFor='email'>{t("Email.label")}</label>
         </div>
        
         <br/>
         <div className='gap'></div>
        <div className='input-container'>
        <input id='password' value={password} type='password' onChange={(e)=>handlePasswordChange(e.target.value)}/>
        <span className='italics'>{t("Eightchar")}</span>
        <label className={ isPasswordActive ? "Active" : ""}  htmlFor='password' >{t("Password.label")}</label>
        </div>
        
       

        
         
          

          <br/>

        <button className='btn' onClick={signUp}>{t("Signup")}</button>
        <div className='gap'></div>
        <button className='btn2'>{t("Login")}
            <Link to="/login"> </Link>
        </button>
        <div className='gap'></div>
        <Suspense fallback={<div>Loading...</div>}><LanguageSelector/></Suspense>
       
    
    </div>
    </>
  )
}

export default Signup