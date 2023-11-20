
import { Route, NavLink, Routes, Navigate } from "react-router-dom";
import { useEffect } from 'react'
import {  useDispatch } from 'react-redux'
import * as contactOperation from 'redux/contact/contactOperations'
// import Loyayt from './Loyayt/Loyayt';
// import ContactForm from './Form/Form'
// import ContactList  from './ListContact/ContactList '
// import Filter from './InputFilter/InputFilter'

import HomeAddContacts from "pages/HomeAddCont";
import ContactsList from "pages/ListContact";

export default function App  () {

const dispatch = useDispatch()

useEffect(() => {
dispatch(contactOperation.createFetchContacts())   
},[dispatch])

   return (
      <div className="wrapper" >
       
  <h1 className='titleWrapper'> Phone book </h1>
  
   <ul className='listNavigate'>
    <li className='listNavigateItem'> <NavLink  className='pageNavigate' to='/'> Add contact</NavLink></li>
    <li className='listNavigateItem'> <NavLink className='pageNavigate' to='/contact'>Find contact</NavLink> </li>
  </ul >

       
 <Routes >
    
    <Route path="/" element={ <HomeAddContacts/>} />
    <Route path="/contact" element={ <ContactsList/>} />
   
    <Route path="*" element={ <Navigate to='/'/>} />
    
  </Routes>

  {/* <Loyayt title={'Phone book'}> */}
  {/* <h2>Phone book</h2>    */}
  {/* <ContactForm /> */}
        
  {/* <h2>Contacts</h2> */}
  
  {/* <Filter 
  value={filter} 
  parameterTracker={filterContacts} /> */}
  {/* <ContactList /> */}
 {/* </Loyayt> */}
</div>
    )
}
