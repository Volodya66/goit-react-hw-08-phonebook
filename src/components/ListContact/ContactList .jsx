import {useSelector,useDispatch} from 'react-redux'
import {  useEffect } from 'react';

import { upgradeListContact } from 'redux/action';

import Button from '../Button/Button'

import css from './ListContact.module.css'

export default function ContactList ({ deleteContact }) {

let dispatch = useDispatch()

    let dataLocalStorage = localStorage.getItem("contacts list");
    let dataLocalStorParse = JSON.parse(dataLocalStorage);
    console.log('dataLocalStorParse: ', dataLocalStorParse);

    let contactsList = useSelector(state => state.listContacts);
    
    console.log('contactsList: ', contactsList);

useEffect(() => {
    // const dataLocalStorage = localStorage.getItem('contacts list');
    const storedContacts = JSON.parse(dataLocalStorage) || contactsList;

    
    dispatch(upgradeListContact(storedContacts));
  }, [dispatch]);

  useEffect(() => {
   
    localStorage.setItem('contacts list', JSON.stringify(contactsList));
  }, [contactsList]);

    // let contacts = dataLocalStorParse ?? contactsList
    // console.log('contactsList: ', contacts);
// useEffect(() => {
//     if(!dataLocalStorParse){
//     localStorage.setItem("contacts list", JSON.stringify(contactsList));
// };

// },[dataLocalStorParse])


// useEffect(() => {
    
// if (  contactsList.length  > dataLocalStorParse.length) {
//     console.log('true')
//     localStorage.setItem("contacts list", JSON.stringify(contactsList));
//     dispatch(upgradeListContact(dataLocalStorParse));
//         }


// },[contactsList])
   

    
    return (
        <ul className={css.list}>
            {  contactsList.map(contact => 
                <li className={css.item} key={contact.id}>{contact.name} :   {contact.number}
                    <Button click={deleteContact} id={contact.id} type={'button'} text={'Delete'} /> </li>
            )}
        </ul>
        
        
    )
}