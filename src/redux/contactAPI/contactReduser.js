import { createSlice } from "@reduxjs/toolkit";

import { getContactUser,createNewContact,deleteContact } from "./contactOperations";
import { logOut } from "redux/connectionsAPI/auth-operations";

const contact = createSlice({
name: 'contacts',   
  initialState: {
    contacts: [], 
    loadingState:false,
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
     state.loadingState = true;
    }) 
    .addCase(createNewContact.fulfilled, (state, {payload}) => {
    console.log('payload: ', payload);
    state.contacts.push(payload);
    // state.contacts = payload; 
    state.loadingState = false;
    })
    .addCase(createNewContact.rejected, (state) => {
      state.loadingState = false;
    })  
    // ????
    .addCase(deleteContact.pending, (state) => {
     state.loadingState = true;
    }) 
    .addCase(deleteContact.fulfilled, (state, action) => {
      console.log('action: ', action);

    // state.contacts.push(payload);
    // state.contacts = payload; 
    state.loadingState = false;
    })
    .addCase(deleteContact.rejected, (state) => {
      state.loadingState = false;
    }) 
  
  }
  
})


export default contact.reducer;