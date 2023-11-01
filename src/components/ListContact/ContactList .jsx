import Button from '../Button/Button'

import css from './ListContact.module.css'

export default function ContactList ({ contacts,deleteContact }) {
   
    
    return (
        <ul className={css.list}>
            {contacts.map(contact => 
                <li className={css.item} key={contact.id}>{contact.name} :   {contact.number}
                    <Button click={deleteContact} id={contact.id} type={'button'} text={'Delete'} /> </li>
            )}
        </ul>
        
        
    )
}