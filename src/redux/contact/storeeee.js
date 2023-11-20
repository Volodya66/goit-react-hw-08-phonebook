import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from './contactReducer'
import filter from './sliceFilter'

export const store = configureStore({
    reducer: {
       contacts: contactsReducer,
       filter : filter,
    }
})
