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




const filter = useSelector(state => state.filter.filter)
const contactsList = useSelector(state =>   state.contacts.contact);
   
const handlerContactDelete = (evt) => {
const deleteContactId = evt.currentTarget.getAttribute("id");
dispatch(contactOperation.deleteContact(deleteContactId));
return;
}
    
const getContacts = (contactsList, filter) => {


const filteredContacts = contactsList.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
const filterAB = [...filteredContacts].sort((firstStudent, secondStudent) =>firstStudent.name.localeCompare(secondStudent.name));
const sortedContacts = filterAB.sort((a, b) => {
  // Поміняйте порядок вище, якщо об'єкт 'a' має favorite: true, а об'єкт 'b' - favorite: false
  if (a.favorite && !b.favorite) {
    return -1;
  }
  // Поміняйте порядок нижче, якщо об'єкт 'b' має favorite: true, а об'єкт 'a' - favorite: false
  if (!a.favorite && b.favorite) {
    return 1;
  }
  // Якщо обидва об'єкта мають favorite: true або favorite: false, то порівнюємо їхні інші властивості (наприклад, name)
  return a.name.localeCompare(b.name);
});

    
return sortedContacts
};

const addFavorite = (evt) =>{
    const pass = evt.currentTarget.getAttribute("favorite")

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
    

}   

const data = getContacts(contactsList, filter);

return (
    <>
        {/* {loading && ()}  */}
        <ul className={css.list}>
            { data.map(contact => 
                <li className={css.item} key={contact.id}>
                    <ul className={css.listDataUser}>
                        <li><p className={css.name}>     {contact.name}</p></li>
                        <li><p className={css.number}>  {contact.number} </p> </li>
                    </ul>
                    
                    
                    {/* <Button click={handlerContactDelete} id={contact.id} type={'button'} text={'Delete'} /> */}
                    <ul className={css.listBtn}>
                        <li> <a href={`tel:${css.number}`}>
                            <BtnSvg>
                            <ImagesPhoneCall className={css.svg }  width='18' height='18' />
                            </BtnSvg>
                            </a>
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
        
       </> 
    )
}