import  { useState} from 'react';



import ContactForm from './Form/Form'
import ContactList  from './ListContact/ContactList '
import Filter from './InputFilter/InputFilter'

export default function App  () {
  

 const [filter, setFilter] =useState('');
 

const filterContacts = (evt) => {
  const param = evt.target.value;
  setFilter(param)
}

// const actualNames=()=>{
//   const arrContacts = [...contact];
//   const contactsFiltered = filter.toLowerCase();
//   const filteredContacts = arrContacts.filter(contact => contact.name.toLowerCase().includes(contactsFiltered));
//   return filteredContacts;
// }
  
// const handlerContactDelete = (evt) => {
// const deleteContactId = evt.target.getAttribute('id');
// const filteredContacts = contact.filter(contact => contact.id !== deleteContactId);
// setContact(filteredContacts) ;
// return
// }   
   
  
   return (
      <div style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center'
      }} >
  
  <h2>Phone book</h2>   
  <ContactForm />
        
  <h2>Contacts</h2>
  
  <Filter 
  value={filter} 
  parameterTracker={filterContacts} />
  <ContactList />
 
</div>
    )
}
