import { configureStore } from "@reduxjs/toolkit";

import contactsReducer  from './contactReducer'

export const store = configureStore({
    reducer: {
       contacts: contactsReducer,
    }
})
