import {useSelector, useDispatch} from 'react-redux'

import {deleteContact} from '../../redux/slice'

import Button from '../Button/Button'

import css from './ListContact.module.css'

export default function ContactList () {

const dispatch = useDispatch()

    // state.contact.filteredContacts.length>1 ? state.contact.value : state.contact.filteredContacts
    
let contactsList = useSelector(state =>  state.contact.value );
let filter = useSelector(state =>  state.filter.filter);
// console.log('filter: ', filter);
//     console.log('contactsList: ', contactsList);
    
const handlerContactDelete = (evt) => {
const deleteContactId = evt.target.getAttribute('id');
dispatch(deleteContact(deleteContactId));

return
}
    
const getContacts = (contactsList, filter) => {
    //  arrContacts.filter(contact => contact.name.toLowerCase().includes(contactsFiltered))
 return contactsList.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  
};

const data = getContacts(contactsList, filter)
// console.log('data: ', data);

    return (
        <ul className={css.list}>
            { data.map(contact => 
                <li className={css.item} key={contact.id}>{contact.name} :   {contact.number}
                    <Button click={handlerContactDelete} id={contact.id} type={'button'} text={'Delete'} /> </li>
            )}
        </ul>
        
        
    )
}