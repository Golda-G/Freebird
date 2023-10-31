// import React from 'react'
import {  useNavigate} from "react-router-dom";
// import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth'


const Welcomepage = () => {
   const [authUser, setAuthUser] = useState(null)
   const navigate = useNavigate();

  useEffect(()=> {

    const loggedInUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      
      }
    });

 
   
  
    return () => {
      loggedInUser()
    }
   }, [authUser?.email]);
   

 
    // async function logOut () { 
    //   await signOut(auth)
           
            
    //   console.log('Signed Out')
    //   navigate('/login')
    //   }        
          
    
  return (
<>
    
  

    <div className="welcomeuser" style={{ height:'40px', marginBottom:'20px'}}>
    {authUser && 
    <h5 style={{marginTop:'10px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'25px',}}>Welcome {authUser.displayName}!</h5>} 
    
      </div>

      <button onClick={()=> {navigate('/')}}>return to sign up</button>

      
         
          

     
    </>
  )
}

export default Welcomepage