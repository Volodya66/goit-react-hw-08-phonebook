import  { useState, useEffect} from 'react';

import ContactForm from './Form/Form'
import ContactList  from './ListContact/ContactList '
import Filter from './InputFilter/InputFilter'


let contactLists = [
    { id: 'id-1', name: 'Alyona Udod', number: '459-12-56' },
    {id: 'id-2', name: 'Dad', number: '443-89-12'},
    {id: 'id-3', name: 'Mom ❤', number: '645-17-79'},
    { id: 'id-4', name: 'Natalia Valko', number: '227-91-26' }
]



export default function App  () {
  
const [contact, setContact] = useState(() => {
 const dataLocalStorage = localStorage.getItem("contacts list");
  
 return JSON.parse(dataLocalStorage) ??contactLists;

 });
 const [filter, setFilter] =useState('');
 
  
useEffect(() => {
localStorage.setItem("contacts list",JSON.stringify(contact));
},[contact])
  
const pushedContacts = (newContact) => {
 const arrContacts = [...contact];

 const namePerson = newContact.name;
 const condition = arrContacts.some(contact => contact.name.toLowerCase() === namePerson.toLowerCase());
 
if (condition) {
  alert(`${namePerson} is already in contacts`);
  return
};
   
  setContact([...contact, newContact]);
};

const filterContacts = (evt) => {
  const param = evt.target.value;
  setFilter(param)
}

const actualNames=()=>{
  const arrContacts = [...contact];
  const contactsFiltered = filter.toLowerCase();
  const filteredContacts = arrContacts.filter(contact => contact.name.toLowerCase().includes(contactsFiltered));
  return filteredContacts;
}
  
const handlerContactDelete = (evt) => {
const deleteContactId = evt.target.getAttribute('id');
const filteredContacts = contact.filter(contact => contact.id !== deleteContactId);
setContact(filteredContacts) ;
return
}   
   
  
   return (
      <div style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center'
      }} >
  
  <h2>Phone book</h2>   
  <ContactForm
  newContact={pushedContacts} />
        
  <h2>Contacts</h2>
  
  <Filter 
  value={filter} 
  parameterTracker={filterContacts} />
  <ContactList deleteContact={handlerContactDelete}  contacts={actualNames()} />
 
</div>
    )
}
