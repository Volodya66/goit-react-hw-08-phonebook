
import * as contactsAPI from './contacts-api'


import { createAsyncThunk } from '@reduxjs/toolkit'

//? автоматично добавляє pending/fulfilled/rejected ,
//? якшо немає помилки верне сонтакти якшо помилка, викине в консоль

export const createFetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, { rejectWidthValue }) => {
        try {
         const contact = await contactsAPI.fetchContacts();
         return contact;  
        } catch (err) {
            return rejectWidthValue(err);
        }
        
    }
);

export const fetchContactById = createAsyncThunk(
  'contacts/fetchContactsById',
    async (id, { rejectWidthValue }) => {
        try {
         const contact = await contactsAPI.fetchContactsById(id);
         return contact;  
        } catch (err) {
         return rejectWidthValue(err);
        }
        
    }
);

export const favoriteFalse = createAsyncThunk(
  'contacts/fetchContactsByIdFalse',
    async (id, { rejectWidthValue }) => {
        try {
         const contact = await contactsAPI.fetchContactsByIdFalse(id);
         return contact;  
        } catch (err) {
         return rejectWidthValue(err);
        }
        
    }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
    async (id, { rejectWidthValue }) => {
        try {
         const contact = await contactsAPI.fetchDeleteContact(id);
         return contact;  
        } catch (err) {
         return rejectWidthValue(err);
        }
        
    }
);

export const newContact = createAsyncThunk(
  'contacts/newContact',
    async (Param, { rejectWidthValue }) => {
        try {
const contact = await contactsAPI.fetchAddNewContact(Param);
         return contact;  
        } catch (err) {
         return rejectWidthValue(err);
        }
    }
);


// import * as contactsActions from './contactActions';

// export const fetchContacts = () =>  async dispatch =>{
// dispatch(contactsActions.fetchContactsRequest());

// try{
// const contact = await contactsAPI.fetchContacts();
// dispatch(contactsActions.fetchContactsSuccess(contact))
// } catch (err) {
// dispatch(contactsActions.fetchContactsError(err))
// }

// }

// ? взаємо повязані файли

// import { createAction } from "@reduxjs/toolkit";

// //? pending
// export const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
// //? fulfilled
// export const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
// //? rejected
// export const fetchContactsError = createAction('contacts/fetchContactsError');