import { createReducer } from "@reduxjs/toolkit";

import {addNewContact,upgradeListContact} from './action'



let contactLists = [
    { id: 'id-1', name: 'Alyona Udod', number: '459-12-56' },
    { id: 'id-2', name: 'Dad', number: '443-89-12' },
    { id: 'id-3', name: 'Mom ❤', number: '645-17-79' },
    { id: 'id-4', name: 'Natalia Valko', number: '227-91-26' }
];

// const deleteContact = createAction('listContacts/delete',);
// console.log('deleteContact: ', deleteContact.toString());
// const addNewContact = createAction('listContacts/addNewContacts');

// let dataLocalStorage = localStorage.getItem("contacts list");
// let dataLocalStorParse = JSON.parse(dataLocalStorage);

// export const myReduser = createReducer(contactLists, {
    
// // [deleteContact] : (state, action)=> state + action.payload,
// [addNewContact]: (state, action)=> [...state , action.payload],
// [upgradeListContact] : (_, action) => action.payload,
    
// })

export const myReduser = createReducer(contactLists, (builder) => {
  builder
    // .addCase(deleteContact, (state, action) => state.filter(contact => contact.id !== action.payload))
    .addCase(addNewContact, (state, action) => [...state, action.payload])
    .addCase(upgradeListContact, (state, action) => action.payload);
});