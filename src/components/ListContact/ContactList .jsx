
import {useSelector, useDispatch} from 'react-redux'
import { useState } from 'react';

import BtnSvg from 'components/Button/ButtonSvg'
import Modals from 'components/Modal/ModalAddCont';

import {ReactComponent as ImagesDelete} from '../../images/delete.svg'
import { ReactComponent as ImagesPhoneCall } from '../../images/phoneCall.svg'

import css from './ListContact.module.css'
import Button from 'components/Button/Button'
import ContactForm from 'components/FormAddContact/FormAddContact/FormAddContact';
import { useEffect } from 'react'

import { getContactUser,deleteContact } from 'redux/contactAPI/contactOperations';
import { LoaderDelete } from 'components/Loader/Loader';

export default function ContactList() {
    
const [isModalOpen, setIsModalOpen] = useState(false);
const [deletingContactId, setDeletingContactId] = useState(null);
const dispatch = useDispatch();
const delContactLoader = useSelector(state => state.contact.loadingDeleteContact);
const contact = (useSelector(state => state.contact.contacts)?? []);
const filter = (useSelector(state => state.contact.filter) ?? " " );


useEffect(() => {
  
  dispatch(getContactUser())  

},[dispatch])


const handlerContactDelete = (evt) => {
const deleteContactId = evt.currentTarget.getAttribute("id");
setDeletingContactId(deleteContactId);
dispatch(deleteContact(deleteContactId));
return;
}
    
const getContacts = (contactsList, filter) => {


const filteredContacts = contactsList.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
const filterAB = [...filteredContacts].sort((firstStudent, secondStudent) =>firstStudent.name.localeCompare(secondStudent.name));


return filterAB;
};
 

const data = getContacts(contact, filter);

return (
    <>
        <ul className={css.list}>
            { data.map(contact => 
                <li className={css.item} key={contact.id}>
                    <ul className={css.listDataUser}>
                        <li><p className={css.name}>     {contact.name}</p></li>
                        <li><p className={css.number}>  {contact.number} </p> </li>
                    </ul>
                    
                  
                    
                    <ul className={css.listBtn}>
                          
                        <li>
                        <div className={css.loaderDeleteContact}>
                                {

                                    deletingContactId===contact.id && delContactLoader ? (<LoaderDelete />) : ''
                            }
                        </div>
                        </li>
                        <li> <a href={`tel:${contact.number}`}>
                            <BtnSvg>
                            <ImagesPhoneCall className={css.svg }  width='18' height='18' />
                            </BtnSvg>
                            </a>
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
                <ContactForm closeModal={() => setIsModalOpen(false)} />
        </Modals>
      )}

       </> 
    )
}