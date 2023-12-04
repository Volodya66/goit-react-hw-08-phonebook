
import { Route, NavLink, Routes, Navigate } from "react-router-dom";

import { useDispatch,useSelector  } from 'react-redux'
import { useEffect } from "react";

import Register from "pages/Register";
import Login from "pages/Login";
import RegisterRoute from "./PablicRoute";
import AuthNav from "./AuthNav";
import HomeNav from "./HomeNav";
import UserNav from "./UserNav";

import { currentUser } from "redux/connectionsAPI/auth-operations";


export default function App  () {
const isLoggedIn = useSelector(state  => state.users.isLoggedIn);

const dispatch = useDispatch();

useEffect(() => {
dispatch(currentUser())   
},[dispatch])

   return (
      <div className="wrapper" >
      
  <ul className='listNavigate'>
  <li className='listNavigateItem'> <NavLink  className='pageNavigate' to='/'> Home </NavLink> </li>
  {!isLoggedIn ? (<AuthNav/>) :(<UserNav/>)}
  </ul >
  <Routes >  
    <Route exact path="/" element={<HomeNav/>} />   
    <Route path="/register" element={<RegisterRoute redirectTo="/" component={<Register/>} />} />  
    <Route path="/login" element={<RegisterRoute redirectTo="/" component={<Login/>} />} />  
    
     <Route path="*" element={ <Navigate to='/'/>} />
  </Routes>

</div>
    )
}
