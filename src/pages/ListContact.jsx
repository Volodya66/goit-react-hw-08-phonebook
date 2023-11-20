import Filter from "components/InputFilter/InputFilter";
import ContactList from "components/ListContact/ContactList ";
import { useSelector } from "react-redux";

import Loader from '../components/Loader/Loader'

export default function ContactsList ()  {
  
const loading = useSelector(state => state.contacts.isLoading)


return (
    
    <>
   
    <Filter /> 
     {loading && (<Loader/>)}
    <ContactList /> 
    </>

)


}
