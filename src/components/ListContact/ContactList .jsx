


import {useSelector, useDispatch} from 'react-redux'
import { useState } from 'react';
// import * as contactOperation from 'redux/contact/contactOperations'
import BtnSvg from 'components/Button/ButtonSvg'
import Modals from 'components/Modal/ModalAddCont';

import {ReactComponent as ImagesDelete} from '../../images/delete.svg'
import { ReactComponent as ImagesPhoneCall} from '../../images/phoneCall.svg'
import {ReactComponent as ImagesStar} from '../../images/star.svg'
import css from './ListContact.module.css'
import Button from 'components/Button/Button'
import ContactForm from 'components/FormAddContact/FormAddContact/FormAddContact';
import { useEffect } from 'react'

import { getContactUser,deleteContact } from 'redux/contactAPI/contactOperations';


// const initialStates = [
//     { id: 'id-1', name: 'Alyona Udod', number: '459-12-56', favorite: false },
//     { id: 'id-5', name: 'Nadiia Bulmak', number: '463-21-29', favorite: false },
//     { id: 'id-2', name: 'Dad', number: '443-89-12', favorite: false },
//     { id: 'id-3', name: 'Mom ❤', number: '645-17-79', favorite: false },
//     { id: 'id-4', name: 'Natalia Valko', number: '227-91-26', favorite: false },
        
// ];


export default function ContactList () {
const [isModalOpen, setIsModalOpen] = useState(false);
const dispatch = useDispatch()
const contact = useSelector(state => state.contact.contacts)
console.log('contact: ', contact);
useEffect(() => {
  
  dispatch(getContactUser())  

},[dispatch])



// const filter = useSelector(state => state.filter.filter)
// const contactsList = useSelector(state =>   state);
// console.log('contactsList: ', contactsList);
   
const handlerContactDelete = (evt) => {

const deleteContactId = evt.currentTarget.getAttribute("id");
console.log('deleteContactId: ', deleteContactId);
dispatch(deleteContact(deleteContactId));
return;
}
    
// const getContacts = (contactsList, filter) => {


// const filteredContacts = contactsList.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
// const filterAB = [...filteredContacts].sort((firstStudent, secondStudent) =>firstStudent.name.localeCompare(secondStudent.name));
// const sortedContacts = filterAB.sort((a, b) => {
//   // Поміняйте порядок вище, якщо об'єкт 'a' має favorite: true, а об'єкт 'b' - favorite: false
//   if (a.favorite && !b.favorite) {
//     return -1;
//   }
//   // Поміняйте порядок нижче, якщо об'єкт 'b' має favorite: true, а об'єкт 'a' - favorite: false
//   if (!a.favorite && b.favorite) {
//     return 1;
//   }
//   // Якщо обидва об'єкта мають favorite: true або favorite: false, то порівнюємо їхні інші властивості (наприклад, name)
//   return a.name.localeCompare(b.name);
// });

    
// return sortedContacts
// };

// const addFavorite = (evt) =>{
    
//     const pass = evt.currentTarget.getAttribute("favorite")
//     const idFavorite = evt.currentTarget.getAttribute("id");

// switch (pass) {
//     case "no":
//      dispatch(contactOperation.fetchContactById(idFavorite));
//         ;
//     break;
     
//     case "yes":
//      dispatch(contactOperation.favoriteFalse(idFavorite));
//     break;
    
//     default:return
// }
    

// }   

// const data = getContacts(contactsList, filter);

return (
    <>
        <ul className={css.list}>
            {contact && contact.map(contact => 
                <li className={css.item} key={contact.id}>
                    <ul className={css.listDataUser}>
                        <li><p className={css.name}>     {contact.name}</p></li>
                        <li><p className={css.number}>  {contact.number} </p> </li>
                    </ul>
                    
                    
                    
                    <ul className={css.listBtn}>
                        <li> <a href={`tel:${contact.number}`}>
                            <BtnSvg>
                            <ImagesPhoneCall className={css.svg }  width='18' height='18' />
                            </BtnSvg>
                            </a>
                        </li>
                        <li><BtnSvg>
                            <ImagesStar  id={contact.id}
                            // favorite={contact.favorite? "yes": "no"}  onClick={addFavorite} 
                            width='18' height='18' /> 
                        </BtnSvg>
                        </li>
                        <li><BtnSvg>
                            <ImagesDelete id={contact.id} onClick={handlerContactDelete}
                                className={css.svg} width='18' height='18' /> 
                        </BtnSvg>
                        </li>
                        
                    </ul>
                </li>
            )}
        </ul>

        
            {/* <li><Button type={'button'} text={'Add new contact'} onClick={''} styles1={"style"} /></li> */}
        <Button type={'button'} id='9' text={'Add new contact'}
            onClick={() => setIsModalOpen(true)} styles1={"styleContactList"}
        />

       {isModalOpen && (
        <Modals onClose={() => setIsModalOpen(false)}>
         <ContactForm/>
        </Modals>
      )}

       </> 
    )
}