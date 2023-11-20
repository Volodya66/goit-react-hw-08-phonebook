import {  createSlice } from "@reduxjs/toolkit";


import { CreateFetchContacts,fetchContactById,favoriteFalse,deleteContact,newContact } from "./contactOperations";







const contact = createSlice({
  name: 'contact',   
  initialState: { contact: [], isLoading: false, error: null },
  reducers: {},  // Залиште це пустим, якщо вам не потрібні додаткові actions

  extraReducers: (builder) => {
    builder
    .addCase(CreateFetchContacts.pending, (state) => {
        state.isLoading = true;
           // return {...state, isLoading:true}
    })
    .addCase(CreateFetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contact = action.payload;
        state.error = null;
         // return {...state, contact: action.payload,isLoading:false}
    })
    .addCase(CreateFetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        // return {...state, error:action.payload,isLoading:false}
    })
    .addCase(fetchContactById.fulfilled, (state, action) => {
        const idx = state.contact.findIndex(el => el.id === action.payload.id);
        state.contact.splice(idx, 1, action.payload);
    })
    .addCase(fetchContactById.rejected, (state, action) => {
    state.error = action.payload;
    })
    .addCase(favoriteFalse.fulfilled, (state, action) => {
        const idx = state.contact.findIndex(el => el.id === action.payload.id);
        state.contact.splice(idx, 1, action.payload);
    })
    .addCase(favoriteFalse.rejected, (state, action) => {
    state.error = action.payload;
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
    const idx = state.contact.findIndex(el => el.id === action.payload.id);
    state.contact.splice(idx, 1);   
    })
    .addCase(deleteContact.rejected, (state, action) => {
    state.error = action.payload;
    })
    .addCase(newContact.fulfilled, (state, action) => {
        console.log('action: ', action);
        console.log('action: ', action);
    state.contact.push(action.payload);   
    })
  }
});

export default contact.reducer;




// const contact = createReducer([], {
//     [CreateFetchContacts.fulfilled]: (_, action) => action.payload,
    
    
// });

// const isLoading = createReducer(false, {
//     [CreateFetchContacts.pending]: () => true,
//     [CreateFetchContacts.fulfilled]: () => false,
//     [CreateFetchContacts.rejected]: () => false,
// });

// const error = createReducer(null, {
//     [CreateFetchContacts.rejected]: (_, action) => action.payload,
//     [CreateFetchContacts.pending]: () => null
// })

// export default combineReducers({
//     contact,
//     isLoading,
//     error,
// })











// import * as contactsActions from './contactActions'

// const contact = createReducer([], {
//     [contactsActions.fetchContactsSuccess]: (_, action) => action.payload,
    
    
// });

// const isLoading = createReducer(false, {
//     [contactsActions.fetchContactsRequest]: () => true,
//     [contactsActions.fetchContactsSuccess]: () => false,
//     [contactsActions.fetchContactsError]: () => false,
// });

// const error = createReducer(null, {
//     [contactsActions.fetchContactsError]: (_, action) => action.payload,
//     [contactsActions.fetchContactsRequest]: () => null
// })

// export default combineReducers({
//     contact,
//     isLoading,
//     error,
// })