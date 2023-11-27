
import { Route, NavLink, Routes } from "react-router-dom";

import { useDispatch,useSelector  } from 'react-redux'
import { useEffect } from "react";

import Register from "pages/Register";
import Login from "pages/Login";
import AuthNav from "./AuthNav";
import HomeNav from "./HomeNav";
import UserNav from "./UserNav";

import { currentUser } from "redux/connectionsAPI/auth-operations";


export default function App  () {
const isLoggedIn = useSelector(state  => state.users.isLoggedIn)
console.log('isLoggedIn: ', isLoggedIn);

  
  
 const dispatch = useDispatch()

useEffect(() => {
dispatch(currentUser())   
},[dispatch])

   return (
      <div className="wrapper" >
       
  {/* <h1 className='titleWrapper'> Phone book </h1> */}
  
   <ul className='listNavigate'>
    {/* <li className='listNavigateItem'> <NavLink  className='pageNavigate' to='/'> Add contact</NavLink></li>
    <li className='listNavigateItem'> <NavLink className='pageNavigate' to='/contact'>Find contact</NavLink> </li> */}
         
    <li className='listNavigateItem'> <NavLink  className='pageNavigate' to='/'> Home </NavLink> </li>
    {!isLoggedIn ? (<AuthNav/>) :(<UserNav/>)}
 
  </ul >

       
 <Routes >
  
         
    <Route path="/" element={<HomeNav/>} />   
    <Route path="/register" element={ <Register/>} /> 
    <Route path="/login" element={ <Login/>} />  
      

  </Routes>

</div>
    )
}
