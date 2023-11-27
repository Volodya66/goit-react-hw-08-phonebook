
import Filter from "components/InputFilter/InputFilter";
import ContactList from "components/ListContact/ContactList ";


import Loader from '../components/Loader/Loader'
import { useSelector } from "react-redux";

export default function ContactsList() {
    
// const state = useSelector(state => state)
// console.log('state: ', state);
const loading = useSelector(state => state.contact.loadingState)
// console.log('loading: ', loading);


return (
    
    <>
   
    <Filter /> 
     {loading && (<Loader/>)}
    <ContactList /> 
    </>

)


}
