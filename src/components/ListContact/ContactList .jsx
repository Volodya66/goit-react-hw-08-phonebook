// import {deleteContact,favoriteContact} from '../../redux/slice'
// import Button from '../Button/Button'


import {useSelector, useDispatch} from 'react-redux'

import * as contactOperation from 'redux/contact/contactOperations'
import BtnSvg from 'components/Button/ButtonSvg'

import {ReactComponent as ImagesDelete} from '../../images/delete.svg'
import { ReactComponent as ImagesPhoneCall} from '../../images/phoneCall.svg'
import {ReactComponent as ImagesStar} from '../../images/star.svg'
import css from './ListContact.module.css'
// import { useEffect } from 'react'

export default function ContactList () {

const dispatch = useDispatch()

// useEffect(() => {
// dispatch(contactOperation.CreateFetchContacts())   
// },[dispatch])


const filter = useSelector(state => state.filter.filter)
const contactsList = useSelector(state =>   state.contacts.contact);




    
const handlerContactDelete = (evt) => {
const deleteContactId = evt.currentTarget.getAttribute("id");
dispatch(contactOperation.deleteContact(deleteContactId));
return;
}
    
const getContacts = (contactsList, filter) => {

return contactsList.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

};

const addFavorite = (evt) =>{
    const pass = evt.currentTarget.getAttribute("favorite")
    console.log('pass: ', pass);
    const idFavorite = evt.currentTarget.getAttribute("id");
// console.log('pass: ', pass);

switch (pass) {
    case "no":
        dispatch(contactOperation.fetchContactById(idFavorite));
        ;
     break;
     
    case "yes":
        dispatch(contactOperation.favoriteFalse(idFavorite));
    break;
    
    default:return
}
    
    


// console.log('evt.currentTarget: ', evt.currentTarget);
// console.log('favorite value: ', evt.currentTarget.getAttribute("favorite"));
// dispatch(contactOperation.fetchContactById(idFavorite))

// const objFavorite =  contactsList.find(contact => contact.id === contactIdFavorite);
// dispatch(favoriteContact({id : contactIdFavorite, status : objFavorite.favorite}))
}   

const data = getContacts(contactsList, filter);
    const filterAB = [...data].sort((firstStudent, secondStudent) =>
        firstStudent.name.localeCompare(secondStudent.name));

return (

        <ul className={css.list}>
            { filterAB.map(contact => 
                <li className={css.item} key={contact.id}>
                    <ul className={css.listDataUser}>
                        <li><p className={css.name}>     {contact.name}</p></li>
                        <li><p className={css.number}>  {contact.number} </p> </li>
                    </ul>
                    
                    
                    {/* <Button click={handlerContactDelete} id={contact.id} type={'button'} text={'Delete'} /> */}
                    <ul className={css.listBtn}>
                        <li> <BtnSvg>
                            <ImagesPhoneCall className={css.svg }  width='18' height='18' />
                        </BtnSvg>
                        </li>
                        <li><BtnSvg>
                            <ImagesStar className={css.svg + (contact.favorite ? ' favorite' : '')} id={contact.id}
                            favorite={contact.favorite? "yes": "no"}  onClick={addFavorite}  width='18' height='18' /> 
                        {/* onClick={addFavorite} */}
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
        
        
    )
}