import Signup from "../routes/Signup"
import Welcomepage from '../routes/Welcomepage'
import {Routes , Route } from "react-router-dom";
export const App = () => {
  return (
    // <Signup/>

    <Routes> 
          <Route path ="/" element= {<Signup />}/> 
          <Route path ="/welcomepage" element= {<Welcomepage />}/> 
          
       </Routes> 
  )
}
