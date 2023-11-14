import { configureStore, createAction,createReducer } from '@reduxjs/toolkit'
// import { rootReducer } from "./reducer";

import { myReduser } from './reduser';


// const deleteContact = createAction('listContacts/delete',);
// console.log('deleteContact: ', deleteContact.toString());
// const addNewContact = createAction('listContacts/addNewContacts');

// export const myReduser = createReducer(0, {
    
// [deleteContact] : (state, action)=> state + action.payload,
// [addNewContact]: (state, action)=> state + action.payload
    
// })

export const store = configureStore({
    reducer : {
        listContacts: myReduser,
        filter: "",
    },
});





