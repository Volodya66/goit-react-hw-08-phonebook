import React, { Component } from 'react';

import ContactForm from './Form/Form'
import ContactList  from './ListContact/ContactList '
import Filter from './InputFilter/InputFilter'

class App extends Component{

  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''

}
arrContacts = [...this.state.contacts];  
   
pushedContacts = (newContact) => {
  this.arrContacts = [...this.state.contacts];

  const namePerson = newContact.name;
  const condition = this.arrContacts.some(contact => contact.name.toLowerCase() === namePerson.toLowerCase());
 
if (condition) {
   alert(`${namePerson} is already in contacts`);
   return
  };
  
  this.setState(prevState => ({
    contacts: [...prevState.contacts, newContact]
  }));
};

filterContacts = (evt) => {
  const param = evt.target.value;
  this.setState({ filter:param });
   
  const filteredContacts = this.arrContacts.filter((contact) => {
    return contact.name.toLowerCase().includes(param.toLowerCase());
  });
  
  this.setState({ contacts: filteredContacts });
}

handlerContactDelete = (evt) => {
const deleteContactId = evt.target.getAttribute('id');

this.setState(prevState => {
    const filteredContacts = prevState.contacts.filter(contact => contact.id !== deleteContactId);
    return { contacts: filteredContacts };
  });

}   
   
   render() {
    return (
      <div style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center'
      }} >
  
  <h2>Phone book</h2>   
  <ContactForm
  newContact={this.pushedContacts} />
        
  <h2>Contacts</h2>
  
  <Filter 
  value={this.state.filter} 
  parameterTracker={this.filterContacts} />
  <ContactList deleteContact={this.handlerContactDelete}  contacts={this.state.contacts} />
 
</div>
    )
  }
}



export default App;