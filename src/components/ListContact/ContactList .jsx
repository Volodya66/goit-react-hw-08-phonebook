import {useSelector, useDispatch} from 'react-redux'

import {deleteContact,favoriteContact} from '../../redux/slice'

// import Button from '../Button/Button'
import BtnSvg from 'components/Button/ButtonSvg'

import {ReactComponent as ImagesDelete} from '../../images/delete.svg'
import { ReactComponent as ImagesPhoneCall} from '../../images/phoneCall.svg'
import {ReactComponent as ImagesStar} from '../../images/star.svg'
import css from './ListContact.module.css'

export default function ContactList () {

const dispatch = useDispatch()

    // state.contact.filteredContacts.length>1 ? state.contact.value : state.contact.filteredContacts
    
let contactsList = useSelector(state =>  state.contact.value );
// console.log('contactsList: ', contactsList);
let filter = useSelector(state =>  state.filter.filter);
// console.log('filter: ', filter);
//     console.log('contactsList: ', contactsList);
    
const handlerContactDelete = (evt) => {
const deleteContactId = evt.currentTarget.getAttribute("id");
// console.log('deleteContactId: ', deleteContactId);
dispatch(deleteContact(deleteContactId));

return
}
    
const getContacts = (contactsList, filter) => {
    //? [...scores].sort((a, b) => a - b)
    //  arrContacts.filter(contact => contact.name.toLowerCase().includes(contactsFiltered))
return contactsList.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));


};

const addFavorite = (evt) =>{
const contactIdFavorite = evt.currentTarget.getAttribute("id");
const objFavorite =  contactsList.find(contact => contact.id === contactIdFavorite);
// console.log('objFavorite beforeeeeeeee: ', objFavorite);
    // evt.currentTarget.classList.toggle('favorite')
    dispatch(favoriteContact({id : contactIdFavorite, status : objFavorite.favorite}))
// if(!objFavorite.favorite){
//     console.log(objFavorite.favorite)
//     evt.currentTarget.classList.toggle('favorite')
// } else {
//     evt.currentTarget.classList.toggle('favorite')
// }

}   

const data = getContacts(contactsList, filter);
const filterAB = [...data].sort((firstStudent, secondStudent) =>firstStudent.name.localeCompare(secondStudent.name));

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
                            <ImagesStar onClick={addFavorite} className={css.svg + (contact.favorite ? ' favorite'  : '')} id={contact.id} width='18' height='18'/> 
                        </BtnSvg>
                        </li>
                        <li><BtnSvg>
                            <ImagesDelete onClick={handlerContactDelete} id={contact.id}
                                className={css.svg} width='18' height='18' /> 
                        </BtnSvg>
                        </li>
                        
                    </ul>
                </li>
            )}
        </ul>
        
        
    )
}