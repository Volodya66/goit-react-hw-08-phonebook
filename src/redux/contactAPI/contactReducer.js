import { createSlice } from "@reduxjs/toolkit";

import { getContactUser,createNewContact,deleteContact } from "./contactOperations";
import { logOut } from "redux/connectionsAPI/auth-operations";

const contact = createSlice({
name: 'contacts',   
  initialState: {
    contacts: [], 
    loadingState: false,
    loadingDeleteContact: false,

    loadingAddContact: false,
    filter: '',
  }, 
  reducers: {
     setStatusFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) =>{
   builder
   .addCase(getContactUser.pending, (state) => {
     state.loadingState = true;
    }) 
    .addCase(getContactUser.fulfilled, (state, {payload}) => {
    state.contacts = payload; 
    state.loadingState = false;
    })
    .addCase(getContactUser.rejected, (state) => {
      state.loadingState = false;
    })
    // ???? 
    .addCase(logOut.fulfilled, (state) => {
      state.contacts = null;
    })
    // ????
    .addCase(createNewContact.pending, (state) => {
     state.loadingAddContact = true;
    }) 
    .addCase(createNewContact.fulfilled, (state, {payload}) => {
    state.contacts.push(payload);
    state.loadingAddContact = false;
    })
    .addCase(createNewContact.rejected, (state) => {
      state.loadingAddContact = false;
    })  
    // ????
    .addCase(deleteContact.pending, (state) => {
     state.loadingDeleteContact = true;
    }) 
    .addCase(deleteContact.fulfilled, (state, {payload}) => {
    const deleteUserId = payload.id ;
    const idx = state.contacts.findIndex(contact => contact.id === deleteUserId );
    state.contacts.splice(idx,1);
    state.loadingDeleteContact = false;
    })
    .addCase(deleteContact.rejected, (state) => {
      state.loadingDeleteContact = false;
    }) 
  
  }
  
})

export const { setStatusFilter } = contact.actions;
export default contact.reducer;